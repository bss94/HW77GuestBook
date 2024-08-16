import GuestForm from './components/GuestForm';
import {Backdrop, Box, Fade, IconButton, Modal, Typography} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {closeModal, selectShowModal} from './postsSlice';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

const NewPost = () => {
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectShowModal);
  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal
        open={show}
        onClose={onCloseModal}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <Box alignItems="center" justifyContent="space-between" sx={{display: 'flex'}}>
              <Typography variant="h4" sx={{m: 2}}>
                New post
              </Typography>
              <IconButton onClick={onCloseModal}>
                <CloseIcon/>
              </IconButton>
            </Box>
            <GuestForm/>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default NewPost;