import React from "react";
import CardQuestionnaire from "../classes/cardQuestion"


interface IProps{
    answer: string;
    index:number;
    setCard:Function;
}
const Answer: React.FC<IProps> = ({answer,setCard,index}) => {

    const onSelectAnswer=()=>{
        setCard((prevCard:CardQuestionnaire<string>)=>{
            console.log(index);
            prevCard.setIndexSelectedAnswer(index);
            prevCard.getNextSelectedCard()?.setPrevCard(prevCard);
            console.log(prevCard.getNextSelectedCard())
            return prevCard.getNextSelectedCard();
        })
    }
    console.log(index)
    return ( 
        <div className="answer">
            <p onClick={onSelectAnswer}>{answer}</p>
        </div>
     );
}
 
export default Answer;
