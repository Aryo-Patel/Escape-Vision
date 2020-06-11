import React, { Fragment } from 'react';

import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGradeSelection } from '../actions/userSelections';
const SelectGradeLevel = ({ addGradeSelection }) => {
    let history = useHistory();
    function addToRedux(e) {
        let text = e.target.textContent;
        addGradeSelection(text);
        history.push({
            pathname: '/select-subject'
        });
    }
    $(document).ready(function () {
        $(this).find('.top-ul');
        $(this).find('.top-ul').find('li').find('ul').find('li').click(function (e) {
            addToRedux(e);
        });
    });
    return (
        <Fragment>
            <ul style={{ 'position': 'absolute', 'top': '20%' }}>
                Todo:
                <li><strong>Need more time to finish it</strong></li>
                <li>Figure out how to add math symbols to the input in builder page</li>
                <li>LOGIN functionality (and the rest of the backend</li>
                <li>general UI clean up on subject selector page</li>
                <li>Favicons are not working? (builder page)</li>

                <li><strong>Requires additional input </strong></li>
                <li>Display Escape University (do you want it as a background or is this part of the icon?)</li>
                <li>Add Icon (need the icon)</li>
                <li>Add search to subject selector (need database/list of terms)</li>
                <li>Add in the correct images (need a folder or zip file with all those images)</li>

            </ul>
            <h1 className="game-chooser-text">Select your grade level</h1>
            <div className="grade-selector">
                <ul className="top-ul">
                    {/*<li>
                        <span>K-4</span>
                        <ul>
                            <li>
                                <span>Kindergarten</span>
                            </li>
                            <li>
                                <span>1st Grade</span>
                            </li>
                            <li>
                                <span>2nd Grade</span>
                            </li>
                            <li>
                                <span>3rd Grade</span>
                            </li>
                            <li><span>4th Grade</span></li>
                        </ul>
                    </li>*/}
                    <li>
                        <span>6-8</span>
                        <ul>

                            {/* <li>
                                <span>5th Grade</span>
                            </li> */}
                            <li>
                                <span>6th Grade</span>
                            </li>
                            <li>
                                <span>7th Grade</span>
                            </li>
                            <li>
                                <span>8th Grade</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>High Schooler</span>
                        <ul>
                            <li>
                                <span>9th grade</span>
                            </li>
                            <li>
                                <span>10th Grade</span>
                            </li>
                            <li>
                                <span>11th Grade</span>
                            </li>
                            <li>
                                <span>12th Grade</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span onClick={e => addToRedux(e)}>Undergrad</span>
                    </li>
                </ul>
            </div>

        </Fragment>
    )
}

export default connect(null, { addGradeSelection })(SelectGradeLevel);