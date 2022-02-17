import { render } from '@testing-library/react';
// import './Dashboard.component.css';
import style from "./DashBoard.style.module.scss"
import React, { Component } from 'react'
import Card from '../components/card.component';
export default class Side_bar extends Component {
    renderSideBar() {
        return (
          
            <div className={style.maincontainer}>
                <div className={style.material}>
                    <span>Material Dashboard 2</span>
                </div>
                <hr></hr>
                <div className={style.main_side_nav_main}>
                <div className={style.main_side_nav}>
                    <ul>
                        <li>Dashboard</li>
                        <li>Tables</li>
                        <li>Virtual Reality</li>
                        <li>RTL</li>
                        <li>Notifications</li>
                    </ul>
                    <li> ACCOUNT PAGES </li>
                    <ul>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
                <div className={style.button_area}>
                    <button className={style.upgrade}>
                        UPGRADE TO PREMIUM
                    </button>
                </div>
                </div>
            </div>

        )
    }


    render() {
        return (
            <div className={style.main_container}>
            <div className={style.main}>
                {this.renderSideBar()}
            </div>
            <div className={style.CardMulti}>
                <Card/>
                <Card/>
            </div>
            </div>
        )
    }
}