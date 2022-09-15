import React from "react";
import Question from "./Question";

function App() {

    const [data, setData] = React.useState([]);
    const [quest, setQuest] = React.useState([]);
    
    React.useEffect(()=>{

        fetch(`https://opentdb.com/api.php?amount=40`)
        .then(res => res.json())
        .then(data => setData(data.results))
        
        
    }, [])

    
    const quesElements = quest.map((v, i)=>{
        
        return <Question 
            key={i} 
            correctAnswer={v.correct_answer}
            incorrectAnswers={v.incorrect_answers}
            question={v.question}
            
        />
    })

    function setQuestions() {
        const newArray = [];
        while (newArray.length < 5) {
            const newNumber = Math.floor(Math.random() * 40);
            if(newArray.indexOf(newNumber) === -1) {
                newArray.push(newNumber)
            }
        }
        const newQuestions = newArray.map((v)=>data[v]);
        setQuest(newQuestions);
    }


    return (
        <>
        {quesElements}
        <button onClick={setQuestions}>Click</button>
        </>
    )
}

export default App