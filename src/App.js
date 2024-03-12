import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Container from "@mui/material/Container";
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';

import { Header, Footer } from "./components";
import { Home, FullPost, Registration, AddPost, Login, Blog,TaxMenu, TaxCar, TaxHome, TaxNoHome, TaxPlace , Contacts  } from "./pages";
import React, { useEffect } from 'react';
import { fetchAuthMe, logout, selectIsAuth } from './redux/slices/auth';


function App() {



  const dispath = useDispatch()
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispath(fetchAuthMe())
  }, [])



  return (
    <>
      <Header />
      {/* <Container maxWidth="lg"> */}
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/posts/:id' element={<FullPost />} />
          <Route path='/posts/:id/edit' element={<AddPost />} />
          <Route path='/add-post' element={<AddPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />


          {/* Налоги */}
          <Route path='/taxmenu' element={<TaxMenu />} />
          <Route path='/taxcar' element={<TaxCar />} />
          <Route path='/taxhome' element={<TaxHome />} />
          <Route path='/taxnohome' element={<TaxNoHome />} />
          <Route path='/taxplace' element={<TaxPlace />} />
          <Route path='/contacts' element={<Contacts />} />
            {/* Страница для неверной ссылки */}
            <Route path='*' element={<NotPage />} />
        </Routes>
      </Box>
      <Footer />
      <a href="#" className="scrollToTop scroll-btn show"><i className="far fa-arrow-up"></i></a>
      {/* </Container> */}
    </>
  );
}

const NotPage = () => {
  return (
    <section className="vs-error-wrapper space">
    <div className="container"><div className="error-content text-center">
        <h2 className="error-number">4<span className="text-theme">0</span>4</h2>
        <h3 className="error-title">Упс, страница не найдена</h3>
        <p className="error-text">Сожалеем, но мы не можем найти запрошенную вами страницу. Возможно, это связано с тем, что вы неправильно ввели веб-адрес.</p>
        <Link to="/" className="vs-btn"><i className="fas fa-home ms-0 me-2" />На главную страницу</Link>
    </div>
    </div>
</section>
  )
}

export default App;
