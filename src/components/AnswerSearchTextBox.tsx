import React from "react";

interface IProps{
    setIsFirstPageActive:Function;
}

const AnswerSearchTextBox: React.FC<IProps>=({setIsFirstPageActive})=>{
    return (
        <div className="FirstPage">
            <h1>חיפוש תשובות סופיות</h1>
            <button className="btnStart" onClick={()=>setIsFirstPageActive(false)}>היכנס לאפליקציה</button>
        </div>
    )
}

export default AnswerSearchTextBox;