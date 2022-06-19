import React , { useState, useEffect} from 'react'
import axios from "axios";



const Store = ({value, last, data}) => {
    const token = JSON.parse(localStorage.getItem('name'));


    let [clients, setclients] = useState([])
 let [secretary, set_secretary] = useState([])
//   let [chefs, setchefs] = useState([])
//   let [commands, set_commands] = useState([])
//   let [restaurant, setrestaurant] = useState([])

    
    const clientURL = "http://localhost:5000/api/clients";
    const secretaryURL = "http://localhost:5000/api/secretary";
    // const chefsURL = "http://localhost:3000/api/chefsecteur";
    // const commandeURL = "http://localhost:3000/api/commandes";
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

    //  async function getChefs(){

    //     let res =  await axios.get(chefsURL, { headers: {"Authorization" : `Bearer ${token}`} })
    //     let chef = await res.data
    //     if(chef){

    //         setchefs(chef.chefs);
    //     }
        
    //     }


        // async function getCommandes(){
  
        //     await axios.get(commandeURL, { headers: {"Authorization" : `Bearer ${token}`} }).then((res) =>{
             
        //      set_commands(res.data.cmd)
             
             
        //    })
        //    }

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
        // chefs: chefs.length,
        // commands: commands.length,
        // restaurant: restaurant.length,

    }



    const lastclient = clients.slice(-1)
    const lastsecretary = secretary.slice(-1)
    // const lastcommande = commands.slice(-1)
    // const lastchef = chefs.slice(-1)
    // const lastreastau = clients.slice(-1)



    const lastone = {
        client : getlast_clientname(),
        secretary: getlast_secretary(),
        // chefs: getlast_manager(), 
        // commands: getlast_command(), 
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

    
    // function getlast_command() {

    //     for (let i = 0; i < lastcommande.length; i++) {            
    //     return lastcommande[i].repas_id.name
    //     }

    // }
    // console.log(getlast_command())
    // function getlast_manager() {

    //     for (let i = 0; i < lastchef.length; i++) {            
    //     return lastchef[i].name
    //     }

    // }
    // function getlast_restau() {

    //     for (let i = 0; i < lastreastau.length; i++) {            
    //     return lastreastau[i].name
    //     }

    // }

    

    


    useEffect( () => {
        getClients()
        getSecretary()
        // getChefs()
        // getCommandes()
        // getRestau()

    },[])



  return (
    <>


      
      {counter[value]}
      {lastone[last]}


        
        



      
     </>
  )
}



export default Store