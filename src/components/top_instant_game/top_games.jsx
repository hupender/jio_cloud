import TopCard from "./top_game_card";
import "./top_games.css"
import top_list from "./top_games_list"

function TopGames() {
    return <div className="top-game-container">
        <h2>Top 10 in Instant Games</h2>
        <div className="list-container">
            {top_list.map((item,ind)=> <TopCard key={ind} image={item.image} header={item.header} />)}
        </div>
    </div>
}

export default TopGames;