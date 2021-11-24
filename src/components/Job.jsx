import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AiOutlineStar } from 'react-icons/ai'


const Job = ({ data }) => (
    <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4, backgroundColor: 'white'}}
    >
        <Col xs={2}><AiOutlineStar /></Col>
        <Col xs={4}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={4}>
            <a href={data.url} target='_blank' rel="noreferrer">{data.title}</a>
        </Col>
    </Row>
)

export default Job