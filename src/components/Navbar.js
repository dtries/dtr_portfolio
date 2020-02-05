import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
    render () {
        return (
            <Navbar
                fixed="true"
                alignLinks="right"
                brand={
                <Link
                    to="/"
                    className="brand-logo waves-effect waves-light"
                >
                    <span className="brand">BRAND LOGO HERE</span>
                </Link>
                }
            >

                
                <NavItem
                    href="/"
                    className="home-nav 
                    waves-effect waves-light hoverable"
                    id="home-nav-item"
                >
                    Home
                </NavItem>

                <NavItem
                    href="/portfolio"
                    className="portfolio-nav 
                    waves-effect waves-light hoverable"
                    id="portfolio-nav-item"
                >
                    Portfolio
                </NavItem>

                <NavItem                    
                    href="/about"
                    className="about-nav 
                    waves-effect waves-light hoverable"
                    id="about-nav-item"
                >
                    About 
                </NavItem>

            </Navbar>
                
        );
    }
}

export default NavBar;