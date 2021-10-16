import React from "react";

interface IProps{
    questionText: string ;

}
const Question: React.FC<IProps> = ({questionText}) => {
    return ( 
        <div className="question">
            <p>{questionText}</p>
        </div>
     );
}
 
export default Question;