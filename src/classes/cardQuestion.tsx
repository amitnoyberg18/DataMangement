// type cardTree<T> ={
//     id:number;
//      questionText:T;
//      answers ? :T[];
//      prevCard ? :Tree<T>;
//      nextCards ? :Tree<T>[];
//      indexSelectedAnswer ?:number;

// }

export default class Tree<T> {
    private id:number;
    private questionText:T;
    private answers ? :T[];
    private prevCard ? :Tree<T>;
    private nextCards ? :Tree<T>[];
    private indexSelectedAnswer ?:number;
    // we need to add a note variable so if in certain question 
    // they need to check somthing they will have an explanition to how

    constructor(id:number,questionText:T, answers:T[]){
        this.id = id;
        this.questionText = questionText;
        //for to poc i add the answers and nexts
        this.answers = answers;

    }

    setAnswers = (answers:T[])=>{
        this.answers = this.answers?.concat(...answers);
    }
    setPrevCard = (prevCard:Tree<T>)=>{
        this.prevCard = prevCard;
    }
    setNext = (nextCards:Tree<T>[])=>{
        this.nextCards = nextCards;
    }
    setIndexSelectedAnswer = (indexSelectedAnswer:number)=>{
        this.indexSelectedAnswer = indexSelectedAnswer;
    }

    getQuestionText = ()=>{
        return this.questionText;
    }
    getAnwers = ()=>{
        if(this.answers !== undefined){
            return this.answers;
        }
        return [];
    }

    getNextCard = ()=>{
        return this.nextCards;
    }

    getPrevCard = ()=>{
        if(this.prevCard !== undefined){
            return this.prevCard;
        }
        return this;
    }

    getNextSelectedCard = ()=>{
        if(this.nextCards){
            if(this.indexSelectedAnswer !== undefined){
                return this.nextCards[this.indexSelectedAnswer];
            }
        }
    }
    hasNext =()=>{
        if(this.nextCards !== undefined){
            return true;
        }
        return false;
    }

    // getBackTheNextSelectedCard = ()=>{
    //     if(this.nextCards){
    //         if(this.prevCard?.getNextSelectedCard !)
    //     }
    // }


}
//a test environment for tree node

// type CardQuestionnaire={
// //     id:number;
// //     questionText:string;
// //     answers ?:string[];
// //     prevCard ? :CardQuestionnaire;
// //     nextCard ? : CardQuestionnaire[];
// //     indexSelectedAnswer ?:number   
// // }

// interface INode<T> {
//     id:number;
//     questionText:T;
//     answers ?:T[];
//     prevCard ? :INode<T> ;
//     nextCard ? : INode<T>[];
//     indexSelectedAnswer ?:number
//   }
// export default class BinaryTree<T> {
//     private root: INode<T> | undefined;

//     createNewNode = (questionText: T): INode<T> => {
//         return {
//             id : 1,
//             questionText,
//             answers:undefined,
//             prevCard:undefined,
//             nextCard :undefined,
//             indexSelectedAnswer:undefined
//         }
//       }
//     // setQuestionText = (questionText: T)=>{
//     //     this.root?.questionText = questionText
//     //   }
//     setAnswers = (answers:T[])=>{
//         this.root?.answers?.concat(answers);
//     }
//     getQuestion = ()=>{
//         return this.root?.questionText;
//     }
//     // setPrev = (prevCard : INode<T>)=>{
//     //     this.root?.prevCard = prevCard;
//     // }

//     //   insertPrev = (Tree:BinaryTree<T>) => {
//     //     const currentNode = Tree
//     //     if (!this.root) {
//     //       this.root = currentNode
//     //     } else {
//     //       this.insertIntoCurrentNode(currentNode)
//     //     }
//     //     return this
//     //   }
// }
// //a test environment for tree node
