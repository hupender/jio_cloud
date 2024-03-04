import "./popular_characters.css";
import Charcard from "./pop_char_card";
import characterList from "./popular_characters_list";
export default function PopularCharacters() {
    return <div className="popChar-container">
        <h2>Games based on Popular Characters</h2>
        <p>Play as your favourite Hero</p>
        <div className="popChar-games-container">
            {characterList.map((ele,ind)=> <Charcard key={ind} background={ele.background} image={ele.image} icon={ele.title} />)}
        </div>
    </div>
}