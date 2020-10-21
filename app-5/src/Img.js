import React, {Component} from 'react'

class Img extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <img src={this.props.url}/>
                <div>Error 092</div>
            </div>
        )
    }
}

export default Img