import React, { useEffect, useState } from 'react'
import axios from "axios" 
import '../ComponentStyle/Allusers.css'
import { Link } from 'react-router-dom'
function Allusers() {

    const data = [{
         name : "Shahrukh",
         email : "shahrukh@gmaill.com",
         age : 56
    }]

    const [user , setUser] = useState(data)

  async function GetAllUsers () {
        
         let res = await axios.get("http://localhost:4000/users")
         console.log(res)
         setUser (res.data)
  }
    useEffect(() =>{
       GetAllUsers ()
    } , [])

    const handleDelete = async (id) =>{

         let res = await axios.delete(`http://localhost:4000/users/${id}`)

         setUser(user.filter((elem , index) =>{
             
           if (elem._id !== id){
                return elem;
           }
         }))
      
    }

    const handleEdit = (id) =>{
       
          
      
    }
  return (
    <div className='container'>
         <h1 className='text-center'>All Users</h1>

         <div className="users" >
              {
                 user.map((elem , index) =>{
                    
                    return <div class="card" style={{ width : "18rem"}}>
                        <div class="card-body">
                        <h5 class="card-title">{elem.name}</h5>
                        <p class="card-text">{elem.email}</p>
                        <p class="card-text">{elem.age}</p>
                       <div className='btns'>
                       <Link to={`/${elem._id}`} class="btn btn-primary" onClick={() => handleEdit(elem._id)}>Edit </Link>
                        <a href="#" onClick={() => handleDelete (elem._id)}  class="btn btn-primary">Delete </a>
                       </div>
                        </div>
                   </div>
                 })
              }
         </div>
    </div>
  )
}

export default Allusers
