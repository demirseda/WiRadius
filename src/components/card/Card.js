import React, { Component } from 'react';

import axios from "axios";


class Card extends Component {
    state = {
        cards: []
    }

    componentDidMount(){
        axios.post('https://web.cetvel.com.tr/card/getWiCardList')
        .then(res => {
            const cards = res.data;
            this.setState({ cards });
           
        })
    }
  render() {
    return (
        <div>
            <div className='card_div'>
            {this.state.cards.map( (obj, index) =>{ 
                return(
                    <div className='card' key={index + 1}>
                        <div className='card_header'>
                            <span className='card_icon'><i className={obj.icon}></i></span>
                            <span className='card_title'> {obj.title} </span>
                        </div>
                        <div className='card_body'>
                            <p> {obj.description} </p>
                        </div>
                    </div>
                   )
                })}
            </div>
        </div>
    );
  }
}
export default Card;