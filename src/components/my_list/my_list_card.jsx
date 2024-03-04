import "./my_list_card.css";
function MyListCard({obj}) {
    console.log("card");
    return <div className="list-card-container">
        <h2>{obj.name}</h2>
    </div>
}
export default MyListCard;