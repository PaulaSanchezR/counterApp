import React, { Component } from 'react';

// Stateless Function Componnet is when you dont have stete and we can not use
// a lifecycle hooks on stateless components
// regular way
//const Navbar = props =>{
    //using object destructuriing we dont want to repeaty props. several times
    const Navbar = ({ totalCounters}) =>{
        console.log("2.1...NavBar - Render")
    return(
        <nav className="navbar navbar-light bg-light">
                 <a className ="navbar-brand" href="#">
                   Navbar 
                     <span className="badge badge-pill badge-secondary">
                     {/* Regular way */}
                      {/* {props.totalCounters} */}
                       {totalCounters}
                     </span>
                 </a>
            </nav> 
    )
}


// Regular way when we have a state
// class Navbar extends Component {
//      render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 <a className ="navbar-brand" href="#">
//                   Navbar 
//                     <span className="badge badge-pill badge-secondary">
//                       {this.props.totalCounters}
//                     </span>
//                 </a>
//             </nav>
//          );
//     }
// }
 
export default Navbar;