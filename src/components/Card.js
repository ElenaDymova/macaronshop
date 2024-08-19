function Card() {
    return (
        <div className="card">
            <div className="favorite">
            <img src="/img/heart-unliked.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src="/img/macarons/macaron1.png" alt="Macarons"/>
            <h5>Chocolate, banana</h5>
            <p>Seasonal taste: milk chocolate, selected fresh bananas</p>
            <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Price:</span>
                <b>120$</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt=""/>
            </button>
            </div>
        </div>
    )
}

export default Card;