import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
// import PropTypes from 'prop-types';


const SafeChooser = props =>  {
    console.log(props.location.state);
    const NUMBER_OF_SAFES = 2;
    let safesArray = new Array(NUMBER_OF_SAFES);
    for(let i = 0; i < safesArray.length; i++ ){
        safesArray[i] = "";
    }

    let history = useHistory();
    function goNext(e){
        
        history.push({
            pathname: '/choose-mirror',
            state: e.target.alt
        })
    }
    return (
        <Fragment>
            <h1>Choose your safe</h1>
            {safesArray.map((safe, index) => (
                <img key = {index} width = "200px" height = "200px" src = {require(`../images/safes/safe_${index+ 1}.jpg`)} alt = {`safe number ${index + 1}`} onClick = {e => goNext(e)}/>
            ))}
        </Fragment>
    )
}

export default SafeChooser;