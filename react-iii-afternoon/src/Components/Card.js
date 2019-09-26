import React, {Component} from 'react'

export default class Card extends Component{
    constructor(props){
        super(props);

        this.state = {
        }
    }

    render(){
        let id = this.props.data[this.props.cardIndex-1]

        return (
            <div className="card">
                <div id="card-id"><span id='span'><h1>{this.props.cardIndex}/{this.props.data.length}</h1></span></div>
                <div id='info'>
                    <h1 id='name-title'>{id.name.first} {id.name.last}</h1>
                    <p><b>From:</b>{id.city}, {id.country}</p>
                    <p><b>Job Title:</b>{id.title}</p>
                    <p><b>Employer:</b>{id.employer}</p>

                    <p id='list-title'><b>Favorite Movies</b></p>
                    <p className='list-item'>1. {id.favoriteMovies[0]}</p>
                    <p className='list-item'>2. {id.favoriteMovies[1]}</p>
                    <p className='list-item'>3. {id.favoriteMovies[2]}</p>
                </div>
            </div>
        )
    }
}