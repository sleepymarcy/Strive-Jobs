import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../actions/index";
import { Link } from 'react-router-dom'

const Favourites = () => {
    const dispatch = useDispatch();
    const favourites = useSelector((s) => s.favourites);

    return (
        <Container>
            <Row>
                <Col xs={10} className='mx-auto my-3'>
                    <Link to="/" style={{ textAlign: 'center', color: "rgb(40, 44, 52)", textDecoration: 'none' }}><h1>Jobs Search Engine</h1></Link>
                    <Link to="/favourites" className="btn btn-info" style={{ float: 'right' }}>Favourites</Link>
                </Col>
                <Col xs={10} className='mx-auto my-3'>
                    <ListGroup>
                        {
                            favourites.elements.map((f) => (
                                <ListGroupItem>
                                    <StarFill color="pink" onClick={() => dispatch(removeFromFav(f))} />
                                    <span className="ml-5" >{f}</span>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Favourites;