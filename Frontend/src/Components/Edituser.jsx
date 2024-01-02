import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
import '../ComponentStyle/HomeForm.css'
import { useNavigate, useParams } from 'react-router-dom'
function Edituser() {
  
  const [ID , setId] = useState("")

  const details = {}

  const [data , setData] = useState(details)
  const [error , setError] = useState("")
  const handleChange = (e) =>{
       setData({
         ...data , [e.target.name] : e.target.value
       })

  } 
  
 const {id} = useParams()

 const getSingleUser = async (userId) =>{
      let res =  await axios(`http://localhost:4000/users/${userId}`)
      .then((value) =>{
         console.log("Data is fetched" , value.data)
         setData (value.data)
      })
      .catch((error) =>{
          console.log(error)
          setError(error)
      })

      
 } 

  useEffect(() =>{
      getSingleUser(id)
  } , [])

  const Navigator = useNavigate()

  const handleSubmit =  async (e , id) =>{
       e.preventDefault();
      let res = await axios.patch(`http://localhost:4000/users/${id}` , data)
     .then(() =>{
        console.log("Okay response..")
        setError("")
        setData({})
       Navigator("/allusers")
        
     })

     .catch((error) =>{
         console.log(error.message)
         setError(error.message)
     })
    }
       
  return (
    <div className='mt-4'>
    <div className="container mt-4" >
      {
       error && <div className='error'>Error occured : {error}</div>
      }
    <h3 className='mt-4'>Edit Data</h3>
    {/* <span className='error'>{error}</span> */}

    <form method='post'> 
    <div  class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input  type="text" style={{border : "1px solid black"}} class="form-control" name='name'  id="username" 
              onChange={handleChange}  value={data.name}/>
          </div>
          <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" name='email'  style={{border : "1px solid black"}}   id="exampleInputEmail1" aria-describedby="emailHelp" 
               onChange={handleChange} value={data.email} />
            
          </div>
          <div class="mb-3">
              <label for="age" class="form-label">Age</label>
              <input type="number" name='age'  style={{border : "1px solid black"}}  class="form-control" id="age"
               onChange={handleChange} value={data.age} />
          </div>
        
<button type="submit" class="btn btn-primary" onClick={(e) => handleSubmit(e , id)}>Submit</button>
   </form>
    </div>
  </div>
  )

}
export default Edituser
