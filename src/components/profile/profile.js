import React, { Component } from 'react';
import classes from './profile.module.css';
import profile from '../../assets/profile-pic.png';

class Profile extends  Component {
    render() {
        return (
            <div className={classes.Profile}>
                <img src={profile} alt="profile-pic"/>
                <p className={classes.title}>Hi, I am Dijon</p>
                <p className={classes.job}>A Software developer based in Cape Town South Africa</p>
            </div>
        )
    }
}

export default Profile;
