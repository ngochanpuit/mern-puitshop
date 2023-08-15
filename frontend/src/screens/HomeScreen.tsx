import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
export default function HomeScreen() {
  return (
    <div>
      <>
        {data.products.map((item, index) => (
          <div className="home">
            <Link key={index} to={`/${item.category}`}>
              {item.category}
            </Link>
          </div>
        ))}
      </>
    </div>
  );
}
