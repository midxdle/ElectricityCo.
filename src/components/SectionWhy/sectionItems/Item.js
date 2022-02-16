import "./Item.css"

const Item = ({ img, header, text }) => {
    return (
        <div className="itemContainer">
            <img src={img}></img>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Item
