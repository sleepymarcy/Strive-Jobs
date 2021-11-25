import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import JobResult from './JobResult'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'

export default class MainSearch extends React.Component {

    state = {
        query: '',
        jobs: []
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(this.baseEndpoint + this.state.query + '&limit=20')

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        this.setState({ jobs: data })

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <Link to="/" style={{textAlign: 'center', color: "rgb(40, 44, 52)", textDecoration: 'none' }}><h1>Jobs Search Engine</h1></Link>
                        <Link to="/favourites" className="btn btn-info" style={{float: 'right'}}>Favourites</Link>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="Search for job 🔍" />
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
                            this.state.jobs.map(jobData => <JobResult key={uniqid()} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}