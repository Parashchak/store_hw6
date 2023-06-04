import { Routes, Route } from "react-router-dom";
import { Home, Fav, Basket } from './pages';
import Header from './components/Header';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsFetch } from "./redux/actions/products";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faGrip } from "@fortawesome/free-solid-svg-icons";
import Button from "../src/components/Button";
import ThemeContext from "../src/Context";

function App() {
  const products = useSelector((state) => state.products.products);

  const themeView = localStorage.getItem('viewContext');
  const [theme, setTheme] = useState(themeView ? JSON.parse(themeView) : false);
  const ulClass = theme ? "list" : "card";
  const handleToggleView = (e) => {
      setTheme(!theme);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsFetch("./goods.json"));
  }, [dispatch]);

  useEffect(()=>{
    localStorage.setItem('viewContext', JSON.stringify(theme));
  }, [theme]);

  if (!products.length) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      <Header/>
      <Button
        onClick={handleToggleView}
        text={theme ? <FontAwesomeIcon icon={faGrip}/> : <FontAwesomeIcon icon={faListUl} />}
        btnClass="toggle-view"
      />
        <Routes>
          <Route 
            path='/' 
            element={<Home ulClass={ulClass}/>}
          />
          <Route 
            path='/fav' 
            element={<Fav ulClass={ulClass}/>}
          />
          <Route 
            path='/basket' 
            element={<Basket ulClass={ulClass}/>}
          />
        </Routes>
    </ThemeContext.Provider>
    </>
  );
}

export default App;