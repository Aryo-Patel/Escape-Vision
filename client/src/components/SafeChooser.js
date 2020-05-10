import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addSafe} from '../actions/userSelections';


const SafeChooser = ({addSafe}) =>  {

    const NUMBER_OF_SAFES = 2;
    let safesArray = new Array(NUMBER_OF_SAFES);
    for(let i = 0; i < safesArray.length; i++ ){
        safesArray[i] = "";
    }

    let history = useHistory();
    function goNext(e){
        
        addSafe(e.target.src);
        
        history.push({
            pathname: '/choose-mirror',
            state: e.target.alt
        })
    }
    return (
        <Fragment>
            <h1 className = "game-chooser-text">Choose your safe</h1>
            <div className = "img-positioner">
                {safesArray.map((safe, index) => (
                    <div key = {index} className= "img-holder">
                        <img key = {index} width = "400px" height = "400px" src = {require(`../images/safes/safe_${index+ 1}.jpg`)} alt = {`safe number ${index + 1}`} onClick = {e => goNext(e)}/>
                    </div>
                ))}
            </div>
            
        </Fragment>
    )
}
SafeChooser.propTypes = {
    addSafe: PropTypes.func.isRequired
}
export default connect(null, {addSafe})(SafeChooser);