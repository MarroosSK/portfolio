import { useContext } from 'react'
import { Col,  Row } from 'react-bootstrap'
import { personal } from '../../helpers/data'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/navbarContext'
const ContactBrief = () => {
    const {setActiveLink} = useContext(NavbarContext)
  return (
    <Row style={{width: "100vw", height: "100vh", backgroundColor: "#2bffaa"}} >
    <Col className='d-flex justify-content-center align-items-center'>
    <p className='display-6  fs-3'>You can catch me at <span className='fw-bold'>{personal.email}</span> or through <Link to="/contact" className='text-dark' onClick={() => setActiveLink("contact")}>here</Link>.</p>
    </Col>

</Row>
  )
}

export default ContactBrief