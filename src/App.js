import { Routes ,Route} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

import { Header,Footer } from "./components";
import { Home, FullPost, Registration, AddPost, Login, Blog } from "./pages";
import React from 'react';
import { fetchAuthMe, logout , selectIsAuth } from './redux/slices/auth';

function App() {
  const dispath = useDispatch()
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispath(fetchAuthMe())
  },[])

  return (
    <>
      <Header />
      {/* <Container maxWidth="lg"> */}
      <Box sx={{ pt: 8 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/posts/:id' element={<FullPost />} />
          <Route path='/posts/:id/edit' element={<AddPost />} />
          <Route path='/add-post' element={<AddPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
        </Routes>
        </Box>
        <Footer/>
      {/* </Container> */}
    </>
  );
}

export default App;
