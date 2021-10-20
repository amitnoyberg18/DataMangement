import React from "react";
// import dataVal from '../data/data';
import {dataCardTree} from '../data/data';

interface IProps{
    // cardQuestionnaire: CardQuestionnaire<string>;
    theWayToSolve: string;
    crmDetails:string[];
    setCard: Function;
    setHistory:Function;
}
const FinalAnswerPage: React.FC<IProps> = ({theWayToSolve,crmDetails,setCard,setHistory}) => {


    return (    
        <div>
                <h1>תשובה סופית</h1>            
                <div className="finalDiv">
                    <h2>תחום: {crmDetails[0]}</h2>
                    <h2>תת תחום: {crmDetails[1]}</h2>
                    <h2>שאלה: {crmDetails[2]}</h2>
                    <h2>תת שאלה: {crmDetails[3]}</h2>
                </div>
         
                <div className="finalDiv">
                    <h2> איך לטפל בקו ראשון: {theWayToSolve}</h2>
                </div>
                <div className="backbutton">
                    <button className="backToStart" onClick={()=>
                        {
                            setCard(()=>dataCardTree()[0]);
                            setHistory([]);
                        }}>חזרה להתחלה</button>
                </div>

        </div>
        
     );
}
 
export default FinalAnswerPage;
