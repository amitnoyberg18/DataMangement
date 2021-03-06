import React, { useEffect, useState } from 'react';
import Question from "./components/Question";
import Answer from "./components/Answer";
import FirstPage from './components/FirstPage';
// import CardQuestionnaire from "./classes/cardQuestion";
import History from './components/History';
import FinalAnswerPage from './components/FinalAnswerPage';
import {dataCardTree} from './data/data';
import {CardTree} from './models/cardTree'
import CommonAnswers from './components/CommonAnswers';

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

  const [isFirstPageActive,setIsFirstPageActive] = useState(true);
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
        // setIsFirstPageActive(true);
        return theCard
  
        })
    }, 0);

    
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
      {isFirstPageActive && <FirstPage setIsFirstPageActive={setIsFirstPageActive} />}
      {!isFirstPageActive && 
      <div className="TheApp">
          <History history={history} setHistory={setHistory} setCard={setCard} />
          <div className="buttons">
            <button id="btnPrevQuesiton" className="btnPrev" onClick={backToPrevCard}>&#x21B6;</button>
            {/* <button>&#x21B7;</button> */}
            </div>
        <div className="TheQuestionPage">
          {card?.nextCards!==undefined && 
          <div className="card">
            <Question questionText={card.questionText}/>
            {getAnswersArr().map((answer,index)=>{
              return <Answer setHistory={setHistory} answer={answer} index={index} key={index} setCard={setCard}/>

            })}

            <div className="commonAnswers">
            <hr />
              <h1>???????????? ????????????</h1>

              {dataCardTree().filter((item,index)=>item.nextCards === undefined).map((item,index)=>{
                return <CommonAnswers key={index} setHistory={setHistory} card={item} setCard={setCard}/>
              })}
              </div>
          </div>}
          {card?.nextCards===undefined && <FinalAnswerPage setHistory={setHistory} theWayToSolve={getQuestion()} crmDetails={getAnswersArr()} setCard={setCard}/>}
        </div>
      </div>}
    </div>
  );
}

export default App;