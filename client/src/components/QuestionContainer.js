import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';


const QuestionContainer = props => {
    //initialize hisotry object so that we can move on to the next part when a button is clicked
    let history = useHistory();
    

    //builds an array that is loopable, allowing all the images to easily be displayed
    let NUMBER_OF_IMAGES = 2;
    let questionContainerArray = new Array(2);
    for(let i = 0; i < questionContainerArray.length; i++){
        questionContainerArray[i] = "";
    }
    

    //initializes the function that will allow the user to go to the confirmation page
    function goNext(e){
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
                    <div className = "img-holder">
                        <img key = {index} src = {require(`../images/question container/question_container_${index+1}.jpg`)} width= "400px" height = "400px" alt = {`question_container_${index+1}`} onClick = {e => goNext(e)} />
                    </div>
                ))}
            </div>

        </Fragment>
    )
}


export default QuestionContainer;