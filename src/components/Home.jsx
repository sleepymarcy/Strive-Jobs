import { Navbar, Container, Row, Col, Form } from 'react-bootstrap'
import React from 'react'

class Home extends React.Component {
    state = {
        searchQuery: ''
    }
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Jobs Search Engine</Navbar.Brand>
                </Navbar>
                <br></br>
                <Container>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Search for your dream job</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        value={this.state.searchQuery}
                                        onChange={e => this.setState({ searchQuery: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                </Container>
            </>
        )
    }
}

export default Home