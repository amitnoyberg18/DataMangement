import React, { useCallback, useEffect } from "react";
// import CardQuestionnaire from "../classes/cardQuestion"
import { CardTree } from "../models/cardTree";


interface IProps{
    answer: string;
    index:number;
    setCard:Function;
    // function setCards()

    // fu
}
const Answer: React.FC<IProps> = ({answer,setCard,index}) => {

    const onSelectAnswer=()=>{
        setCard((prevCard:CardTree) =>{
            prevCard.indexSelectedAnswer=index;
            if(prevCard.nextCards!==undefined){
                prevCard.nextCards[index].prevCard=prevCard;
         
                return prevCard.nextCards[index];
        
            }

                return undefined;
        })
    }
    const  handleKeyPress =  useCallback((e) => {
            if(e.code === 'Digit'+(index+1)){
                console.log(String(index+1));
                const answerElement=document.getElementById(index.toString())
                answerElement?.classList.add('answerSelectedByKey');
                setTimeout(() => {
                    const answerElement=document.getElementById(index.toString())
                    answerElement?.classList.remove('answerSelectedByKey');
                    onSelectAnswer()

                }, 1000);
                
             
            }
      }, [index]);
    
    
    
    useEffect(()=>{
        document.addEventListener('keypress',handleKeyPress)
        return () => {
            document.removeEventListener('keypress', handleKeyPress)
        }
    },[handleKeyPress])
        // window.addEventListener('keydown',(e)=>{
        //     if(e.code === 'Digit'+(index+1)){
        //         console.log(String(index+1))
        //         onSelectAnswer()
        //     }
        // })
    
    return ( 
        <div id={index.toString()} onClick={onSelectAnswer} className="answer">
            <p>({index+1}) {answer}</p>
        </div>
     );
}
 
export default Answer;
