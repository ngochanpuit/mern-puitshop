import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function CategoryScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  const { category } = useParams();
  const brandsInCategory = products
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
