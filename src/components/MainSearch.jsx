import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import JobResult from "./JobResult";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../actions/index";
import { useState } from "react";

const MainSearch = () => {
    const [query, setQuery] = useState("");

    const dispatch = useDispatch();
    const jobs = useSelector((s) => s.jobs);

    const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(fetchJobs(baseEndpoint, query));
    };

    return (
        <Container>
            <Row>
                <Col xs={10} className='mx-auto my-3'>
                    <Link to="/" style={{ textAlign: 'center', color: "rgb(40, 44, 52)", textDecoration: 'none' }}><h1>Jobs Search Engine</h1></Link>
                    <Link to="/favourites" className="btn btn-info" style={{ float: 'right' }}>Favourites</Link>
                </Col>
                <Col xs={10} className='mx-auto'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search for job 🔍" />
                    </Form>
                </Col>
                <Col xs={10} className='mx-auto'>
                    <Row
                        className="mx-0 mt-3 pr-3 pt-3 pb-3 pl-0"
                        style={{ border: '1px solid #00000033', borderRadius: 4, backgroundColor: 'white', color: "rgb(40, 44, 52)" }}
                    >
                        <Col xs={2}>Add to fav</Col>
                        <Col xs={4}>Company</Col>
                        <Col xs={4}>Job</Col>
                    </Row>
                </Col>
                <Col xs={10} className='mx-auto mb-5'>
                    {
                        jobs.elements.map(jobData => <JobResult key={uniqid()} data={jobData} />)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default MainSearch;