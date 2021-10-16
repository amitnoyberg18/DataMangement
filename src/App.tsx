import React, { useState } from 'react';
import Question from "./components/Question";
import Answer from "./components/Answer";
import CardQuestionnaire from "./classes/cardQuestion";
import dataVal from './data/data';

interface Istate{
  cardTree:CardQuestionnaire<string>
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

//another variable that contains an array of dictonaries that contains the question and the picked answer

  return (
    <div className="App">
      <Question questionText={card.getQuestionText()}/>
      {card.getAnwers()?.map((answer,index)=>{
        console.log(index)
        return <Answer answer={answer} index={index} key={index} setCard={setCard}/>
      })}
      <div className="buttons">
        <button>back</button>
        <button>forward</button>
      </div>
    </div>
  );
}

export default App;
