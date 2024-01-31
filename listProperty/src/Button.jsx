import propTypes from "prop-types";

export default function Button(props) {
  const styles = {
    padding: "5px 15px",
  };
  return (
    <button onClick={props.onClick} style={styles}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: propTypes.string,
};

Button.defaultProps = {
  text: "ini button",
};
