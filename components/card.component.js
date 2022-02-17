import React, { PureComponent } from 'react'

import style from './card.style.module.scss'

export default class Card extends PureComponent {
  renderCard() {
    return (
      <>
      <div className={style.CardContainer}>
              <div className={style.card}>
                  <div className={style.cardInset}>
                    <div className={style.cardInner}>
                        <div className={style.sideCard}>
                            <p>60</p>
                            <p>40</p>
                            <p>20</p>
                            <p>0</p>
                        </div>
                        <div className={style.baseCard}>
                            <p>M</p>
                            <p>T</p>
                            <p>W</p>
                            <p>T</p>
                            <p>F</p>
                            <p>S</p>
                            <p>S</p>
                        </div>
                    </div>
                  </div>

                  <div className={style.cardContent}>
                    <h2>
                      Website Views
                    </h2>
                    <p>Last Campaogn Performance</p>
                    <div className={style.cardIcon}>
                      <img alt='icon'></img>
                      <p> campaing sent  2 days ago</p>
                    </div>
                  </div>
              </div>
          </div>
      </>
    )
  }
  render(){
      return(
          <div className={style.cards}>
              {this.renderCard()}
          </div>
      )
  }
}
