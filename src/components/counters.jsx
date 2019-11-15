import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
   
    render() { 
      console.log("2.2....Counters - Rendered")
      //Using destructuring way
      const { onReset, counters, onDelete, onIncrement }= this.props;
        return ( 
        <div>
            <button 
            className="btn btn-primary btn-sm m-2"
                  //regular way
                  // onClick= {this.props.onReset}>Reset</button>
            //destructuring way to make my code cleaner
            onClick= {onReset}>Reset</button>
                  {/* regular way */}
                  {/* {this.props.counters.map(counter =>  */}
            {/* destructuring way */}
            {counters.map(counter =>
            //    all this properties are part of the props key, value, id
            //    props are read only
           <Counter 
                key ={counter.id} // this key is use internally by react
                // we are passing the references to the function to the child component
                       // Regular way
                      // onDelete={this.props.onDelete} 
                     //   onIncrement={this.props.onIncrement}
                  //  destructuring
                onDelete={onDelete}    
                onIncrement={onIncrement}

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