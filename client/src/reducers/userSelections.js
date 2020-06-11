//all of the potential actions from the types file in the actions folder
import {
    GRADE_SELECTION_SUBMITTED,
    GRADE_SELECTION_FAILED,
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
} from '../actions/types';

const initialState = {
    grade: null,
    subjectSelection: {
        category: null,
        courseName: null
    },
    questionAnswerPairs: [],
    gameChooserURL: null,
    lockChooser: null,
    safeChooser: null,
    mirrorChooser: null,
    doorChooser: null,
    clueChooser: null,
    questionContainer: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GRADE_SELECTION_SUBMITTED:
            return {
                ...state,
                grade: payload
            }
        case SUBJECT_SELECTION_SUBMITTED:
            return {
                ...state,
                subjectSelection: payload
            }
        case QUESTION_ANSWERS_SUBMITTED:
            return {
                ...state,
                questionAnswerPairs: payload
            }
        case LOCK_CHOOSER_SUBMITTED:
            return {
                ...state,
                lockChooser: payload
            }
        case SAFE_CHOOSER_SUBMITTED:
            return {
                ...state,
                safeChooser: payload
            }
        case MIRROR_CHOOSER_SUBMITTED:
            return {
                ...state,
                mirrorChooser: payload
            }
        case DOOR_CHOOSER_SUBMITTED:
            return {
                ...state,
                doorChooser: payload
            }
        case CLUE_CHOOSER_SUBMITTED:
            return {
                ...state,
                clueChooser: payload
            }
        case QUESTION_CONTAINER_SUBMITTED:
            return {
                ...state,
                questionContainer: payload
            }
        default:
            return { ...state }
    }
}