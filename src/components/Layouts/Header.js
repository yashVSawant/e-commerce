import React from "react";
import {Container, Navbar ,Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartButton from "../Cart/CartButton";
import "../../styles/Header.css"

const Header = (props)=>{
    return (<header className="headers">
        <Navbar bg="dark" variant="dark" style={{height:"15vh" }}>
            <Container>
                <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav className="me-auto justify-content-around" style={{width:"20vw"}}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Store</NavLink>
                    <NavLink to="/about">About</NavLink>
                </Nav>
                <CartButton onClick={props.onCartClick}/>
            </Container>
        </Navbar>
    </header>)
}

export default Header;