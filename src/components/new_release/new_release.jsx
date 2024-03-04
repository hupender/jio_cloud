import "./new_release.css"
import NewReleaseList from "./new_release_list"
// import ReleaseCard from "./new_release_card"
export default function NewRelease() {
    return <div className="new-release-container">
        <h2>New release</h2>
        <div className="game-container">
            {NewReleaseList.map((release,ind)=> <img key={ind} src={release} alt="" /> )}
        </div>
    </div>
}