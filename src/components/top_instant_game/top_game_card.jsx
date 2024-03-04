import "./top_game_card.css"
function TopCard({image,header}) {
    return <div className="top-card-conatiner">
        <img src={header} alt="" className="image_num" />
        <img src={image} alt="" className="image"/>
    </div>
}
export default TopCard;