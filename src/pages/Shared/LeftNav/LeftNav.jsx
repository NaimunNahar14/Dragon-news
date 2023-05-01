import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png';
import second from '../../../assets/2.png';
import third from '../../../assets/3.png';

const LeftNav = () => {
    const [category, setCategory] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategory(data))
        .catch(error => console.error(error))

    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className='p-4'>
            {
                    category.map(cat => <p
                        key={cat.id}
                >
                    <Link to={`/category/${cat.id}`} className='text-decoration-none text-black'>{cat.name}</Link>

                </p>)
            }
            </div>
            <Row xs={1} md={1}  className="g-4 mt-2">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>
          
        </div>
    );
};

export default LeftNav;