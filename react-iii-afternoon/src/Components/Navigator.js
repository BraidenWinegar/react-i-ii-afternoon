import React, {Component} from 'react'

export default class Navigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <div className="nav">
                <div className='scroll' onClick={this.props.cardDecrement}>{'< Previous'}</div>
                <div> 
                    <div className='button'>Edit</div>
                    <div className='button'>Delete</div>
                    <div className='button'>New</div>
                </div>
                <div className='scroll' onClick={this.props.cardIncrement}>{'Next >'}</div>
            </div>
        )
    }
}