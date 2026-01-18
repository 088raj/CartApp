function CartModal  ({cart, closeModal, removeFromCart}) {
    return (
        <div className="modal-bacdrop">
            <div className="modal">
            <h2>Cart Items</h2>
            {/* {cart is empty} */}
            {cart.length === 0 && <p>Cart is empty</p>}
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                <img src={item.image} alt="" />
                    <h3 className="title">{item.title}</h3>
                    <p className="amount">Rs. {item.price}</p>
                    <button onClick={() => removeFromCart(item.id)} className="remove-cart-btn">Remove</button>
                </div>
                
            ))}

            <button onClick={closeModal} className="close-cart-btn">Close</button>
        </div>
        </div>
    );
}

export default CartModal;