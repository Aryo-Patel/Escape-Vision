import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addContainer} from '../actions/userSelections';
const QuestionContainer = ({addContainer}) => {
    //initialize hisotry object so that we can move on to the next part when a button is clicked
    let history = useHistory();
    

    //builds an array that is loopable, allowing all the images to easily be displayed
    let NUMBER_OF_IMAGES = 2;
    let questionContainerArray = new Array(NUMBER_OF_IMAGES);
    for(let i = 0; i < questionContainerArray.length; i++){
        questionContainerArray[i] = "";
    }
    

    //initializes the function that will allow the user to go to the confirmation page
    function goNext(e){
        addContainer(e.target.src);
        history.push({
            pathname: '/confirm',
            state: e.target.alt
        })
    }

    return(
        <Fragment>
            <h1 className = "game-chooser-text">Chose the image that the game will hide behind</h1>
            <div className = "img-positioner">
                {questionContainerArray.map((questionContainer, index) => (
                    <div key =  {index} className = "img-holder">
                        <img key = {index} src = {require(`../images/question container/question_container_${index+1}.jpg`)} width= "400px" height = "400px" alt = {`question_container_${index+1}`} onClick = {e => goNext(e)} />
                    </div>
                ))}
            </div>

        </Fragment>
    )
}

QuestionContainer.propTypes = {
    addContainer: PropTypes.func.isRequired
}

export default connect(null, {addContainer})(QuestionContainer);