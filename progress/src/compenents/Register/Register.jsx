import React from 'react';
import './Register.scss';
import axios from 'axios';

let url = "http://localhost:8000/api/v1/users";
let userData = {};

export default function Register() {
  let [catchedErrors, setCatchedErrors] = React.useState({})
  let createUser = () => {
    axios.post(
      url,userData
    )
    .then (
      res => {
        console.log(`data exchanged with status code ${res.status}/found ${res.statusText}`);
      }
    ).catch (
      res=>{
        setCatchedErrors(
          res.response.data.catchedError
        )
      }
    )
  }

  return (
    <div className='Register__container'>
      <span className='Register__header'>
        sign up for new account
      </span>

      <form>
        <input type="text" name='email' placeholder='email'
         onChange={(e)=> {userData.email = e.target.value}}
        />
        <span style={{ color: 'red'}}>{catchedErrors.email}</span>

        <input type="text" name='name' placeholder='name' 
          onChange={(e)=> {userData.name = e.target.value}}
        />
        <span style={{ color: 'red'}}>{catchedErrors.name}</span>

        <input type="password" name='password' placeholder='password'
         onChange={(e)=> {userData.password = e.target.value}}
        />
        <span style={{ color: 'red'}}>{catchedErrors.password}</span>

      </form>

      <button onClick={createUser}>submit</button>
    </div>
  )
}