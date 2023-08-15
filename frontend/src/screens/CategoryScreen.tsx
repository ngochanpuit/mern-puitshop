import { Link, useParams } from 'react-router-dom';
import data from '../data';
export default function CategoryScreen() {
  const { category } = useParams();
  const brandsInCategory = data.products
    .filter((product) => product.category === category)
    .map((product) => product.brand);

  return (
    <>
      {brandsInCategory.map((brand) => (
        <li className="category">
          <Link to={`/${category}/${brand}`}>{brand}</Link>
        </li>
      ))}
    </>
  );
}
