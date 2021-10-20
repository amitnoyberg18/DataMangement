import React from "react";

interface IProps{
    setIsFirstPageActive:Function;
}

const FirstPage: React.FC<IProps>=({setIsFirstPageActive})=>{
    return (
        <div className="FirstPage">
            <h1>מוק"ד</h1>
            <button className="btnStart" onClick={()=>setIsFirstPageActive(false)}>היכנס לאפליקציה</button>
        </div>
    )
}

export default FirstPage;