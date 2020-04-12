import React, {Fragment, useState} from 'react';
import {Redirect, Link } from 'react-router-dom'
import '../../CSS/builder/builder.css';
/*This is the component that a teacher will be redirected to after they select
what subject they are going to be teaching. I am going to add some redux to the
app so that the application can keep track of what subject the teacher is planning
on teaching, but that will come later */

//For development purposes the number of questions is set to 1
const Builder = () => {
    //This code sets the number of questions that the teacher will add.
    //This will become a scalable value later on
    const NUMBER_OF_QUESTIONS = 1;
    const questionArray = new Array(NUMBER_OF_QUESTIONS);
    for(let i = 1; i <= NUMBER_OF_QUESTIONS; i++){
        questionArray[i] = i;
    }

    //State component checks to see if form has been submitted, if it has,
    //state tells the redirect component to redirect to choosing a game screen
    const [redirect, toggleRedirect] = useState(false);

    //on submit will redirect to chosing the game if all fields are filled out
    const onSubmit = e => {
        e.preventDefault();

        toggleRedirect(true);
    }

    //fucntion to check state of redirect
    const checkRedirect = () =>{
        if(redirect){
            return <Redirect to = '/game-chooser' />
        }
    }


    return (
        <Fragment>
        {checkRedirect()}
        <div className = "builder-top-spacer"></div>
        {/*Link allows user to go back to the subject selector page */}
        <Link className = "builder-back-button" to = "/">Back</Link>
        <form className = 'builder-container' onSubmit = {e => onSubmit(e)}>
            <h3>Enter the problems along with the correct answers here <br/>
            Text is required, but uploading a file is optional</h3>
            <div className = "question-answer-container">
                <div className = "questions-container">
                    <span>Questions</span>
                    <ul>
    {/*mapping through the number of questions and creating an input for that */}
                        {questionArray.map(question =>(
                            <li id = {NUMBER_OF_QUESTIONS + question} className = "question-li">
                                <div className = 'question-image-text-holder'>
                                    <input type = 'file' accept = "image/*" />
                                    <input placeholder = {question}  required/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className = "answers-container">
                    <span>Answers</span>
                    <ul>
    {/*mapping through the number of questions and creating an input for that */}
                        {questionArray.map(answer =>(
                            <li id = {answer} className = "question-li">
                                <input placeholder = {answer} required/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className= 'builder-input-holder'>
                <input type = 'submit' />
            </div>
        </form>
        </Fragment>
        
    )
}

export default Builder;