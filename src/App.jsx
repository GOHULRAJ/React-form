import { useState } from 'react'
import './App.css'

function App() {
  
  const[values,setValues]=useState({
    firstname:"",
    lastname:"",
    email:"",
    contact:"",
    subject:"",
    resume:"",
    url:"",
    about:""

  })
const handleChange=(e)=>{
  setValues({...values,[e.target.name]:[e.target.value]})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(values)
} 
  return (
   <div className='container'>
    <h1>Form In React</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name*</label>
      <input type="text"  placeholder='Enter First Name' name='firstname' 
      onChange={(e)=>handleChange(e)} required/>

      <label htmlFor="lastname">Last Name*</label>
      <input type="text"  placeholder='Enter Last Name' name='lastname' 
      onChange={(e)=>handleChange(e)} required/>

      <label htmlFor="email">Email*</label>
      <input type="email"  placeholder='Enter Email Address' name='email' 
      onChange={(e)=>handleChange(e)} required/>

      <label htmlFor="contect">Contact*</label>
      <input type="text"  placeholder='Enter Phone #' name='contact' 
      onChange={(e)=>handleChange(e)} required/>

      <label htmlFor="gender">Gender*</label>
      <input type="radio" name='gender' onChange={(e)=>handleChange(e)} />Male
      <input type="radio" name='gender' onChange={(e)=>handleChange(e)}/>Female
      <input type="radio" name='gender' onChange={(e)=>handleChange(e)}/>Others

      <label htmlFor="subject">Subject*</label>
      <select name='subject' id='subject' onChange={(e)=>handleChange(e)} required>
        <option value="math">Math</option>
        <option value="math">Physics</option>
        <option value="math">Chemistry</option>
        <option value="math">Botany</option>
        <option value="math">Zology</option>
      </select>

      <label htmlFor="resume">Resume*</label>
      <input type="file" placeholder='Select Resume' name='resume' 
      onChange={(e)=>handleChange(e)} required/>

      <label htmlFor="url">URL</label>
      <input type="text" name='url' placeholder='Enter Image URL' 
      onChange={(e)=>handleChange(e)} required/>

      <label htmlFor="about">About</label>
      <textarea name="about" id="about" cols="30" rows={30} placeholder='Enter description' 
      onChange={(e)=>handleChange(e)} required></textarea>

      <button type='button'>Reset</button>
      <button type='submit'>Submit</button>
    </form>
   </div>
  )
}

export default App
