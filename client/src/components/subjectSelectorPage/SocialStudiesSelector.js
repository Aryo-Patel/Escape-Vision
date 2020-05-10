import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';


//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; //using it for redux purposes so im putting it as a redux import
import {addSubjectSelection} from '../../actions/userSelections.js';


/*This is the demo of the social studies prototype for a lesson. The teacher can select one of three lessons
to teach when they click on the subject. This will be changed later when we have a database of features
so that the teacher can use a search bar to find exactly what subjects they want to add */

const SocialStudiesSelector = ({addSubjectSelection}) =>{
    const subjects = ['American Revolutionary War', 'American Civil War', 'Congress', 'Presidential Elections'];
    let id = 0;
    const [displayOn, toggleDisplay] = useState(false);
    return (
        <div className = "subject-selector-container">
            <div className = "subject-selector-text" onClick = {e => {
                toggleDisplay(!displayOn);
                e.target.classList.toggle('remove-bottom-borders');
                }}>                
                <span >Social Studies</span>
            </div>
            {displayOn &&
            <Fragment>
                <ul className = "subject-selector-ul">
                    {subjects.map(subject =>(
                        <p key = {id++} className = "subject-selector-li">
                            <Link onClick = {e  => addSubjectSelection("social studies", e.target.textContent)} className ="text" to = "/builder">{subject}</Link>
                        </p>
                    ))}
                </ul>
            </Fragment>}
        </div>
    )
}

SocialStudiesSelector.propTypes = {
    addSubjectSelection : PropTypes.func.isRequired
}


export default connect(null, {addSubjectSelection})(SocialStudiesSelector);