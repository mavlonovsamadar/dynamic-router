import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';

const Home = () => {

    const arr = ["Uzbekistan", "Tadjikistan", "Russia", "USA", "UK", "Turkey", "Japan", "China", "Malazia", "India", "Korean", "France"]
    
    const [value, setValue] = useState("")
    
        return (
            <>
                <Container>
                    <Row className='justify-content-center mt-5'>
                        <Col xs={6}>
                        <Form.Control placeholder="Search Countries" onChange={(e)=> setValue(e.target.value)}/>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {arr.filter((res)=>{
                                 return res.toLocaleLowerCase() === "" ? value : res.toLocaleLowerCase().includes(value)      
                                }).map((item, index)=>{
                                    return(
                                     <>
                                         <tr>
                                        <td>{index+1}</td>
                                        <td>{item}</td>
                                    </tr>
                                     </>   
                                    )
                                })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
    
    export default Home


// const Home = () => {

// const [user, setUser] = useState([])
// const [value, setValue] = useState("")

// const getData = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then(data=>{
//         setUser(data.data)
//     })
// }
// // console.log(value);
// // console.log(user);


// useEffect(()=>{
//     getData()
// }, [])

//     return (
//         <>
//             <Container>
//                 <Row className='justify-content-center mt-5'>
//                     <Col xs={4}>
//                     <Form.Control placeholder="Search Countries" onChange={(e)=> setValue(e.target.value)}/>

//                     {user.filter((res)=>{
//                         //   console.log(res.name);
//                     return res.name.toLocaleLowerCase() === "" ? value : res.name.toLocaleLowerCase().includes(value)
//                     }).map((data)=>{
//                         return(
//                         <>
//                             <Card style={{width: "150px" }}>
//                                  <Card.Img variant="top" src={img} style={{height: "140px", width: "120px" }}/>
//                                 <Card.Body>
//                                     <Card.Title>
//                                          {data.name}
//                                     </Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </>
//                         )
//                     })}
                   
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }

// export default Home
