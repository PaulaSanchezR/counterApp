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

     handleDelete = () => {
         console.log('Evenvt handler called')
     }
    render() { 
        return ( 
        <div>
           {this.state.counters.map(counter => 
            //    all this properties are part of the props key, value, id
            //    props are read only
           <Counter 
                key ={counter.id} 
                onDelete={this.handleDelete} 
                value={counter.value} 
                id={counter.id}>
           {/* this is when we pass a children */}
              {/* <h4>title</h4> */}
           </Counter>  // selected={true}
           )}
        </div>  );
    }
}
 
export default Counters;