import React from "react";
// import dataVal from '../data/data';
import {dataCardTree} from '../data/data';

interface IProps{
    // cardQuestionnaire: CardQuestionnaire<string>;
    theWayToSolve: string;
    crmDetails:string[];
    setCard: Function;
}
const FinalAnswerPage: React.FC<IProps> = ({theWayToSolve,crmDetails,setCard}) => {


    return ( 

     
        <div>
                <h1>הפיתרון הסופי</h1>            
                <div className="finalDivRight">
                    <h2>תחום: {crmDetails[0]}</h2>
                    <h2>תת תחום: {crmDetails[1]}</h2>
                    <h2>שאלה: {crmDetails[2]}</h2>
                    <h2>תת שאלה: {crmDetails[3]}</h2>
                </div>
         
                <div className="finalDivLeft">
                    <h2> איך לטפל בקו ראשון {theWayToSolve}</h2>
                </div>
                <div className="backbutton">
                    <button className="backTotart" onClick={()=>setCard(()=>dataCardTree()[0])}>חזרה להתחלה</button>
                </div>

        </div>
        
     );
}
 
export default FinalAnswerPage;
