import React, { Component } from "react";
import './stone.css'
import { GAME_TYPE } from './stoneGame'

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
            img:'/assets/img/scissors.png'
        },
        {
            id:3,
            name:'布',
            img:'/assets/img/paper.png'
        }
    ];
    randomNumber: number  = 0;
    playerImgTag: any;
    playerRockTag : any;
    computerImgTag : any;
    computerTextTag : any;
    points = [0,0];
    playerPoints: any;
    computerPoints: any;
    playerImg = (element: any) => {
        this.playerImgTag = element;
   };
   rockText = (element: any) => {
        this.playerRockTag = element;
   }

   computerImg = (element: any) => {
        this.computerImgTag = element;
   }

   computerText= (element: any) => {
        this.computerTextTag = element;
   }

   playerPointsRef = (element: any) => {
        this.playerPoints = element;
   }

   computerPointsRef = (element: any) => {
        this.computerPoints = element;
   }

    personChoice = (gameType:Number) => {
        return () => {
            this.playerImgTag.src = this.choices.filter(item => item.id === gameType)[0].img;
            this.playerRockTag.innerHTML = this.choices.filter(item => item.id === gameType)[0].name;
            this.getComputerChoice();
        };
    }

    getComputerChoice = () => {
        this.computerImgTag.src = '/assets/img/gif.gif';
        this.computerTextTag.innerHTML = '';
        setTimeout(() => {
            this.randomNumber = Math.floor(Math.random() * 3);
            this.computerImgTag.src = this.choices[this.randomNumber].img;
            this.computerTextTag.innerHTML = this.choices[this.randomNumber].name;
            this.gameRules();
            this.playerPoints.innerHTML = this.points[0];
            this.computerPoints.innerHTML = this.points[1];
        },2000);
    }; 

    gameRules = () => {
        if(this.playerRockTag.innerHTML === this.choices[0].name && this.computerTextTag.innerHTML === this.choices[1].name){
            this.points[0]++;
        } else if(this.playerRockTag.innerHTML === this.choices[1].name && this.computerTextTag.innerHTML === this.choices[2].name){
            this.points[0]++;
        } else if(this.playerRockTag.innerHTML === this.choices[2].name && this.computerTextTag.innerHTML === this.choices[0].name){
            this.points[0]++;
        } else {
            this.points[1]++;
        }
    }

    render(){
        return <div id="container">
            <h2>石头剪刀布</h2>
            <div id="game-container">
                <div id="points">
                    <label htmlFor="playerPoints">玩家分数：</label>
                    <span className="playerPoints" ref={this.playerPointsRef}>{this.points[0]}</span>
                    <label htmlFor="computerPoints">电脑分数：</label>
                    <span className="computerPoints" ref={this.computerPointsRef}>{this.points[1]}</span>
                </div>
                <div id="choice">
                    <div id="playerChoice">
                    <img ref={this.playerImg} src="/assets/img/rock.png" alt="" id="playerChoiceImg"/>
                    <h3 id="playerChoiceTxt" ref={this.rockText}>石头</h3>
                    </div>
                    <div id="computerChoice">
                    <img ref={this.computerImg} src="/assets/img/scissors.png" alt="" id="computerChoiceImg"/>
                    <h3 ref={this.computerText} id="computerChoiceTxt">剪刀</h3>
                    </div>
                </div>
                <div id="buttons">
                    <button className="btn" onClick={this.personChoice(GAME_TYPE.ROCK)}>石头</button>
                    <button className="btn" onClick={this.personChoice(GAME_TYPE.PAPER)}>布</button>
                    <button className="btn" onClick={this.personChoice(GAME_TYPE.SCISSORS)}>剪刀</button>
                </div>
            </div>
        </div>
    }
}