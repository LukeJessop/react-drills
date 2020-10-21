import React, {Component} from 'react'

class Todo extends Component{
    render(){
        return <p>{this.props.list}</p>
    }
}

export default Todo