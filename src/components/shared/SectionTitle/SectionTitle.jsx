import { PropTypes } from "prop-types";

const SectionTitle = ({ title }) => {
  return <h2 className="md:text-3xl text-2xl font-semibold mb-8">{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
