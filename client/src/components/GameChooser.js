import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

//bringing in the css
import "../CSS/gameChooser/gameChooser.css";
const GameChooser = props => {
    return (
        <Fragment>
            <h1 className = "game-chooser-text">Create a custom game that will be linked to when a user plays your game</h1>
            <div className = "img-positioner">

                <div className = "img-holder">
                    <img src = {require('../images/game chooser/wisco-game-chooser.PNG')} alt= "wisco game chooser" />
                    <a href = "https://www.wisc-online.com/gamebuilder">Wisco Game Builder</a>
                </div>

            </div>
            <br></br>
            <div className = "game-chooser-next">
                <i className="far fa-arrow-alt-circle-right"></i>
                <i className="fab fa-500px"></i>
                <Link className = "game-chooser-link" to = "/lock-chooser">Next</Link>
            </div>

        </Fragment>
    )
}

export default GameChooser;