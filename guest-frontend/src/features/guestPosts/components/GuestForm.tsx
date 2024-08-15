import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import {selectCreating} from '../postsSlice';
import {PostMutation} from '../../../types';
import {Grid, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import FileInput from '../../../UI/FileInput/FileInput';
import {createPost} from '../postsThunks';




const GuestForm = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCreating);

  const [state, setState] = useState<PostMutation>({
    author: '',
    message: '',
    image: null,
  });

  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await dispatch(createPost(state));
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const fileInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    const value = files && files[0] ? files[0] : null;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Grid container direction="column" spacing={2} component="form" onSubmit={submitFormHandler}>
      <Grid item>
        <TextField
          label="Author"
          id="author"
          name="author"
          value={state.author}
          onChange={inputChangeHandler} />
      </Grid>
      <Grid item>
        <TextField
          required
          multiline
          minRows={3}
          label="Message"
          id="message"
          name="message"
          value={state.message}
          onChange={inputChangeHandler}
        />
      </Grid>
      <Grid item>
        <FileInput
          label="Image"
          name="image"
          onChange={fileInputChangeHandler} />
      </Grid>


      <Grid item>
        <LoadingButton
          type="submit"
          loading={isCreating}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default GuestForm;