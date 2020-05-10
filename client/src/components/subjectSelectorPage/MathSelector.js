import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';


//redux imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; //using it for redux purposes so im putting it as a redux import
import {addSubjectSelection} from '../../actions/userSelections.js';

/*This is the demo of the math prototype for a lesson. The teacher can select one of three lessons
to teach when they click on the subject. This will be changed later when we have a database of features
so that the teacher can use a search bar to find exactly what subjects they want to add */

const MathSelector = ({addSubjectSelection}) =>{
    //temporary list of subjects prone to change in the future when we hook this up to a database or something
    const subjects = ['Use Pythagorean Theorem to find perimeter and area', 'Find the perimeter of a triangle', 'Find the sin, cos, and tan of a triangle'];
    
    //used to give each item a unique ID
    let id = 0;

    //a display toggle that will update the component when clicked
    const [displayOn, toggleDisplay] = useState(false);

    function callSubjectSelection(e){
        const category = "math";
        const courseName = e.target.textContent;
        
        addSubjectSelection(category, courseName);
    }
    return (
        <div className = "subject-selector-container">
            <div className = "subject-selector-text" onClick = {e => {
                toggleDisplay(!displayOn);
                e.target.classList.toggle('remove-bottom-borders');
                }}>
                <span >Math</span>
            </div>
            {displayOn &&
            <Fragment>
                <ul className = "subject-selector-ul">
                    {subjects.map(subject =>(
                        <p key = {id++} className = "subject-selector-li">
                            <Link onClick = {e => callSubjectSelection(e)} className = "text" to = "/builder">{subject}</Link>
                        </p>
                    ))}
                </ul>
            </Fragment>}
        </div>
    )
}

MathSelector.propTypes = {
    addSubjectSelection: PropTypes.func.isRequired
}

export default connect(null, {addSubjectSelection})(MathSelector);