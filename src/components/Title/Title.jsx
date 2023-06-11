import { useContext } from 'react'
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../context/navbarContext'

const Title = ({name, word, titleSide}) => {
    const {setActiveLink} = useContext(NavbarContext)
  return (
    <div className='w-100 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center'>
      <h5 className={`display-5 ${titleSide === "right" && "order-1"}`} style={{ borderBottom: '#2bffaa' }}>{name}</h5>
      <Button variant="outline-dark" className='btn_size m-2 m-sm-0' onClick={() => setActiveLink(word)}>
                    <Link
                        to={`/${word}`}
                        className={`text-dark ${titleSide === "left" && "order-1"}`}
                        style={{textDecoration: "none"}}
                    >
                        more...
                    </Link>
                    </Button>
    </div>
  )
}

export default Title

Title.propTypes = {
    name: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    titleSide: PropTypes.string.isRequired,
    
}