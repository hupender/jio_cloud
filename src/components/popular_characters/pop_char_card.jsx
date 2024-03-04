import "./pop_char_card.css";
export default function Charcard({background,image,icon}) {
    return <div style={{backgroundImage: `url(${background})`}} className="char-card-container">
        <img src={icon} alt="icon" />
        <img src={image} alt="photu" />
    </div>
}