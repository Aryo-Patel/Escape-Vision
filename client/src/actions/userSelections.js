//all the user selection imports from the types.js file
import {
    SUBJECT_SELECTION_SUBMITTED,
    SUBJECT_SELECTION_FAILED,
    QUESTION_ANSWERS_SUBMITTED,
    QUESTION_ANSWERS_FAILED,
    GAME_CHOOSER_SUBMITTED,
    GAME_CHOOSER_FAILED,
    LOCK_CHOOSER_SUBMITTED,
    LOCK_CHOOSER_FAILED,
    SAFE_CHOOSER_SUBMITTED,
    SAFE_CHOOSER_FAILED,
    MIRROR_CHOOSER_SUBMITTED,
    MIRROR_CHOOSER_FAILED,
    DOOR_CHOOSER_SUBMITTED,
    DOOR_CHOOSER_FAILED,
    CLUE_CHOOSER_SUBMITTED,
    CLUE_CHOOSER_FAILED,
    QUESTION_CONTAINER_SUBMITTED,
    QUESTION_CONTAINER_FAILED
}from './types';

//subject selection
export const addSubjectSelection = (category, courseName) => dispatch => {
    dispatch({
        type: SUBJECT_SELECTION_SUBMITTED,
        payload: {
            category,
            courseName
        }
    });
}

//question answer pairs
export const addQuestionAnswers = (questionAnswerArray) =>  dispatch =>{
    // let questionAnswerArray = [];
    // for(let i = 0; i < questionArray.length; i++){
    //     let individualQuestionAnswer = {
    //         question: questionArray[i].question,
    //         file: questionArray[i].file,
    //         answer: answerArray[i]
    //     }
    //     questionAnswerArray.push(individualQuestionAnswer);
    // }
    dispatch({
        type: QUESTION_ANSWERS_SUBMITTED,
        payload: questionAnswerArray
    })
}

//adds the locks
export const addLock = (lock) => dispatch => {
    dispatch({
        type: LOCK_CHOOSER_SUBMITTED,
        payload: lock
    })
}


//adds the safe choice
export const addSafe = (safe) => dispatch => {
    dispatch({
        type: SAFE_CHOOSER_SUBMITTED,
        payload: safe
    })
}

//adds the mirror selection
export const addMirror = (mirror) => dispatch => {
    dispatch({
        type: MIRROR_CHOOSER_SUBMITTED,
        payload: mirror
    });
}

//adds the door selection
export const addDoor = door => dispatch => {
    dispatch({
        type: DOOR_CHOOSER_SUBMITTED,
        payload: door
    })
}

//adds the clue selection
export const addClue = clue =>dispatch => {
    dispatch({
        type: CLUE_CHOOSER_SUBMITTED,
        payload: clue
    })
}

export const addContainer = container => dispatch => {
    dispatch({
        type: QUESTION_CONTAINER_SUBMITTED,
        payload: container
    })
}