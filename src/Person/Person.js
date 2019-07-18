import React, { Component } from 'react'


const person =(props)=>{
  
    return (
      <div>
        <p onClick ={props.onClick}>My name is {props.name} and I am {props.age} I'm a Person!</p>
        <p>{props.children}</p>
        <input type="text" conChange={props.changed} value={props.name}/>
      </div>
    )
  }

export default person;