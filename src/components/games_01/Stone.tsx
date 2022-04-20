import React, { Component } from "react";
import './stone.css'

export default class Stone extends Component{
    choices = [
        {
            id:1,
            name:'石头',
            img:'/assets/img/rock.png'
        },
        {
            id:2,
            name:'剪刀',
            img:'/assets/img/paper.png'
        },
        {
            id:3,
            name:'布',
            img:'/assets/img/scissors.png'
        }
    ];
    randomNumber: any;

    render(){
        return <div id="container">
            <h2>石头剪刀布</h2>
            <div id="game-container">
                <div id="points">
                    <label htmlFor="playerPoints">玩家分数：</label>
                    <span className="playerPoints"></span>
                    <label htmlFor="computerPoints">电脑分数：</label>
                    <span className="computerPoints"></span>
                </div>
                <div id="choice">
                    <div id="playerChoice">
                    <img src="/assets/img/rock.png" alt="" id="playerChoiceImg"/>
                    <h3 id="playerChoiceTxt"></h3>
                    </div>
                    <div id="computerChoice">
                    <img src="/assets/img/scissors.png" alt="" id="computerChoiceImg"/>
                    <h3 id="computerChoiceTxt"></h3>
                    </div>
                </div>
                <div id="buttons">
                    <button className="btn">石头</button>
                    <button className="btn">布</button>
                    <button className="btn">剪刀</button>
                </div>
            </div>
        </div>
    }
}