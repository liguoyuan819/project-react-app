import React, { Component } from "react";
import './stone.css'
import { GAME_TYPE } from './stoneGame'

export default class Stone extends Component{
    state = {
        playerScore:0,
        computerScore:0,
        rockText:'石头',
        computerText:'剪刀'
    };
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
    computerImgTag : any;
    playerImg = (element: any) => {
        this.playerImgTag = element;
   };

   computerImg = (element: any) => {
        this.computerImgTag = element;
   }


    personChoice = (gameType:Number) => {
        return () => {
            this.playerImgTag.src = this.choices.filter(item => item.id === gameType)[0].img;
            this.setState({rockText:this.choices.filter(item => item.id === gameType)[0].name});
            this.getComputerChoice();
        };
    }

    getComputerChoice = () => {
        this.computerImgTag.src = '/assets/img/gif.gif';
        this.setState({computerText:''});
        setTimeout(() => {
            this.randomNumber = Math.floor(Math.random() * 3);
            this.computerImgTag.src = this.choices[this.randomNumber].img;
            this.setState({computerText:this.choices[this.randomNumber].name},() => {
                this.gameRules();
            });
        },2000);
    }; 

    gameRules = () => {
        let {playerScore, computerScore,rockText,computerText} = this.state;
        if(rockText === this.choices[0].name && computerText === this.choices[1].name){
            this.setState({playerScore:playerScore+1});
        } else if(rockText === this.choices[1].name && computerText === this.choices[2].name){
            this.setState({playerScore:playerScore+1});
        } else if(rockText === this.choices[2].name && computerText === this.choices[0].name){
            this.setState({playerScore:playerScore+1});
        } else if(rockText === computerText) {
            this.setState({...this.state});
        } else {
            this.setState({computerScore:computerScore+1});
        }
    }

    render(){
        const {playerScore,computerScore,rockText,computerText} = this.state;
        return <div id="container">
            <h2>石头剪刀布</h2>
            <div id="game-container">
                <div id="points">
                    <label htmlFor="playerPoints">玩家分数：</label>
                    <span className="playerPoints">{playerScore}</span>
                    <label htmlFor="computerPoints">电脑分数：</label>
                    <span className="computerPoints">{computerScore}</span>
                </div>
                <div id="choice">
                    <div id="playerChoice">
                    <img ref={this.playerImg} src="/assets/img/rock.png" alt="" id="playerChoiceImg"/>
                    <h3 id="playerChoiceTxt">{rockText}</h3>
                    </div>
                    <div id="computerChoice">
                    <img ref={this.computerImg} src="/assets/img/scissors.png" alt="" id="computerChoiceImg"/>
                    <h3 id="computerChoiceTxt">{computerText}</h3>
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