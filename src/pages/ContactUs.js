import React ,{useState} from "react";
import { Form ,Button, Container } from "react-bootstrap";

const ContactUs = ()=>{
    const userInfoObj = {name:"" , email:"" ,phone:""}
    const [userInfo ,setUserInfo] = useState(userInfoObj);
    const changeHandler = (event)=>{
        const {name ,value}= event.target;
        console.log(name ,value)
        setUserInfo({...userInfo , [name]:value})
    }

    const submitClickHandler = (event)=>{
        event.preventDefault();
        fetch("https://movie-9cc84-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",{
            method:"POST",
            body:JSON.stringify(userInfo)
        }).then(()=>{
            setUserInfo(userInfoObj)
        }).catch((err)=>{
            console.log(err)
        })
    }


    return (
        <Container style={{paddingTop:"20vh"}} className="d-flex justify-content-center">
            <Form className="m-5" style={{width:"30vw"}}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={userInfo.name} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={userInfo.email} onChange={changeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="number" name="phone" value={userInfo.phone} onChange={changeHandler}/>
                </Form.Group>
            <Button onClick={submitClickHandler}>Submit</Button>
            </Form>
        </Container>
    )
}

export default ContactUs;