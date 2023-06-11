import { Button, Col, Image, Row, Table } from "react-bootstrap";
import { personal, skillSet } from "../../helpers/data";
import anonym from "../../assets/Anonym.jpg"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"


const containerVariants = {
    hidden: {
        opacity: 0,
        x: "-100vw"
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120
        }
    }
}

const AboutMe = () => {
  return (
    <motion.div
        variants={containerVariants} 
        initial="hidden"
        animate="visible"
    >
        <Row className="d-flex justify-content-center align-items-center">
        <Col className="d-flex flex-column justify-content-center">
        {/* foto+meno */}
        <div className="align-self-center" >
        <Image rounded src={anonym} className="img-fluid"  style={{height: "385px"}}/>
        <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column">
            <h6 className="mt-2">{personal.name}</h6>
            <p style={{fontSize: "12px"}}>React Developer</p>
        </div>
            <Button variant="outline-dark" href="/files/myfile.pdf" target="_blank" className='btn_size'>Check CV</Button>

        </div>
        </div>
        <hr style={{color: "#2bffaa"}}/>
        {/* udaje */}
        <div>
            <p className="display-2" style={{fontSize: "12px", margin: "35px", lineHeight: "32px"}}>{personal.info}</p>
            <hr style={{color: "#2bffaa"}}/>
            <Row className="d-flex justify-content-between">
            <Col xs={12} sm={12} md={6}>
            <Table className="table table-responsive-md w-100" style={{margin: "35px"}}>
                    <tbody>
                    <tr>
                        <td className="fw-bold border-0" style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>Age:</td>
                        <td className="display-2"  style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>{personal.age}</td>
                    </tr>
                    <tr>
                        <td className="fw-bold border-0" style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>Address:</td>
                        <td className="display-2"  style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>{personal.address}{", "}{personal.city}{", "}{personal.country}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
            <Col xs={12} sm={12} md={6}>
            <Table className="table table-responsive-md w-100"  style={{margin: "35px"}}>
                    <tbody>
                    <tr>
                        <td className="fw-bold border-0" style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>Phone:</td>
                        <td className="display-2"  style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>{personal.phone}</td>
                    </tr>
                    <tr>
                        <td className="fw-bold border-0" style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>Email:</td>
                        <td className="display-2" style={{fontSize: "12px", backgroundColor: "#2bffaa"}}>{personal.email}</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
            </Row>
        </div>
        <hr style={{color: "#2bffaa"}}/>
        {/* Info */}
        <div style={{margin: "35px", paddingBottom: "20px"}}> 
            <Row className="d-flex justify-content-between">
            <h6>Knowledge</h6>
            <Col className='d-flex flex-wrap gap-2 gap-md-5'>
                {
                    skillSet.map((skill) =>
                        (
                            <div key={skill.id}>
                            <Link to={skill.url} className='custom_icon'>{skill.icon}</Link> 
                            </div>
                        )
                    )
                }
            </Col>
            </Row>
        </div>
        </Col>
    </Row>
    </motion.div>
  )
}

export default AboutMe