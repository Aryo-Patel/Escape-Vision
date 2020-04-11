import React from 'react';
import MathSelector from './MathSelector';
import ScienceSelector from './ScienceSelector';
import LanguageArtsSelector from './LanguageArtsSelector';
import SocialStudiesSelector from './SocialStudiesSelector';
//CSS import
import '../../CSS/subjectSelector/subjectSelector.css';


/* This will display all the subjects that the teacher can choose from.
From the dropdown menu, they can then chose which of the lessons in the subject they
want to teach */
const AllSelectors = () =>{
    return(
        <div className = 'all-subjects-container'>
            <div className = 'all-subjects-header'>
                <h1>Select what subject you would like to create a lesson for</h1>
            </div>
            <div className = 'subjects-flex-container'>
                <MathSelector />
                <ScienceSelector />
                <LanguageArtsSelector />
                <SocialStudiesSelector />
            </div>
            
        </div>
    );
}

export default AllSelectors;