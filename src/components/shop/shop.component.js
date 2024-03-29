import './shop.styles.scss'
import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import { Route, Routes } from 'react-router-dom';
import Category from '../../routes/category/category.component';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/categories.reducer';
import { useDispatch } from 'react-redux';


const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMap();
  }, [dispatch]);
    return (
        <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    );
}

export default Shop;
