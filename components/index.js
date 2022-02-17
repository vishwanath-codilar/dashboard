import React, { Component } from 'react'
import Card from './card.component'
import style from "./card.style.module.scss"

export default class Card_index extends Component {
  renderCards() {
    return (
    <div className={style.CardHolder}>
        <Card/>
      
        <Card/>
      </div>
    )
  }
  render(){
      return(<>
          {this.renderCards()}
          </>
      )
  }
}
