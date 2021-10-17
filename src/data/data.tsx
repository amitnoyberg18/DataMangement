import CardQuestionnaire from "../classes/cardQuestion"



const dataVal = () =>{ 
    const data = [
        new CardQuestionnaire<string>(1,"היכן הבעיה",["אתר","לא"]), 
        new CardQuestionnaire<string>(2,"היכן הבעיה באתר",["שאלונים","נתון לא מעודכן באתר","נתון לא נכון באתר","לא מצליח להתחבר לאתר"]),   
        new CardQuestionnaire<string>(3,"האם התחבר בעבר",["לא","כן"]),
        new CardQuestionnaire<string>(4,"שילחו קישור לסיסמא ראשונית. הצליח?",["כן","לא"]),
        new CardQuestionnaire<string>(5,"הביאו סיסמה ראשונית. הצליח?",["כן","לא"]),
        new CardQuestionnaire<string>(6,"להיכנס לטרנזקציה ........",["תחום","תת תחום","שאלה","תת שאלה","תבנית תשובה בCRM"]), 
        new CardQuestionnaire<string>(7,"שאלונים",["לבדוק איזה שאלון ולעשות הסבה"]), 

    ]
    data[0].setNext([data[1],data[5]]);
    data[1].setNext([data[6],data[5],data[5],data[2]]);
    data[2].setNext([data[3],data[4]]);
    return data;
}
export default dataVal;