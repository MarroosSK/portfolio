import PropTypes from "prop-types";

const Title = ({ name }) => {
  return <h5 className={`display-5`}>{name}</h5>;
};

export default Title;

Title.propTypes = {
  name: PropTypes.string.isRequired,
};
