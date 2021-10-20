import React, { useCallback, useEffect } from "react";
// import CardQuestionnaire from "../classes/cardQuestion"
import { CardTree } from "../models/cardTree";


interface IProps{
    answer: string;
    index:number;
    setCard:Function;
    setHistory:Function;
    // function setCards()

    // fu
}
const Answer: React.FC<IProps> = ({answer,setCard,index,setHistory}) => {

    const onSelectAnswer = useCallback(()=>{
        setCard((prevCard:CardTree) =>{
            prevCard.indexSelectedAnswer=index;
            if(prevCard.nextCards!==undefined){
                prevCard.nextCards[index].prevCard=prevCard;   
                // setHistory((history: {question:string;selectedAnswer:string;theCard:CardTree;}[])=>{
                //     const data ={'question':prevCard.questionText,'selectedAnswer':answer,"theCard":prevCard};
                //     // history.pop();

                //     return history;
                // })
                setHistory((history:CardTree[])=>{
                    history.push(prevCard);
                    // let pp = history.filter( (ele, ind) => ind === history.findIndex( elem => elem.id === ele.id && elem.id === ele.id))
                    return history;
                })
                return prevCard.nextCards[index];
        
            }

                return undefined;
        })
    },[index,setCard,setHistory])
    const  handleKeyPress =  useCallback((e) => {
        // const answerElement=document.getElementById(index.toString())
        // answerElement?.classList.remove('answerSelectedByKey');
            if(e.code === 'Digit'+(index+1)){

            //     const answerElement=document.getElementById(index.toString())
            //     answerElement?.classList.add('answerSelectedByKey');
            //    const div= document.getElementsByTagName("div")
                // setTimeout(() => {
                //     const answerElement=document.getElementById(index.toString())
                //     answerElement?.classList.remove('answerSelectedByKey');
                //     onSelectAnswer()

                // }, 1000);
                onSelectAnswer();
                
             
            }
      }, [index,onSelectAnswer]);
    
    
    
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
            <p style={{float:"right",marginRight:"10%"}}>({index+1})</p>
            <p style={{marginLeft:"10%"}}>{answer}</p>
        </div>
     );
}
 
export default Answer;
