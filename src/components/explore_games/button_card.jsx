import Icon from "../icon/icon";
import "./button_card.css";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// var response;
function ButtonCard({ d, name }) {
  const navigate = useNavigate();
  const clickhandler = async (event) => {
    // const name = event.target.closest("button").name;
    const name = event.currentTarget.name;
    console.dir(event.currentTarget);
    if (name === "My List") {

      // try {
      //     const url="https://api.restful-api.dev/objects";
      //     const res=await axios.get(url);
      //     response=res.data;
      // } catch(error) {
      //     console.error(error);
      // }
      navigate("/my_list");
    }
  };

  return (
    <button className="button-card" name={name} onClick={clickhandler}>
      <span>
        <Icon d={d} fill="#14B866" />
      </span>{" "}
      <span className="name-class">{name}</span>
    </button>
  );
}
// export {response};
export default ButtonCard;
