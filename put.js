import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import { API_URL } from "./url";
export function Edit_items(){
    
    const [id,setId] =useState('');
    const [name,setName] =useState('');
    const [age,setAge] =useState('');
    const [skills,setSkills] =useState('');

    useEffect(()=>{

        setId(localStorage.getItem("id"));

        setName(localStorage.getItem("name"));
        setAge(localStorage.getItem("age"));
        setSkills(localStorage.getItem("skills"));
        
    },[]);

    const editData =async ()=>{
        await axios.put(API_URL +id ,{
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
                <button onClick={editData}>Edit User</button>

                
         </div>
    )
    ;

}