import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';

//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLock} from '../actions/userSelections';

const LockChooser = ({addLock}) => {
    let history = useHistory();

    function moveNext(e) {
        
        addLock(e.target.src);

        history.push({
            pathname: '/safe-chooser',
            state: e.target.alt
        });
    }

    return(
        <Fragment>
            <h1 className ="game-chooser-text">Select your lock</h1>
            <div className = "img-positioner">
                <div className= "img-holder">
                    <img src = {require('../images/masterLockPurple.jpg')} alt = "purple lock" onClick = {e => moveNext(e)}/>
                </div>
                <div className= "img-holder">
                    <img src = {require('../images/masterLockBrass.jpg')}  alt = "brass lock" onClick = {e => moveNext(e)}/>
                </div>
            </div>

        </Fragment>
    )
}
LockChooser.propTypes = {
    addLock: PropTypes.func.isRequired
}

export default connect(null, {addLock})(LockChooser);