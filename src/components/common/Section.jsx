import propTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: ReactPropTypes.string.isRequired,
  children: ReactPropTypes.node.isRequired,
};
