import React, {useState, useEffect} from 'react'
import axios from 'axios'


function CreateBook() {

  const [addImage, setaddImage] = useState('')

  const baseURL = 'http://localhost:5000/api/books'
  const [Add_books, set_addbooks] = useState({
    title: "",
    description: "",
    price:"",
    type: "",
    image: null,
  })

 

  const [error, setError] = useState("") 

  // const handleChage = ({ currentTarget: input }) => {
  //   set_addbooks(prev => {return { ...prev, [input.name]: input.value }});
  // };

  console.log('image',addImage)

  const token = JSON.parse(localStorage.getItem('name'));

  console.log('booook img' , Add_books)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata =  new FormData();

      formdata.append('title', Add_books.title)
      formdata.append('description', Add_books.description)
      formdata.append('type', Add_books.type)
      formdata.append('price', Add_books.price)
      formdata.append('image', addImage)


      await axios.post(baseURL,  formdata, { headers: {"Authorization" : `Bearer ${token}`}});
      
      window.location = "/secretary/dashboard/books" 
      } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500 
      ){
        setError(error)
      }
    }
  }
  useEffect( () => {
    set_addbooks(prev => {return { ...prev, image: addImage }});
  },  [addImage])

  function handleInputChange(event) {

    set_addbooks({ ...Add_books, [event.target.name]: event.target.value });
    const fileupload = event.target.files[0];
    setaddImage(fileupload); 
}

  return (
    <>
    <form className="p-2" onSubmit={handleSubmit} encType="multipart/form-data">
  
    <div className="form-group ">
      <label htmlFor="inputtitle">title</label>
      <input type="text"
            placeholder='title'
            name='title'
            onChange={handleInputChange}
            required className="form-control" id="inputtitle" />
    </div>
    <div className="form-group ">
      <label htmlFor="inputdescription4">description</label>
      <textarea  type="description"
            placeholder="description"
            name="description"
            onChange={handleInputChange}
            value={set_addbooks.description}
            required className="form-control" id="inputdescription4" />
    </div>
  
  <div className="form-group">
    <label htmlFor="inputprice">Price</label>
    <input type="text"
            name="price"
            placeholder="price *"
            onChange={handleInputChange}
            value={set_addbooks.price}

             className="form-control"  />
  </div>
  <div className="form-group">
    <label htmlFor="inputtype">Type</label>
    <input type="text"
            name="type"
            placeholder="type *"
            onChange={handleInputChange}
            value={set_addbooks.type}
             className="form-control"  />
  </div>

  <div className="form-group">
    <label htmlFor="inputimage">Image</label>
    <input type="file"
            name="image"
            placeholder="image *"
          // onChange={(e) => setaddImage(e.target.files[0])}
          onChange={handleInputChange}

             className="form-control"  />
  </div>
  
 
  {/* {error && <div className="error_msg"> {error} </div>} */}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default CreateBook
