import React, { Component } from 'react';


class Counter  extends Component {
//    special properti that contein all the data that this compoment need
    state={
        //value:this.props.counter.value,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1","tag2","tag3"]

    }
                    // constructor (){
                    //     // without super we get this error 
                    //     // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
                    //     super();
                    //     this.handleIncrement = this.handleIncrement.bind(this) // set the value of this, will return the new instance of the handleIncrement function
                    //         console.log('constructor', this)
                    //                 // This information
                    //                 // Counter {props: undefined, context: undefined, refs: {…}, updater: {…}, state: {…}}
                    //                 // context: {}
                    //                 // props:
                    //                 // __proto__: Object
                    //                 // refs: {}
                    //                 // state: {count: 2, imageUrl: "https://picsum.photos/200", tags: Array(3)}
                    //                 // updater:
                    //                 // enqueueForceUpdate: ƒ (inst, callback)
                    //                 // enqueueReplaceState: ƒ (inst, payload, callback)
                    //                 // enqueueSetState: ƒ (inst, payload, callback)
                    //                 // isMounted: ƒ isMounted(component)
                    //                 // __proto__: Object
                    //                 // _reactInternalFiber: FiberNode {tag: 1, key: null, elementType: ƒ, type: ƒ, stateNode: Counter, …}
                    //                 // _reactInternalInstance: {_processChildContext: ƒ}
                    //                 // isMounted: (...)
                    //                 // replaceState: (...)
                    //                 // __proto__: Component
                    // }
                    // handleIncrement(){
                    //     // we dont have access to the state properties 
                    //     console.log('increment' ,this)
                    //     // to resolve this issue, this referecen diferent objects. 
                    //     // bind method 
                    // }

//    to avoid this noise procedure we use arrow function inherante the 'this" word
    // handleIncrement = () => {
    //     // this is an error we can not reasign any props value
    //     // this.props.value = 0
    //     //  only way to update the setState and we pass an object
    //     this.setState({ value : this.state.value +1 })
    // }

            // doHadleIncrement = () =>{
            //     this.handleIncrement( { id: 1})
            // }
    render() { 
        //console.log ('props', this.props)
       return(
        <div>
            {/*  when we recive the children {this.props.children} */}
            <h4>{this.props.counter.id}</h4>
            <img src={this.state.imageUrl} alt=""/>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* JSX handle the event by reference. we are not calling the method just passing a references to it */}
            <button 
                    // we want to pass the id of the product
                    // onClick we pass the function references we can NOT call this.handleIncrement(1)
                    // we need to pass a function references 
                    // this producuere is messy  better soulution is use a inline function
                //  onClick={this.doHadleIncrement} 
                // onClick={ () =>  this.handleIncrement(1)}
                // onClick={this.handleIncrement}
                onClick = {() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">increment</button>

                {/* in order to delete the counter we need to delete on the counters component 
                THE COMPONENT THAT OWNS A PIECE OF THE STATE, SHOULB BE THE ONE MODIFYING IT*/}

                {/* reference to the event on the parent component also we change the props and we are sending the counter object */}
            {/* <button onClick={()=> this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>     */}
            <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>    

            {this.renderTags()}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        //console.log(value)
        return value === 0 ? "Zero" : value;
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        return  <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

    }

    

}
 
export default Counter;