import React from "react";
import homeImg from "../src/homeImg.png";
import TopBar from "./Topbar";
import Bottombar from "./BottomBar";
import { useNavigate } from 'react-router-dom';
import "./homePage.css";
function HomePage(){
    const navigate= useNavigate();
    const handleClick = () => {
        navigate('/home');
      };
    return (
        <>
        <div className="homeBg">
            <TopBar />
        <div className="middle">
        <div className="leftInfo">
        <div className="info">
        Deep Learning Model for generating descriptive comments for code snippets.
        </div>
        <p className="desc"> a user-friendly web app with a fine-tuned NLP model to automatically generate accurate code comments across multiple languages.</p>
        <div className="buttons">
            <div className="startButton" onClick={handleClick}>START</div>
            <div className="work">HOW IT WORKS?</div>
        </div>
        </div>
        <div className="rightImg">
            <img src={homeImg} alt="" className="homeImg" />
        </div>
        </div>
        <Bottombar />
        </div>
        </>
    )
}
export default HomePage;