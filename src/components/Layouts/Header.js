import React from "react";
import Navbar from "./Navbar";

const Header = ()=>{
    return (<header style={{width:'100vw'}}>
        <Navbar/>
        <h2 style={{width:'100vw',height:'14vh',margin:'1.5px',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'pink'}}>The Generics</h2>
    </header>)
}

export default Header;