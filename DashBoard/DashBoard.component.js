import { render } from '@testing-library/react';
// import './Dashboard.component.css';
import style from "./DashBoard.style.module.scss"
import React, { Component } from 'react'
import Card from '../components/card.component';

export default class DashBoardComponent extends Component {
    renderSideBar() {
        const {HandelCancel,cancel}=this.props;
        return (
          
            <div className={cancel?(style.maincontainerC):(style.maincontainer)}>
                <div className={style.material}>
                    <span>Material Dashboard 2</span>
                     <img src="./img/icons8-cancel.svg" alt="cancel icon" onClick={HandelCancel}></img>
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
                    
                    <p> ACCOUNT PAGES </p>
                   
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