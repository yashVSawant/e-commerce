import React from "react";

const Navbar = ()=>{
    return (<nav style={{display:'flex',backgroundColor:'yellow'}}>
        <ul style={{width:'93vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <li style={{margin:'20px'}}>Home</li>
            <li style={{margin:'20px'}}>Store</li>
            <li style={{margin:'20px'}}>About</li>
        </ul>
        <div style={{width:'5vw',alignItems:'center'}}>
            <button>Cart</button>
        </div>
    </nav>)
}

export default Navbar;