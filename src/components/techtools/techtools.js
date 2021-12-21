import React, { Component } from 'react';
import classes from './techtools.module.css';
import django_icon from '../../assets/icons8-django-48.png';
import docker_icon from '../../assets/icons8-docker-48.png';
import python_icon from '../../assets/icons8-python-48.png';
import javascript_icon from '../../assets/icons8-javascript-48.png';
import react_icon from '../../assets/icons8-react-native-48.png';


class TechTools extends Component {
    render() {
        return (
            <div className={classes.tools}>
                <span className={classes.techUsed}>Tech I use</span>
                <div className={classes.tool}>
                    <img src={django_icon} alt="django-icon"/>
                    <img src={docker_icon} alt="docker-icon"/>
                    <img src={python_icon} alt="python-icon"/>
                </div>
                <div className={classes.tool}>
                    <img src={javascript_icon} alt="javascript-icon"/>
                    <img src={react_icon} alt="react-icon"/>
                </div>
            </div>
        )
    }
}

export default TechTools;
