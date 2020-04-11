import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import '../../CSS/builder/builder.css';
/*This is the component that a teacher will be redirected to after they select
what subject they are going to be teaching. I am going to add some redux to the
app so that the application can keep track of what subject the teacher is planning
on teaching, but that will come later */


//Currently working on allowing a user to upload a photo as a question
const Builder = () => {
    //This code sets the number of questions that the teacher will add.
    //This will become a scalable value later on
    const NUMBER_OF_QUESTIONS = 10;
    const questionArray = new Array(NUMBER_OF_QUESTIONS);
    for(let i = 1; i <= NUMBER_OF_QUESTIONS; i++){
        questionArray[i] = i;
    }

    return (
        <Fragment>
        <div className = "builder-top-spacer"></div>
        {/*Link allows user to go back to the subject selector page */}
        <Link className = "builder-back-button" to = "/">Back</Link>
        <form className = 'builder-container'>
            <h3>Enter the problems along with the correct answers here</h3>
            <div className = "question-answer-container">
                <div className = "questions-container">
                    <span>Questions</span>
                    <ul>
    {/*mapping through the number of questions and creating an input for that */}
                        {questionArray.map(question =>(
                            <li id = {question} className = "question-li">
                                <input placeholder = {question} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className = "answers-container">
                    <span>Answers</span>
                    <ul>
    {/*mapping through the number of questions and creating an input for that */}
                        {questionArray.map(question =>(
                            <li id = {question} className = "question-li">
                                <input placeholder = {question} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Link className = "builder-submit" to = '/game-chooser'>Submit</Link>
        </form>
        </Fragment>
        
    )
}

export default Builder;