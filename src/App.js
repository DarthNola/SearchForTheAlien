import { Component } from 'react';

import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component  {
  constructor() {
      super();
      this.state = {
        aliens: [],
        searchField: '',
        
       
       };
       console.log("Constructor");
  }
  componentDidMount() {
    console.log("ComponentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
        .then((users)=>
        this.setState(()=>{
          return {aliens:users}
        }, 
        () => {
          console.log(this.state)
        }
        ))
      }

      onsearchchange = (event)=>{ 
        console.log(event.target.value)
        const searchField = event.target.value.toLocaleLowerCase();
       
        this.setState(()=>
        {
          
          return{searchField}
          })
        }
  render() {
    console.log("Render");
    const {aliens ,searchField} = this.state;
    const {onsearchchange} = this;

    const filterAliens = aliens.filter((alien)=>{
      return alien.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
          <h1 className='App-Title'>Search For The Alien</h1>
          <SearchBox 
          className='bakugans-search-box' 
          onChangeHandler = {onsearchchange} 
          placeholder='Search Aliens'/>
          <Cardlist aliens ={filterAliens}/>
      </div>
    );
  }
}

export default App;
