import React, { useState } from "react";
import './App.css';
import { Edit_items } from "./put";
import Form from "./post";
import { Tab } from "./get";
import { API_URL } from "./url";




export default function App(){

  const[editing,setEditing]= useState(false)
 
 return(
   <div className="class-container">
    <h1 className="class1">CRUD Operation</h1>
    <Tab setEditing={setEditing}/>
    {editing?(
      <div>
        <h3 className="items-add">Edit items</h3>
        <Edit_items/>
      </div>
    ):( <div>
        <h3 className="items-add">Add items</h3>
    <Form />
      </div>)}
    
   </div>
  

 );
}