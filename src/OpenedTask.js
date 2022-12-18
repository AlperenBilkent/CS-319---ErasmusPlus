import './Applications.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import EditProfile from './EditProfile';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import NavItem from 'react-bootstrap/NavItem';
import Tab from 'react-bootstrap/Tab';
import {Bank2, Clipboard2Fill, FileEarmarkBreakFill} from 'react-bootstrap-icons/dist';
import { Table } from 'react-bootstrap';


function OpenedTask() {
    const pageTitle = "Opened Task";
  return (
    <div>   
        <Container fluid className = 'NewApplCont'>
            <Row>
                <Form.Text style={{padding: "1.2vh", fontSize: "25px"}}>
                    <Clipboard2Fill size={30} className = 'applIcon'/>
                    New Application
                </Form.Text>
            </Row>
            <Row style = {{marginLeft: "1.5vw", fontSize: "18px"}}>
                <Form>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Application:</Form.Label></Col>
                        <Col><Form.Control disabled type = "email" placeholder = "Current Semester Date" style = {{maxWidth: "58.5vw", minWidth: "58.5vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>First Name:</Form.Label></Col>
                        <Col><Form.Control disabled type = "email" placeholder = "First Name" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Department:</Form.Label></Col>
                        <Col><Form.Control disabled type = "email" placeholder = "Department" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Last Name:</Form.Label></Col>
                        <Col><Form.Control disabled type = "email" placeholder = "Last Name" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>CGPA:</Form.Label></Col>
                        <Col><Form.Control disabled type = "email" placeholder = "CGPA" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Host University:</Form.Label></Col>
                        <Col><Form.Control disabled type = "email" placeholder = "Host University" style = {{maxWidth: "25vw", minWidth: "25vw"}}/></Col>
                        <Col style={{paddingTop: "0.5vh"}}><Form.Label>Host Department:</Form.Label></Col>
                        <Col><Form.Control disabled type = "email" placeholder = "Host Department" style = {{maxWidth: "25'vw", minWidth: "25vw"}}/></Col>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Form.Text style = {{paddingLeft: "20vw", paddingRight: "20vw", color: "black"}}>Please upload the documents you downloaded and filled from the Documents section. </Form.Text>
                    </Form.Group>
                    <Form.Group as = {Row} className = "standardTxtInput">
                        <Col><Form.Label>Documents:</Form.Label></Col>
                        <Col><Form.Control disabled type="file" multiple style = {{minWidth: "58.5vw", maxWidth: "58.5vw"}}/></Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row style={{maxWidth: "75vw", minWidth: "75vw"}}>
                <Col style={{paddingLeft: "3.4vw"}}><Button style={{paddingLeft: "1vw", paddingRight: "1vw", paddingBottom: "0.8vh"}}>Return</Button></Col>
                <Col style={{paddingLeft: "46.5vw"}}>
                    <Button style={{paddingLeft: "1vw", paddingRight: "1vw", paddingBottom: "0.8vh", backgroundColor: "red", marginLeft: "0vw"}}>Reject</Button>
                    <Button style={{paddingLeft: "0.5vw", paddingRight: "0.5vw", paddingBottom: "0.8vh", backgroundColor: "green", marginLeft: "1vw"}}>Approve</Button>
                </Col>
                <Col style={{paddingLeft: "0vw"}}></Col>
            </Row>               
        </Container>
    </div> 
  );
}

export default OpenedTask;