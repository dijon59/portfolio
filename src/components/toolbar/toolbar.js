import React, { Component } from 'react';
import classes from './toolbar.module.css';

class Toolbar extends Component {
    render() {
        return (
            <div className={classes.ToolBar}>
                <div className={classes.name}>Dijon Mboko</div>
                <div className={classes.contact}>Contact</div>
            </div>
        )
    }
}

export default Toolbar;
