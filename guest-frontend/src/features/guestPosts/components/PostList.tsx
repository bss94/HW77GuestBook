import {Box, Grow, Paper, Typography} from '@mui/material';
import PostItem from './PostItem';
import {useSelector} from 'react-redux';
import {selectPosts} from '../postsSlice';

const PostList = () => {
  const posts = useSelector(selectPosts);

  return (
    <>
      {posts.length === 0 && (
        <Typography variant="h6" textAlign="center">
          Guest book is empty! You must be first writer on this Guest book! Please click add post!
        </Typography>
      )}
      {posts.length > 0 && (
        <Box justifyContent="space-evenly"
             sx={{
               width: '100%',
               display: 'flex',
               flexWrap: 'wrap',
               alignItems: 'center'
             }}>
          {posts.map((post, index) => (
            <Grow
              in
              style={{transformOrigin: '0 0 0'}}
              {...{timeout: index * 1500}}
              key={post.id}
            >
              <Paper sx={{m: 1,}} elevation={10}>
                <PostItem author={post.author}
                          message={post.message}
                          image={post.image}/>
              </Paper>
            </Grow>
          ))}
        </Box>
      )}
    </>


  );
};

export default PostList;