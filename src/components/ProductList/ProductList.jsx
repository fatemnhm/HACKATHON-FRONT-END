import { Link } from "react-router-dom";
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo';

const ProductList = (props) => {
  return (
    <main className={styles.container}>
    {props.products.map((product) => (
      <Link key={product._id} to={`/products/${product._id}`}>
        <article>
          <header>
            <div>
            <h2>{product.title}</h2>
            {categoryIcons[product.category] }
            </div>
            <AuthorInfo content={product} />
            
          </header>
          <p>{product.text}</p>
        </article>
      </Link>
    ))}
  </main>
  );
}

export default ProdactList;