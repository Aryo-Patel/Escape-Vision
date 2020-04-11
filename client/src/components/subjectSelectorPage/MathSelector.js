import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';

/*This is the demo of the math prototype for a lesson. The teacher can select one of three lessons
to teach when they click on the subject. This will be changed later when we have a database of features
so that the teacher can use a search bar to find exactly what subjects they want to add */

const MathSelector = (props) =>{
    const subjects = ['Use Pythagorean Theorem to find perimeter and area', 'Find the perimeter of a triangle', 'Find the sin, cos, and tan of a triangle'];
    let id = 0;
    const [displayOn, toggleDisplay] = useState(false);
    return (
        <div className = "subject-selector-container">
            <span className = "subject-selector-text" onClick = {e => toggleDisplay(!displayOn)}>Math</span>
            {displayOn &&
            <Fragment>
                <ul className = "subject-selector-ul">
                    {subjects.map(subject =>(
                        <li key = {id++} className = "subject-selector-li">
                            <Link to = "/builder">{subject}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>}
        </div>
    )
}

export default MathSelector;