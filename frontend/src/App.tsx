import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import BrandScreen from './screens/BrandScreen';
import ProductScreen from './screens/ProductScreen';
import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
function App() {
  const categories = data.products.map((item) => item.category);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">puitshop</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            {categories.map((category) => (
              <>
                <Route
                  key={category}
                  path="/:category"
                  element={<CategoryScreen />}
                />
                <Route path="/:category/:brand" element={<BrandScreen />} />
                <Route path="/:slug" element={<ProductScreen />} />
              </>
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
