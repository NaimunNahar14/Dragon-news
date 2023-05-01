import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-secondary" className='mb-2'> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-success"> <FaGithub/>  Login With github</Button>
            <div className='mt-2'>
                <h4>Find us on</h4>
                <ListGroup as="ul">
                    <ListGroup.Item as="li">
                        <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
                    <ListGroup.Item as="li"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item as="li"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;