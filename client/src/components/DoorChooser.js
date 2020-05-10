import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

//redux imports 
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addDoor} from '../actions/userSelections';
const DoorChooser = ({addDoor}) => {
    
    //initialize the history object so that images can redirect to the clue choosing pair
    let history = useHistory();

    //create an array that is the length of the number of images that are contained within the door chooser file
    const NUMBER_OF_DOORS = 2;
    const doorArray = new Array(NUMBER_OF_DOORS);
    for(let i = 0; i < doorArray.length; i++){
        doorArray[i] = "";
    }


    //function that is fired whenever an image is clicked, passing that data onwards to the clue selector
    function goNext(e){

        addDoor(e.target.src);

        history.push({
            pathname: '/clue-chooser',
            state: e.target.alt
        });
    }
    return(
        <Fragment>
            <h1 className = "game-chooser-text">Choose the hidden door that that the person will escape from</h1>
            <div className = "img-positioner">
                {doorArray.map((door, index) => (
                    <div key = {index} className= "img-holder">
                        <img key = {index} src = {require(`../images/doors/door_${index+1}.jpg`)} width = "400px" height = "400px" alt = {`door_${index+1}`} onClick = {e => goNext(e)} />
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

DoorChooser.propTypes = {
    addDoor: PropTypes.func.isRequired
}

export default connect(null, {addDoor})(DoorChooser);