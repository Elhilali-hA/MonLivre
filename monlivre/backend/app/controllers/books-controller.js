import models from '../../app/models/index.js';
import AppException from '../../app/exceptions/AppException.js';
import fs from 'fs'

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
            const books = await models.books.find(filter);
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
            let uploadedImages = req.files
            for (let uploadedImage of uploadedImages) {
                images.push(uploadedImage.filename)
            }
            console.log(uploadedImages);
            
            const newBook = await models.books.create({ 
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            status: req.body.status,
            image: images,

            });
            newBook.save().then(result =>{
                res.status(202).json({
                    status: 'success',
                    data: {
                        title: result.title,
                        price: result.price,
                        description: result.description,
                        type: result.type,
                        status: result.status,
                        image: result.images,
                    },
                });
            })
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateBook(req, res) {
        try {
            let images = []
            const uploadedImages = req.files
            for (const uploadedImage of uploadedImages) {
                images.push(uploadedImage.filename)
            }
            // const {title,description,price, type, status} = req.body
            const books = await models.books.updateOne(req.params.id, req.body)

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