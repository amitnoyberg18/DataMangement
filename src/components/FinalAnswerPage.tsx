import React from "react";
import dataVal from '../data/data';

interface IProps{
    // cardQuestionnaire: CardQuestionnaire<string>;
    theWayToSolve: string;
    crmDetails:string[];
    setCard: Function;
}
const FinalAnswerPage: React.FC<IProps> = ({theWayToSolve,crmDetails,setCard}) => {

    return ( 
        <div  className="FinalAnswerPage">
            <h2>תחום: {crmDetails[0]}</h2>
            <h2>תת תחום: {crmDetails[1]}</h2>
            <h2>שאלה: {crmDetails[2]}</h2>
            <h2>תת שאלה: {crmDetails[3]}</h2>
            <br />
            <br />
            <p>תשובה סופית: {theWayToSolve}</p>
            <button onClick={()=>setCard(()=>dataVal()[0])}>חזרה להתחלה</button>
        </div>
     );
}
 
export default FinalAnswerPage;
