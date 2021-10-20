import React from "react";
import { CardTree } from "../models/cardTree";

interface IProps{
    history: CardTree[];
    setCard:Function;
    setHistory:Function;
   
}
const History: React.FC<IProps>=({history,setCard,setHistory})=>{


    const handleBackInHistory = (item:CardTree,index:number)=>{
        setCard(item);
        setHistory((prevHistory:CardTree[])=>{
          const newHistory = prevHistory.filter( (ele, ind) => ind === prevHistory.findIndex( elem => elem.id === ele.id && elem.id === ele.id));
          newHistory.splice(index,newHistory.length);
          return newHistory;
        })
      }

    return (
        <div className="history">
        {history.filter( (ele, ind) => ind === history.findIndex( elem => elem.id === ele.id && elem.id === ele.id)).map((item,index)=>{
          if(item.answers !== undefined && item.indexSelectedAnswer !== undefined){
            return <div className="historyItem" key={index}>
              <p style={{textDecoration:"underline",cursor:"pointer"}} onClick={()=>handleBackInHistory(item,index)}>{item.questionText}</p>
              <p>{item.answers[item.indexSelectedAnswer]}</p>
            </div>
          }
          return <> </>
        })}
      </div>
    )
}

export default History;