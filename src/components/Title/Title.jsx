import PropTypes from "prop-types";

const Title = ({ name }) => {
  return <h5 className="text-center text-[32px] text-headingColor">{name}</h5>;
};

export default Title;

Title.propTypes = {
  name: PropTypes.string.isRequired,
};
