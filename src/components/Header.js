function Header () {
    return (
        <header className="header">
            <div className="wrapper clear d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
            <img width={50} height={50} src="/img/logo.svg"/>
            <div>
                <h3 className="text-uppercase">macaronshop</h3>
                <p className="opacity-5">Shop for desserts made from natural ingredients</p>
            </div>
            </div>
            <ul className="d-flex">
            <li className="mr-30">
                <img width={18} height={18} src="/img/cart.svg"/>
                <span>12$</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg"/>
            </li>
            </ul>
            </div>
        </header>
    )
}

export default Header;