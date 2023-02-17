import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
const img = require('../img/2.jpg')


const About = () => {

    const [user, setUser] = useState([])
    const [value, setValue] = useState("")
    
    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(data=>{
            setUser(data.data)
        })
    }
    // console.log(value);
    // console.log(user);
    
    
    useEffect(()=>{
        getData()
    }, [])
    
        return (
            <>
                <Container>
                    <Row className='justify-content-center mt-5'>
                        
                        <Form.Control placeholder="Search Names" onChange={(e)=> setValue(e.target.value)}/>
    
                        {user.filter((res)=>{
                            //   console.log(res.name);
                        return res.name.toLocaleLowerCase() === "" ? value : res.name.toLocaleLowerCase().includes(value)
                        }).map((data)=>{
                            return(
                            <>
                            <Col xs={3}>
                                <Card >
                                     <Card.Img variant="top" src={img} />
                                    <Card.Body>
                                        <Card.Title>
                                             {data.name}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </>
                            )
                        })}
                       
                        
                    </Row>
                </Container>
            </>
        )
    }
    
    export default About