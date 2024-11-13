import PropTypes from "prop-types";

const Child = ({ name = "Mathan", email, city, callFromChild }) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Email: {email} </div>
      <div>City: {city}</div>

      <button onClick={callFromChild}> Call Parent Function</button>
    </div>
  );
};

Child.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  callFromChild: PropTypes.func,
};

Child.defaultProps = {
  email: "johndoe@example.com",
  city: "New York",
};
export default Child;
