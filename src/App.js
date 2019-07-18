import React,{ Component } from 'react';
import Person from './Person/Person';
import './App.css';

class  App  extends Component{ 

      state={
        persons:[
          {name:'Max',age:28},
          {name:'Manu',age:29},
          {name:'Stephanie',age:26}
        ],
        otherState:'some other value',
        showPersons:false
      }
      nameChangeHandler=(event)=>{
        this.setState({
            persons:[
              {name:'Max',age:28},
              {name:event.target.value,age:29},
              {name:'Stephanie',age:26}
                    ]
                      })
                                  }

      switchNameHandler=(newName)=>{
      this.setState({
        persons:[
          {name:newName,age:28},
          {name:'Manu',age:29},
          {name:'Stephanie',age:26}
               ]
                    })
                                   }

          deletePersonHandler=(personIndex)=>{
                const persons=[...this.state.persons];
                persons.splice(personIndex,1);
                this.setState({persons:persons})
                 }

          togglePersonsHandler=()=>{
           const doesShow=this.state.showPersons;
           this.setState({showPersons:!doesShow});
          }

render(){

  let persons=null;
  if(this.state.showPersons){
    persons=(
      <div>
        {this.state.persons.map((person,index)=>{
          return <Person 
          click={()=>this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}/>
        })}       
        </div>
    );

  }

  return (
    <div className="App">
     <h1>Hi, I'm aReact App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonsHandler}>Toogle Persons</button>              
    </div>
  );
  }
}
 
export default App;
/**
 *  <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} 
        click={this.switchNameHandler.bind(this,'maaaax')} changed={this.nameChangeHandler}>My hobies:Racing </Person>    
        {persons}
 */