import "./top_2022.css";
import top2022_list from "./top_2022_list";
import Top2022card from "./top_2022_card";
export default function Top2022() {
    return <div className="top-2022-container">
        <h2>Top 10 games of 2022</h2>
        <p>Play most popular games of this year!</p>
        <div className="top-2022-games">
            {top2022_list.map((ele,ind)=> <Top2022card key={ind} image={ele} />)}
        </div>
    </div>
}