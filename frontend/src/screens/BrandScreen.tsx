import { Link, useParams } from 'react-router-dom';
import data from '../data';
export default function BrandScreen() {
  const { category, brand } = useParams();
  const productsInBrand = data.products.filter(
    (product) => product.category === category && product.brand === brand
  );
  return (
    <div className="brands">
      {productsInBrand.map((product) => (
        <div className="brand" key={product.slug}>
          <Link to={`/${product.slug}`}>
            <img src={product.image} alt={product.name} />
            <div className="brand-item">
              <h1>{product.name}</h1>
            </div>
          </Link>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
