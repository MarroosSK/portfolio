import { Button, Card, Col, Row } from "react-bootstrap";
import { myProjects } from "../../helpers/data";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./ProjectGallery.css"
import {motion, useInView, useAnimation} from "framer-motion"

const ProjectGallery = () => {
    const targetRef = useRef()
    const  isInView = useInView(targetRef, {treshold: 0.2})
    const animation = useAnimation()
    const [allProjects, setAllProjects] = useState(myProjects)

    const handleFilter = (word) =>{
        if(word === "all"){
            setAllProjects(myProjects)
        } else{
            let filteredStuff = myProjects.filter((project) => project.technologies === word)
            setAllProjects(filteredStuff)
        }
    }

    useEffect(() =>{
      if(isInView){
        animation.start({
          x: 0,
          transition: {type: "spring", duration: 1, bounce: 0.3}
        })
      }
    }, [isInView, animation])

  return (
    <Row
    
        ref={targetRef}
    >
    <div 
      className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3"
    >
        <h5 className="display-5 fs-1">Projects</h5>
            <div className="d-flex flex-column flex-sm-row gap-2">
                <Button variant="outline-dark" className='btn_size' onClick={() => handleFilter("all")}>All</Button>
                <Button variant="outline-dark" className='btn_size' onClick={() => handleFilter("Bootstrap")}>Bootstrap</Button>
                <Button variant="outline-dark" className='btn_size' onClick={() => handleFilter("Material-UI")}>Material-UI</Button>
            </div>
    </div>
    <motion.div
        className="d-flex flex-row flex-wrap  mb-5"
        initial={{x: "-100vw"}}
        animate={animation}
    >
      {allProjects.map((project) => (
        <Col 
        xs={12} sm={6} md={4}  key={project.id} className="mt-3">
          <Card style={{ height: "100%", border: "none", overflow: "hidden"  }} className="custom_card">
            <Link to={project.url} target="_blank">
              <Card.Img variant="top" src={project.img} style={{ height: "200px" }} className="img_hover"/>
            </Link>
            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>{project.title}</Card.Title>
              <Card.Text style={{ fontSize: "12px" }}>{project.info}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href={project.source} target="_blank" className="source_code">Source Code</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </motion.div>
    </Row>
  );
};

export default ProjectGallery;