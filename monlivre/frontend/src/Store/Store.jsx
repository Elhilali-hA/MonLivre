import React , { useState, useEffect} from 'react'
import axios from "axios";



const Store = ({value, last}) => {
    const token = JSON.parse(localStorage.getItem('name'));


    let [clients, setclients] = useState([])
 let [secretary, set_secretary] = useState([])
  let [admins, setadmins] = useState([])
  let [books, set_books] = useState([])
//   let [restaurant, setrestaurant] = useState([])

    
    const clientURL = "http://localhost:5000/api/clients";
    const secretaryURL = "http://localhost:5000/api/secretary";
    const adminsURL = "http://localhost:5000/api/admins";
    const bookURL = "http://localhost:5000/api/books";
    // const restauURL = "http://localhost:3000/api/restaurants";




  async function getClients(){

    let res = await axios.get(clientURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let client = await res.data
    if(client){
      setclients(client.clients);

    }
}
     
     async function getSecretary(){

         let res = await axios.get(secretaryURL, { headers: {"Authorization" : `Bearer ${token}`} })
         let secretary = await res.data
     
         if(secretary){
             
             set_secretary(secretary.secretary)
       
           }
     }

     async function getadmins(){

        let res =  await axios.get(adminsURL, { headers: {"Authorization" : `Bearer ${token}`} })
        let admin = await res.data
        if(admin){

            setadmins(admin.admin);
        }
        
        }


        async function getBooks(){
          let res = await axios.get(bookURL, { headers: {"Authorization" : `Bearer ${token}`} })
    let cli = await res.data
    if(cli){
        set_books(cli.data.books);
        
        
    }

           }

        //    async function getRestau(){
        //     let res = await axios.get(restauURL, { headers: {"Authorization" : `Bearer ${token}`} })
        //     let cli = await res.data
        //     if(cli){
        //         setrestaurant(cli.restaurants);
                
                
        //     }
        //     }


    const counter = {

        clients: clients.length,
        secretary: secretary.length,
        admins: admins.length,
        books: books.length,
        // restaurant: restaurant.length,

    }



    const lastclient = clients.slice(-1)
    const lastsecretary = secretary.slice(-1)
    const lastbook = books.slice(-1)
    const lastadmin = admins.slice(-1)
    // const lastreastau = clients.slice(-1)



    const lastone = {
        client : getlast_clientname(),
        secretary: getlast_secretary(),
        admins: getlast_admin(), 
        books: getlast_book(), 
        // restaurant: getlast_restau()
    }




    function getlast_clientname() {
        for (let i = 0; i < lastclient.length; i++) {            
            return lastclient[i].name
            }
    }

    function getlast_secretary() {

        for (let i = 0; i < lastsecretary.length; i++) {            
        return lastsecretary[i].name
        }

    }

    
    function getlast_book() {

        for (let i = 0; i < lastbook.length; i++) {            
        return lastbook[i].title
        }

    }

    function getlast_admin() {

        for (let i = 0; i < lastadmin.length; i++) {            
        return lastadmin[i].name
        }

    }
    // function getlast_restau() {

    //     for (let i = 0; i < lastreastau.length; i++) {            
    //     return lastreastau[i].name
    //     }

    // }

    

    


    useEffect( () => {
        getClients()
        getSecretary()
        getadmins()
        getBooks()
        // getRestau()

    }, [])



  return (
    <>


      
      {counter[value]}
      {lastone[last]}


        
        



      
     </>
  )
}



export default Store