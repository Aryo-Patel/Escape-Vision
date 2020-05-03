import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';


const LockChooser = props => {
    let history = useHistory();

    function moveNext(e) {
        console.log('clicked');
        history.push({
            pathname: '/safe-chooser',
            state: e.target.alt
        });
    }

    return(
        <Fragment>
            <h1>Select your lock</h1>
            <img src = {require('../images/masterLockPurple.jpg')} width = "200px" height = "200px" alt = "purple lock" onClick = {e => moveNext(e)}/>
            <img src = {require('../images/masterLockBrass.jpg')} width = "200px" height = "200px" alt = "brass lock" onClick = {e => moveNext(e)}/>
        </Fragment>
    )
}

export default LockChooser;