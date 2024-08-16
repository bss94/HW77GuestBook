import NewPost from './NewPost';
import PostList from './components/PostList';
import {Box, CircularProgress, Typography} from '@mui/material';
import {useEffect} from 'react';
import {fetchPosts} from './postsThunks';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectFetching} from './postsSlice';


const GuestPosts = () => {
  const dispatch = useAppDispatch();
  const fetching = useAppSelector(selectFetching);


  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <NewPost/>

      <Typography variant="h4" sx={{m: 3, textAlign: 'center'}}>
        All posts
      </Typography>
      {fetching ?
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CircularProgress sx={{m: 2, textAlign: 'center'}}/>
        </Box>
        : <PostList/>}

    </>
  );
};

export default GuestPosts;