import models from '../../app/models/index.js';
import AppException from '../../app/exceptions/AppException.js';

class BooksController {
    async getBook(req, res) {
        try {
            
            const books = await models.books.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    books,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getBooks(req, res) {
        try {
            let filter = {};
            if (req.query.title) filter.title = req.query.title;
            if (req.query.price) filter.price = req.query.price;
            const books = await models.books.find();
            res.status(202).json({
                status: 'success',
                data: {
                    books,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createBook(req, res) {
        try {
            let images = []
            const uploadedImages = req.files
            console.log(uploadedImages);
            for (const uploadedImage of uploadedImages) {
                images.push(uploadedImage.filename)
            }
            const newBook = await models.books.create({ 
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            status: req.body.status,
            image: images,

            });
            res.status(202).json({
                status: 'success',
                data: {
                    Book: newBook,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateBook(req, res) {
        try {
            const {title,description,price, type, status} = req.body
            const books = await models.books.updateOne({ id: req.params.id},{
                $set: {
                    title : title ,
                    description : description ,
                    price : price,
                    type: type, 
                    status: status,   
                }
            } ,
             {
                new: true,
                runValidators: true,
            }    
                );

            res.status(202).json({
                status: 'success',
                data: {
                    books,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }


  async deleteBook(req, res) {
    try {
      const books = await models.books.findByIdAndDelete(req.params.id);

            res.status(202).json({
                status: 'success',
                data: {
                    books,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
}

export default new BooksController();