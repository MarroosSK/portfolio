import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image, Row } from "react-bootstrap";
import {myProjects} from "../../helpers/data"
import { Link } from "react-router-dom";
import "./ProjectGallery.css"

const ProjectGallerySlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    
      return (
        <Row className="justify-content-center">
          <div  style={{width: "100vw", height:"100vh"}} >
          <Carousel
            responsive={responsive}
            arrows={true}
            autoPlay={true}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {
                myProjects.map((project) => (
                    <Link to={project.url} key={project.id} target="_blank" className="text-decoration-none text-dark">
                        <p className="mt-3" style={{color: "#2bffaa"}}>{project.title}</p>
                        <Image src={project.img} style={{width: "100%", height: "350px"}} className="img2_hover" />
                    </Link>
                ))
            }
          </Carousel>
          </div>
        </Row>
      );
    };

export default ProjectGallerySlider