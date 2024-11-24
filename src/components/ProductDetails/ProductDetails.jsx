import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import productService from '../../services/productService'; // Import your product service

const ProductDetails = ({ handleAddProductToCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await productService.show(id);
      setProduct(productData);
    };
    fetchProduct();
  }, [id]);

  return (
    <main>
      {product ? (
        <article>
          <header>
            <h2>{product.product_name}</h2>
          </header>
          <p>{product.category}</p>
          {user && <button onClick={() => handleAddProductToCart(product)}>Add to Cart</button>}
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default ProductDetails;