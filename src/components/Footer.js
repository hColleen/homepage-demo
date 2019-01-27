import React, { Component } from 'react';
import { Link } from "react-router";

import React, { Component } from 'react'
import Contact from './Contact';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="contact">
                    <Link id = "contactButton" className="footerButton" to ="/contact">Contact</Link>
                        Contact
                    </div>
                    <footer>hColleen Designs, 2019</footer>
                </div>
            </div>
        )
    }
}