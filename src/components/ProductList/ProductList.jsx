import { Link } from "react-router-dom";


const ProductList = (props) => {
  const [cart, setCart] = useState([]);

  const handleAddProductToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <main className={styles.container}>
    {props.products.map((product) => (
      <Link key={product.product_id} to={`/products/${product.product_id}`}>
        <article>
          <header>
            <div>
            <h2>{product.product_name}</h2>
            {product.category}
            </div>
            
            
          </header>
          <p>{product.text}</p>
        </article>
      </Link>
    ))}
  </main>
  );
}

export default ProductList;