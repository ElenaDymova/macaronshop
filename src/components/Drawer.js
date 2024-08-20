function Drawer({onClickClose, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 mt-30 d-flex justify-between">Cart <img onClick={onClickClose} className="cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center justify-between mb-20">
                            <img className="mr-20" width={70} height={70} src={obj.img} alt={obj.name} />
                            <div className="mr-20">
                                <p>{obj.name}</p>
                                <b>{obj.price}$</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>
                    ))}
                </div>

                <div className="cartTotalBlock">
                <ul>
                    <li className="d-flex">
                    <span>Total amount:</span>
                    <div></div>
                    <b>200$</b>
                    </li>
                    <li className="d-flex">
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>2$</b>
                    </li>
                </ul>
                <button className="redButton">Place an order<img src="img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;