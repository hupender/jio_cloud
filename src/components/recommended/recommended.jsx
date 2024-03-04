import "./recommended.css"
import recomm_list from "./recommended_list"
export default function Recommended() {
    return <div className="recommended-container">
        <h2>Recommended for you</h2>
        <p>Based on recent activity</p>
        <div className="recomm-container">
            {recomm_list.map((ele,ind)=> <img key={ind} src={ele} alt="" /> )}
        </div>
    </div>
}