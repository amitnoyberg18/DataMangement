import React, { useEffect, useState } from 'react';
import Question from "./components/Question";
import Answer from "./components/Answer";
// import CardQuestionnaire from "./classes/cardQuestion";
import FinalAnswerPage from './components/FinalAnswerPage';
import {dataCardTree} from './data/data';
import {CardTree} from './models/cardTree'
interface Istate{
  cardTreeObj :CardTree | undefined;
  // history: {
  //   question:string;
  //   selectedAnswer:string[] |undefined;
  //   theCard:CardTree | undefined;
  // }[] | undefined;
  history:CardTree[];
}
function App() {

  const [card,setCard]=useState<Istate["cardTreeObj"]>(()=>{
    const newCard = dataCardTree()[0];
    return newCard;
    // const newCard = new CardQuestionnaire<string>(1,"to kill or not to kill",["kill","dont kill"])
    // //the nexts cards we will get from the database
    // const nextCard = new CardQuestionnaire<string>(2,"do you love being a murderer?",["yes","no"]);
    // const nextCard2=new CardQuestionnaire<string>(3,"do you love being a good boy?",["yes","no"]);
    // newCard.setNext([nextCard,nextCard2]);
    // console.log(newCard.getNextCard())
    // return newCard;
  });
  const [history,setHistory] = useState<Istate["history"]>([]);






  const backToPrevCard = ()=>{
    setTimeout(() => {
      setCard((theCard : CardTree | undefined )=>{

        if(theCard?.prevCard!==undefined){   
          setHistory((prevHistory)=>{
            prevHistory.pop()
            // prevHistory.filter( (ele, ind) => ind === prevHistory.findIndex( elem => elem.id === ele.id && elem.id === ele.id))
            return prevHistory;
          })     
          return theCard.prevCard            
        }
        return theCard
  
        })
    }, 0);

    
  }

  const handleBackInHistory = (item:CardTree,index:number)=>{
    setCard(item);
    setHistory((prevHistory:CardTree[])=>{
      const newHistory = prevHistory.filter( (ele, ind) => ind === prevHistory.findIndex( elem => elem.id === ele.id && elem.id === ele.id));
      newHistory.splice(index,newHistory.length);
      return newHistory;
    })
  }






  const getAnswersArr =()=>{

    if(card?.answers!==undefined)
      return card.answers

    return []
  }
  const getQuestion =()=>{

    if(card?.answers!==undefined)
      return card.questionText

    return "";
  }

  useEffect(()=>{
    const handleKeyPress = (e:any) => {
        if(e.keyCode !== undefined){
            if(e.keyCode===27){
              const btnPrev=document.getElementById('btnPrevQuesiton')
              btnPrev?.classList.add("backPrevByKey")
              backToPrevCard();

              setTimeout(() => {
                btnPrev?.classList.remove("backPrevByKey")

              }, 500);
                           
            }
        }

    }
    document.addEventListener('keyup',(e)=>{
        handleKeyPress(e);
    })
    return () => {
        document.removeEventListener('keyup', (e)=>{
            handleKeyPress(e);
        })
    }
},[])


//another variable that contains an array of dictonaries that contains the question and the picked answer

  return (
    <div className="App">
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
      <div className="buttons">
        <button id="btnPrevQuesiton" className="btnPrev" onClick={backToPrevCard}>&#x21B6;</button>
        {/* <button>&#x21B7;</button> */}
        </div>
      {card?.nextCards!==undefined && 
      <div className="card">
        <Question questionText={card.questionText}/>
        {getAnswersArr().map((answer,index)=>{
          return <Answer setHistory={setHistory} answer={answer} index={index} key={index} setCard={setCard}/>
        })}

      </div>}
      {card?.nextCards===undefined && <FinalAnswerPage theWayToSolve={getQuestion()} crmDetails={getAnswersArr()} setCard={setCard}/>}
    </div>
  );
}

export default App;