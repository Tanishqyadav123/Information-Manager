import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import "../ComponentStyle/HomeForm.css"
function HomeForm() {
  const details = {}

  const [data , setData] = useState(details)
  const [error , setError] = useState("")
  const handleChange = (e) =>{
       setData({
         ...data , [e.target.name] : e.target.value
       })

  } 

  const Navigator = useNavigate()

  const handleSubmit =  async (e) =>{
       e.preventDefault();
     
      //   let res= await fetch ("http://localhost:4000/users" , {
      //      method : "POST",
      //      body : JSON.stringify(data),
      //      headers : {
      //        "Content-type" : "application/json"
      //      }
      //   })

      //  let result =  await res.json()
          
      //  if (!res.ok){
      //     setError(result.error)
      //    console.log(res.error)
      //  }
      //  if (res.ok) {
      //    console.log(result)
      //  }

      let res = await axios.post("http://localhost:4000/users" , data)
     .then(() =>{
        console.log("Okay response..")
        setError("")
        setData({})
       Navigator("/allusers")
        
     })

     .catch((error) =>{
         console.log(error.response.data.message)
         setError(error.response.data.message)
     })
       
     

      
  }

  return (
    <div className='mt-4'>
      <div className="container mt-4" >
        {
         error && <div className='error'>Error occured : {error}</div>
        }
      <h3 className='mt-4'>Add Yourself to our database</h3>
      {/* <span className='error'>{error}</span> */}

      <form method='post'> 
      <div  class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input  type="text" style={{border : "1px solid black"}} class="form-control" name='name'  id="username" 
                onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" name='email'  style={{border : "1px solid black"}}   id="exampleInputEmail1" aria-describedby="emailHelp" 
                 onChange={handleChange}/>
              
            </div>
            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" name='age'  style={{border : "1px solid black"}}  class="form-control" id="age"
                 onChange={handleChange}/>
            </div>
          
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
     </form>
      </div>
    </div>
  )
}

export default HomeForm
