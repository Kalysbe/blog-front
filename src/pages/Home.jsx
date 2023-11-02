import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from '../axios';

import { HomeComponent } from '../components/HomeComponent';
import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts, fetchTags } from '../redux/slices/post';

import { useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const dispatch = useDispatch()
  const userData = useSelector(state => state.auth.data)
  const { posts, tags } = useSelector(state => state.posts)

  const isPostsLoading = posts.status === 'loading'
  const isTagsLoading = tags.status === 'loading'

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])


  console.log(posts)

  return (
    <>
      <HomeComponent />
      <Container>
        <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>
          Блог: полезно знать
        </Typography>

        {/* <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новости компаний" />
        <Tab label="Новости налоговой" />
      </Tabs> */}

        <Grid container spacing={2}>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Grid sx={{ pl: 0 }} xs={12} item>
                <Post key={index} isLoading={true} />
              </Grid>
            ) : (
              <Grid sm={12} md={index == 0 ? 12 : 4} item>
                <Post
                  _id={obj._id}
                  title={obj.title}
                  imageUrl={obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''}
                  user={obj.user}
                  createdAt={obj.createdAt}
                  viewsCount={obj.viewsCount}
                  commentsCount={3}
                  tags={obj.tags}
                  isEditable={userData?._id == obj.user._id}
                  first={index == 0 ? true : false}
                />
              </Grid>
            ))}

          {/* <Grid xs={4} item> */}
          {/* <TagsBlock items={tags.items} isLoading={isTagsLoading} /> */}
          
          {/* </Grid> */}

        </Grid>
        <Grid xs={12} item>
              <Button sx={{float:'right',mr:2}} variant="outlined">
                Все новости
              </Button>
        </Grid>
      </Container>
    </>
  );
};
