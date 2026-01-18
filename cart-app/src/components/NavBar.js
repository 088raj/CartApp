function NavBar  ({cartCount, openCart}) {
    return (
        <nav className="navbar">
           <h1>Shopping Site</h1>
           <button onClick={openCart} className="cart-btn">Cart ({cartCount})</button>

        </nav>
    );
}

export default NavBar;