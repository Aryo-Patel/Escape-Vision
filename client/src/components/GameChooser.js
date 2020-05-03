import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const GameChooser = props => {
    return (
        <Fragment>
            <a href = "https://www.wisc-online.com/gamebuilder">Wisco Game Builder</a>
            <br></br>
            <Link to = "/lock-chooser">Next</Link>
        </Fragment>
    )
}

export default GameChooser;