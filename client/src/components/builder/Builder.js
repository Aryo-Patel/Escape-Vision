import React, {Fragment, useState} from 'react';
import {Redirect, Link } from 'react-router-dom';

//jquery to make selecting elements significantly easier
import $ from 'jquery';
//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; //technically not redux, but I'm using it for redux purposes
import {addQuestionAnswers} from '../../actions/userSelections';

//styling import
import '../../CSS/builder/builder.css';
/*This is the component that a teacher will be redirected to after they select
what subject they are going to be teaching. I am going to add some redux to the
app so that the application can keep track of what subject the teacher is planning
on teaching, but that will come later */
//For development purposes the number of questions is set to 1
const Builder = ({addQuestionAnswers}) => {
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
    //additionally, onSubmit will add what the question/answer choices are to redux 
    const onSubmit = e => {
        e.preventDefault();
        
        //this will be the array that everything is returned in
        let questionAnswerArray = new Array(NUMBER_OF_QUESTIONS);

        //creates the array with all the questions
        let questions = [];
        $('.questions div input:nth-child(2)').each(function(){
            questions.push($(this).val());
        });

        //creates teh array with all the supporting files
        let files= [];
        $('input[type="file"]').each(function(){
            if($(this)[0].files.length > 0){
                files.push($(this)[0].files[0]);
            }
            else{
                files.push(" ");
            };
        });

        //answers will be an array
        let answers = [];
        $('.answers input').each(function(){
            answers.push($(this).val());
        });

        for(let i = 0; i < questionAnswerArray.length; i++){
            questionAnswerArray[i] = {
                question: questions[i],
                file: files[i],
                answer: answers[i]
            }
        }
        
        //sends data to the action to add it to the reducer
        addQuestionAnswers(questionAnswerArray);

        //moves on to the next question
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
                        {questionArray.map((question, index) =>(
                            <li key = {index} id = {NUMBER_OF_QUESTIONS + question} className = "question-li questions">
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
                        {questionArray.map((answer, index) =>(
                            <li key = {index} id = {answer} className = "question-li answers">
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

Builder.propTypes = {
    addQuestionAnswers : PropTypes.func.isRequired
}

export default connect(null, {addQuestionAnswers})(Builder);