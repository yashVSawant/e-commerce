import React from "react";
import {Container, Navbar ,Nav } from "react-bootstrap";
import CartButton from "../Cart/CartButton";

const Header = ()=>{
    return (<header style={{width:'100vw',position: "fixed" ,zIndex: 1000}}>
        <Navbar bg="dark" variant="dark" style={{height:"15vh" }}>
            <Container>
                <Navbar.Brand href="/"><h1>The Generics</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/store">Store</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <CartButton/>
            </Container>
        </Navbar>
    </header>)
}

export default Header;