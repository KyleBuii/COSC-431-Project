import { Component } from "react";
import "./navigation.css";

class Navigation extends Component{
    render(){
        return(
            <div className="body">
                <div className="hero">
                    <nav>
                        <h2 className="logo">The Harmonic<span>Vault</span></h2>
                        <ul>
                            <li><a href="#/home"
                                className="a">Home</a></li>
                            <li><a href="#/create"
                                className="a">Create</a></li>
                            <li><a href="#/browse"
                                className="a">Browse</a></li>
                            <li><a href="#/learn"
                                className="a">Learn</a></li>
                        </ul>
                        <button type="button">Sign In</button>
                    </nav>
                </div>
            </div>
        );
    };
};

export default Navigation;