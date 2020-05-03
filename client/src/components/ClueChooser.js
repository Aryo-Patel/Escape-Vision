import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

const ClueChooser = props => {
    //creates history instance that allows an image to move the user on to chosing the image that contains the questions
    let history = useHistory();

    //builds an array that is the length of the number of images in the clues image folder
    const NUMBER_OF_CLUES = 1;
    let cluesArray = new Array(NUMBER_OF_CLUES);
    for(let i = 0; i < cluesArray.length; i++){
        cluesArray[i] = "";
    }

    //function for when an image is clicked, passes on the image's alt data and redirects the user to a page where they select the image that contains the questions
    function goNext(e){
        history.push({
            pathname: '/choose-question-container',
            state: e.target.alt
        })
    }
    return(
        <Fragment>
            <h1>Choose the clue that the user must find</h1>
            {cluesArray.map((clue, index) => (
                <img key ={index} src = {require(`../images/clues/clue_${index+1}.jpg`)} width = "200px" height = "200px" alt = {`clue_${index+1}`} onClick = {e => goNext(e)}/>
            ))}
        </Fragment>
    )
}


export default ClueChooser;