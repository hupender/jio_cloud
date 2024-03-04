import Sidebar from "./sidebar/sidebar";
import HomePage from "./home_page/home_page";
import ExploreGaming from "./explore_games/explore_games";
import NewRelease from "./new_release/new_release";
import ContinuePlaying from "./continue_playing/continue_playing";
import Recommended from "./recommended/recommended";
import Upgrade from "./upgrade/upgrade";
import TopGames from "./top_instant_game/top_games";
import PopularCharacters from "./popular_characters/popular_characters";
import Top2022 from "./top_2022/top_2022";
import "./app.css";
export default function Home() {
    return <div>
        <Sidebar />
        <div className="content">
            <HomePage />
            <ExploreGaming />
            <NewRelease />
            <TopGames />
            <Upgrade />
            <ContinuePlaying />
            <Recommended />
            <PopularCharacters />
            <Top2022 />
        </div>
    </div>
}