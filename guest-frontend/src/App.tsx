import GuestPosts from './features/guestPosts/GuestPosts';
import {Container} from '@mui/material';
import AppToolbar from './UI/AppToolbar/AppToolbar';


const App = () => {

  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <Container maxWidth="md" component="main">
        <GuestPosts/>
      </Container>
    </>
  );
};

export default App;
