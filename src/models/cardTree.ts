
export type CardTree ={ 
    id:number;
    questionText:string;
    answers ? :string[];
    prevCard ? :CardTree;
    nextCards ? :CardTree[];
    indexSelectedAnswer ?:number;
}

