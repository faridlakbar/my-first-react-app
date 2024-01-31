import propTypes from "prop-types";
import Button from "./Button.jsx";
import { useState } from "react";

export default function ProfileCard(props) {
  const [isLogin, setIsLogin] = useState(props.isLogin);
  const card = {
    padding: "15px",
    border: "3px solid black",
    borderRadius: "15px",
    width: "200px",
    background: "white",
    color: "black",
    display: "inline-block",
    margin: "15px",
  };
  const img = {
    width: "100%",
    borderRadius: "15px",
  };
  const buttonContainer = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div className="card" style={card}>
      <img style={img} src={props.img.source} alt={props.img.alt} />
      <h2>{props.name}</h2>
      <p>
        <b>Hobi :</b> {props.hobi}
      </p>
      <div style={buttonContainer}>
        <Button
          text={isLogin ? "logout" : "login"}
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        />
        <Button text="profile info" />
      </div>
    </div>
  );
}
// propTypes digunakan untuk bentuk object
ProfileCard.propTypes = {
  img: propTypes.shape({
    source: propTypes.string,
    alt: propTypes.string,
  }),
  name: propTypes.string,
  hobi: propTypes.string,
  login: propTypes.bool,
};

ProfileCard.defaultProps = {
  img: {
    source: "https://via.placeholder.com/150",
    alt: "user image profile",
  },
  name: "userName",
  hobi: "ini berisi Hobi dari user",
  login: false,
};
