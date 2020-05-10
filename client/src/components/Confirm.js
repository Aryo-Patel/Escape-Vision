import React, {Fragment} from 'react';

//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

//css import
import '../CSS/confirm/confirm.css';
const Confirm = ({userSelections}) => {
    console.log(userSelections);
    return(
        <Fragment>
            <h1 className = "game-chooser-text">Confirm your selections</h1>
            <div className = "user-selections">
                <div className= "selection-wrapper">
                    <span className = "selection">Subject Selected: </span><span>{userSelections.subjectSelection.courseName}</span>
                </div>
                <div className= "selection-wrapper">
                    <span className = "selection">Questions:</span>
                    <ul class = "question-map">
                        <li className = "display-questions">
                            <ul className = "questions">
                                {userSelections.questionAnswerPairs.map(questionAnswerPair => (
                                    <li className = "question-answer">
                                        <span>Question: {questionAnswerPair.question}</span>
                                        <br></br>
                                        <span>Answer: {questionAnswerPair.answer}</span>
                                        <br></br>
                                        <span>File Provided: {questionAnswerPair.file !== ' ' ? 'Yes' : 'No'}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className= "selection-wrapper">
                    <span className = "selection">Game URL:{' '}</span><span> Not Yet Implemented!</span>
                </div>
                <div className=  "selection-wrapper">
                    <span className = "selection">Lock Chosen: </span><img src ={(userSelections.lockChooser)} width = "200px" height ="200px"></img>
                </div>

                <div className=  "selection-wrapper">
                    <span className = "selection">Safe Chosen: </span><img src = {userSelections.safeChooser} width = "200px" height = "200px"></img>
                </div>

                <div className=  "selection-wrapper">
                    <span className = "selection">Mirror Chosen: </span><img src = {userSelections.mirrorChooser} width = "200px" height = "200px"></img>
                </div>
                <div className=  "selection-wrapper">
                    <span className = "selection">Door Chosen: </span><img src = {userSelections.doorChooser} width = "200px" height = "200px"></img>
                </div>
                <div className=  "selection-wrapper">
                    <span className = "selection">Clue Chosen: </span><img src = {userSelections.clueChooser} width = "200px" height = "200px"></img>
                </div>
                <div className=  "selection-wrapper">
                    <span className = "selection">Question Container: </span><img src = {userSelections.questionContainer} width = "200px" height = "200px"></img>
                </div>
            </div>
        </Fragment>
    )
}

Confirm.propTypes = {
    userSelections: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    userSelections: state.userSelections
})
export default connect(mapStateToProps, {})(Confirm);