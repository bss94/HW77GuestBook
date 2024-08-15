
import NewPost from './NewPost';
import PostItem from './components/PostItem';

const GuestPosts = () => {
  return (
    <div>
      guest post
      <NewPost/>
      <PostItem/> <PostItem/> <PostItem/>
    </div>
  );
};

export default GuestPosts;