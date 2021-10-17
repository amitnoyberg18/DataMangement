import React, { useState } from 'react';
import Question from "./components/Question";
import Answer from "./components/Answer";
import CardQuestionnaire from "./classes/cardQuestion";
import dataVal from './data/data';
import FinalAnswerPage from './components/FinalAnswerPage';

interface Istate{
  cardTree :CardQuestionnaire<string>
}
function App() {

  const [card,setCard]=useState<Istate["cardTree"]>(()=>{
    const newCard = dataVal()[0];
    console.log(newCard)
    return newCard;
    // const newCard = new CardQuestionnaire<string>(1,"to kill or not to kill",["kill","dont kill"])
    // //the nexts cards we will get from the database
    // const nextCard = new CardQuestionnaire<string>(2,"do you love being a murderer?",["yes","no"]);
    // const nextCard2=new CardQuestionnaire<string>(3,"do you love being a good boy?",["yes","no"]);
    // newCard.setNext([nextCard,nextCard2]);
    // console.log(newCard.getNextCard())
    // return newCard;
  })
  const backToPrevCard = ()=>{
    setCard((theCard:CardQuestionnaire<string>)=>theCard.getPrevCard())
  }

//another variable that contains an array of dictonaries that contains the question and the picked answer

  return (
    <div className="App">
              <div className="buttons">
          <button onClick={backToPrevCard}>&#x21B6;</button>
          {/* <button>&#x21B7;</button> */}
        </div>
      {card.hasNext() && 
      <div className="card">
        <Question questionText={card.getQuestionText()}/>
        {card.getAnwers()?.map((answer,index)=>{
          return <Answer answer={answer} index={index} key={index} setCard={setCard}/>
        })}

      </div>}
      {!card.hasNext() && <FinalAnswerPage theWayToSolve={card.getQuestionText()} crmDetails={card.getAnwers()} setCard={setCard}/>}
    </div>
  );
}

export default App;
