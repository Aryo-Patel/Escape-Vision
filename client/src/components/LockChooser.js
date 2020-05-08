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

export default LockChooser;