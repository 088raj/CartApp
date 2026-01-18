function Productcard  ({product, addToCart}) {
    return (
        <div className="card">
           {/* {product image} */}
   <img src={product.image} alt="" />
           <h4 >{product.title}</h4>
              <p  >Rs. {product.price}</p>
              <button onClick={() => addToCart (product)}>Add to Cart</button>
        </div>
    );
}

export default Productcard;