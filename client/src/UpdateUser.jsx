import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
  const {id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/'+id)
      .then(result =>  {console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age) 
      })
        // Update state with user data if needed )
      .catch(err => console.log(err));
  }, [])
 
  const Update = (e) => { 
    e.preventDefault();
    axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
    .then(result => {
        console.log(result)
    navigate('/')})
    .catch(err => console.log(err)) 
} 
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Update}>
        <h2>Update user</h2>
        <div className='mb-2'>
            <label htmlFor=""></label>
            <input type="text" placeholder='enter name' className='form-control' 
            value={name} onChange={(e) => setName(e.target.value)}/> 
        </div> 
        <div className='mb-2'>
            <label htmlFor=""></label>
            <input type="text" placeholder='enter email' className='form-control' 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='mb-2'>
            <label htmlFor=""></label>
            <input type="text" placeholder='enter age' className='form-control' 
            value={age} onChange={(e) => setAge(e.target.value)}/>
        </div> 
        <button className='btn btn-success'> update </button>
      </form>
      </div>
    </div>
  )
}

export default UpdateUser
