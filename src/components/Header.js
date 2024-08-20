function Header (props) {
    return (
        <header className="header">
            <div className="wrapper clear d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
            <img width={50} height={50} src="/img/logo.svg" alt="Logotype"/>
            <div>
                <h3 className="text-uppercase">macaronshop</h3>
                <p className="opacity-5">Shop for desserts made from natural ingredients</p>
            </div>
            </div>
            <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p">
                <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                <span>12$</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" alt="User"/>
            </li>
            </ul>
            </div>
        </header>
    )
}

export default Header;