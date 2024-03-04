import "./explore_games.css"
import ButtonCard from "./button_card"
import Btn_list from "./btn_list"

export default function ExploreGaming() {
    return <div className="explore-games-container">
        <h2>Explore Gaming</h2>
        <div className="btn-container">
            {Btn_list.map((btn,index)=> {
                return <ButtonCard key={index} d={btn.d} name={btn.name} />
            })}
        </div>
    </div>
}
