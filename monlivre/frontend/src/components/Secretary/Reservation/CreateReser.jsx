import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from '../SearchBar/Search'
import SearchClient from '../SearchBar/SearchClient'



function CreateReservation() {

  const ClientURL = "http://localhost:5000/api/clients";

  let [Clients, setClients] = useState([])
  async function getClient(){

    let res = await axios.get(ClientURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
      setClients(cli.clients);
    }
    }



    let [books, setbooks] = useState([])
    const  [selectedBook, setSelectedBook] = useState("")
    const  [selectedClient, setSelectedClient] = useState("")


    const BookURL = "http://localhost:5000/api/books";

    async function getBook(){
        let res = await axios.get(BookURL, { headers: {"Authorization" : `Bearer ${token}`} })
        let cli = await res.data
        if(cli){
            setbooks(cli.data.books);
                   
        }
        }


        useEffect( () => {
          getClient()
            getBook()
        },[])

  const baseURL = 'http://localhost:5000/api/orders/reservation'
  const [Add_reservations, set_addreservations] = useState({
    bookId: "",
    clientId: "",
    date_to:"",
    date_from: "",
  })



  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addreservations(prev => {return { ...prev, [input.name]: input.value }});
  };

  const token = JSON.parse(localStorage.getItem('name'));


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Add_reservations)
    try {
       await axios.post(baseURL,  Add_reservations, { headers: {"Authorization" : `Bearer ${token}`}});

  
      window.location = "/dashboard/reservations" 
      } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500 
      ){
        setError(error)
      }
    }
  }

  useEffect(() => {
    set_addreservations(prev => {return { ...prev, bookId: selectedBook}});
  }, [selectedBook, ])

  useEffect(() => {
    set_addreservations(prev => {return { ...prev, clientId: selectedClient}});
  }, [selectedClient])

  return (
    <>
    <form className="p-2" onSubmit={handleSubmit} encType="multipart/form-data">
     <SearchBar setSelectedBook={setSelectedBook}  data={books}  onChange={handleChage} placeholder='book title ...' /> 

   
    <div className="form-group ">
      <label htmlFor="inputclient4">Client</label>
     <SearchClient setSelectedClient={setSelectedClient}  data={Clients}  onChange={handleChage}  placeholder='user name ...' /> 
      
    </div>
  
  <div className="form-group">
    <label htmlFor="inputprice">Date From :</label>
    <input type="date"
            name="date_from"
            placeholder="from"
            onChange={handleChage}
            value={set_addreservations.date_from}

             className="form-control"  />
  </div>
  <div className="form-group">
    <label htmlFor="inputtype">Date To :</label>
    <input type="date"
            name="date_to"
            placeholder="date to *"
            onChange={handleChage}
            value={set_addreservations.date_to}
             className="form-control"  />
  </div>
      
  
 
  {/* {error && <div className="error_msg"> {error} </div>} */}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default CreateReservation
