import React from 'react';
import { Link } from 'react-router-dom';
import fische from '../images/fische.png';
import DropdownMenu from '../dropdown/menu';

type Props = {
    playButtonHandler: () => void;
}

function Header(props:Props) {

    return (
        <div className="header-container">
            <div className="placeholder">
                <Link to="https://www.neuefische.de" target="_blank">
                    <img className="neuefischeHeader" src={fische} alt="Gräte" />
                </Link>
                <Link to="/">
                    <h1 className="Dashboard">Memory Crossover</h1>
                </Link>
            </div>

            <div className="buttons-container">
                <DropdownMenu updateCharacter={() => {}} />
                <Link to="/highscorelist">
                    <button className="costume-button">Highscore </button>
                </Link>
                <Link to="/play">
                    <button className="costume-button" onClick={props.playButtonHandler}> Mixed </button>
                </Link>
                <Link to="/playrm">
                    <button className="costume-button" onClick={props.playButtonHandler}> RM </button>
                </Link>
                <Link to="/playgot">
                    <button className="costume-button" onClick={props.playButtonHandler}> GOT </button>
                </Link>
                <Link to="/">
                    <button className="costume-button"> Home </button>
                </Link>

            </div>
        </div>
    );
}

export default Header;
