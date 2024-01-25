import React from "react";
import "./homePage.css";
import { useNavigate } from 'react-router-dom';
function Topbar(){
    const navigate= useNavigate();
    const handleHome = () => {
        navigate('/');
      };
      const handleClick = () => {
        navigate('/home');
      };
      const handleFAQ = () => {
        navigate('/faq');
      };
      const handleContact = () => {
        navigate('/contact');
      };
    return (
        <>
    <div className="topBar">
    <div className="heading">{'< artificial ignorance >'}</div>
    <div className="menuBar">
        <span onClick={handleHome}>Home</span>
        <span onClick={handleClick}>Generator</span>
        <span onClick={handleFAQ}>FAQ</span>
        <span onClick={handleContact}>Contact</span>
    </div>
    </div>
    </>
    )
}
export default Topbar;