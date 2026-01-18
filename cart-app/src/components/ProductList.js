import Productcard from "./ProductCard";

function ProductList  ({products, addToCart}) {
    return (
        <div className="product-grid">
            {/* {loop through the products} */}
            {products.map((product) => (
<Productcard
key={product.id} 
product={product} 
addToCart={addToCart}
/>
            ))}
        </div>
    );
}

export default ProductList;