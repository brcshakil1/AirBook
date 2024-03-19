import PropTypes from "prop-types";

const ComContainer = ({ children }) => {
  return <div className="max-w-[1350px] mx-auto px-4">{children}</div>;
};

ComContainer.propTypes = {
  children: PropTypes.node,
};

export default ComContainer;
