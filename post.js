import axios from "axios";
import React, { useState } from "react";
import './App.css';
import { API_URL } from "./url";

export default function Form(){
    
    const [name,setName] =useState('');
    const [age,setAge] =useState('');
    const [skills,setSkills] =useState('');

  
const addData =async()=>{
    if(!name || !age || !skills) return;
    console.log(name);
    console.log(age);
    console.log(skills);
    await axios.post(API_URL,{
        name,
        age,
        skills,
    })

}
    
    return(
        <div className="form-container"> 
          
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={event=>setName(event.target.value)}/>
                <label>age: </label>
                <input type="text" name="age" value={age} onChange={event=>setAge(event.target.value)}/>
                <label>skill: </label>
                <input type="text" name="skills" value={skills} onChange={event=> setSkills(event.target.value)}/>
                <button onClick={addData}>Add User</button>

                
         
        </div>
    )
}