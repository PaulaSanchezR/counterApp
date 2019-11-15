import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters'


class App extends Component {
   state = { 
    // local state invasible to other components 
    counters : [
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 }

 handleIncrement = counter => {
    // create new counter array with the spray operator we are clonning the array
    const counters = [...this.state.counters] ;
    // this sitaxis modifed the real value and for React this is NO NOOOOOO

            // counters[0].value++;
            // console.log('counter', this.state.counters[0])
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++;
    //console.log('counter', this.state.counters[index])
    console.log('index', index)

    this.setState({ counters })
 }

 handleReset = ()=>{
    //  new array
     const counters = this.state.counters.map(c => {
         c.value = 0;
         return c
     })
    //  return the array
     this.setState = { counters}
 }

 handleDelete = (counterId) => {
     //console.log('Evenvt handler called0',counterId)
    //  we dont update the state directly
    // filter method to get all the counters except for the counterID
    // we create the new array
     const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters: counters})
 }

  render() { 
    return ( 
    <React.Fragment>
      <NavBar 
        totalCounters={this.state.counters.filter(c => c.value >0).length}/>
      <main className="container">
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete}

        />
      </main>
      
    </React.Fragment> );
  }
}
 

export default App;
