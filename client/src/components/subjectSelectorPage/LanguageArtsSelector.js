import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';

/*This is the demo of the language arts prototype for a lesson. The teacher can select one of three lessons
to teach when they click on the subject. This will be changed later when we have a database of features
so that the teacher can use a search bar to find exactly what subjects they want to add */

const LanguageArtsSelector = (props) =>{
    const subjects = ['Critical Reading', 'Writing', 'Poetry', 'Presentational Speaking'];
    let id = 0;
    const [displayOn, toggleDisplay] = useState(false);
    return (
        <div className = "subject-selector-container">
            {/*Toggles the bottom borders of the components so that it looks flush */}
            <div className = "subject-selector-text" onClick = {e => {
                toggleDisplay(!displayOn);
                e.target.classList.toggle('remove-bottom-borders');
                }}>
                <span>Language Arts</span>
            </div>
            {displayOn &&
            <Fragment>
                <ul className = "subject-selector-ul">
                    {subjects.map(subject =>(
                        <p key = {id++} className = "subject-selector-li">
                            <Link className = "text" to = "/builder">{subject}</Link>
                        </p>
                    ))}
                </ul>
            </Fragment>}
        </div>
    )
}

export default LanguageArtsSelector;