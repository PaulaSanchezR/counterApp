import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        // local state invasible to other components 
        counters : [
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
     }

     handleIncrement = counter=> {
        // create new counter array with the spray operator we are clonning the array
        const counters = [...this.state.counters] ;
        // this sitaxis modifed the real value and for React this is NO NOOOOOO

                // counters[0].value++;
                // console.log('counter', this.state.counters[0])
        const index = counters.indexOf(counter)
        counters[index] = {...counters}
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
        <div>
            <button 
            className="btn btn-primary btn-sm m-2"
            onClick= {this.handleReset}>Reset</button>
           {this.state.counters.map(counter => 
            //    all this properties are part of the props key, value, id
            //    props are read only
           <Counter 
                key ={counter.id} // this key is use internally by react
                // we are passing the references to the function to the child component
                // 
                onDelete={this.handleDelete} 
                onIncrement={this.handleIncrement}

                    // innecesari repetition we are going to encapsulate related values, if we add more properties to the state object we will need to add it manually
                    // it will be messy  and ugly for this we going to pass the counter object 
                        // value={counter.value} 
                        // id={counter.id}
                counter={counter}
              >
           {/* ejemplo this is when we pass a children */}
              {/* <h4>title</h4> */}
           </Counter>  // selected={true}
           )}
        </div>  );
    }
}
 
export default Counters;