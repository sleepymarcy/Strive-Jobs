import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { removeFromFav } from '../actions'
import { Link } from 'react-router-dom'

const mapDispatchToProps = (dispatch) => ({
    removeFromFav: (f) => { dispatch(removeFromFav(f)) }
})

class Favourites extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <Link to="/"><h1  style={{textAlign: 'center', color: "rgb(40, 44, 52)" }}>Jobs Search Engine</h1></Link>
                        <Link to="/favourites" className="btn btn-info" style={{float: 'right'}}>Favourites</Link>
                    </Col>
                    <Col xs={10} className='mx-auto my-3'>
                        <ListGroup>
                        {
                            this.props.favourites.map(f => (
                                <ListGroupItem>
                                    <StarFill color="pink" onClick={() => this.props.removeFromFav(f)} />
                                    <span className="ml-5" >{ f }</span>
                                </ListGroupItem>
                            ))
                            
                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(s => s, mapDispatchToProps)(Favourites)