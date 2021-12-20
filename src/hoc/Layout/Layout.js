import React, {Component} from "react";
import Toolbar from "../../components/toolbar/toolbar";
import Profile from "../../components/profile/profile";
import Footer from "../../components/footer/footer";
import Contact from "../../components/contact/contact";


class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <Profile/>
            </div>
        )
    }
}

export default Layout;
