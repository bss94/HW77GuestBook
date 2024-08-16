import {AppBar, Button, Grid, Link, Toolbar, Typography} from '@mui/material';
import styled from '@emotion/styled';
import {useAppDispatch} from '../../app/hooks';
import {openModal} from '../../features/guestPosts/postsSlice';

const StyledLink = styled(Link)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  },
});

const AppToolbar = () => {
  const dispatch = useAppDispatch();
  const onOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-around" sx={{display: 'flex'}}>
          <Grid item><Typography variant="h6" component="div">
            <StyledLink href={'#'}> Guest Book </StyledLink>
          </Typography> </Grid>
          <Grid item>
            <Typography variant="h6" component="div">
              <Button
                variant="text"
                onClick={onOpenModal}
                sx={{color: 'white'}}
              > Add Post </Button>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;
