import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

import { Header, Footer } from "./components";
import { Home, FullPost, Registration, AddPost, Login, Blog, TaxCar, TaxHome, TaxNoHome, TaxPlace } from "./pages";
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
          <Route path='/taxcar' element={<TaxCar />} />
          <Route path='/taxhome' element={<TaxHome />} />
          <Route path='/taxnohome' element={<TaxNoHome />} />
          <Route path='/taxplace' element={<TaxPlace />} />
        </Routes>
      </Box>
      <Footer />
      <a href="#" className="scrollToTop scroll-btn show"><i className="far fa-arrow-up"></i></a>
      {/* </Container> */}
    </>
  );
}

export default App;
