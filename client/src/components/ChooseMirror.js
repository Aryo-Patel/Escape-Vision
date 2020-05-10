import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addMirror} from '../actions/userSelections';
const ChooseMirror = ({addMirror}) => {
    
    let history = useHistory();
    //initializes a loop that can be run to generate all of the mirrors that are stored
    const NUMBER_OF_MIRRORS = 2;
    let mirrorArray = new Array(NUMBER_OF_MIRRORS);
    for(let i = 0; i < mirrorArray.length; i++){
        mirrorArray[i] = "";
    }

    //called whenever an image is clicked, and will pass on the data of the image that was clicked to the escape door
    function goNext(e){
        addMirror(e.target.src);
        history.push({
            pathname: '/door-chooser',
            state: e.target.alt
        })
    }
    return(
        <Fragment> 
            <h1 className = "game-chooser-text">Choose the mirror that the safe will be hidden behind</h1>
            <div className = "img-positioner">
                {mirrorArray.map((mirror, index) => (
                    <div key = {index} className = "img-holder">
                        <img key = {index} src = {require(`../images/mirrors/mirror_${index+1}.jpg`)} width = "400px" height = "400px" alt = {`mirror_${index+1}`} onClick = {e => goNext(e)}/>
                    </div>
                ))}
            </div>
   
        </Fragment>
    )
}

ChooseMirror.propTypes= {
    addMirror: PropTypes.func.isRequired
}
export default connect(null, {addMirror})(ChooseMirror);