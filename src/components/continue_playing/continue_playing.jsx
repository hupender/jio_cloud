import "./continue_playing.css"
import cont_list from "./continue_playing_list"
export default function ContinuePlaying() {
    return <div className="continue-container">
        <h2>Continue Playing</h2>
        <div className="cont-container">
            {cont_list.map((ele,ind)=> <img key={ind} src={ele} alt="" /> )}
        </div>
    </div>
}