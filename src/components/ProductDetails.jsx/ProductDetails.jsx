import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import AuthedUserContext from './AuthedUserContext'; // Import your context
import productService from './productService'; // Import your product service
import AuthorInfo from './AuthorInfo'; // Import your AuthorInfo component

const ProductDetails = ({ handleAddProductToCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const user = useContext(AuthedUserContext);

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
            <h2>{product.title}</h2>
            <AuthorInfo content={product} />
          </header>
          <p>{product.text}</p>
          {user && <button onClick={() => handleAddProductToCart(product)}>Add to Cart</button>}
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default ProductDetails;