import React, {useRef, useState} from 'react';
import {Button, Grid, TextField} from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  label: string;
}

const FileInput: React.FC<Props> = ({onChange, name, label}) => {
  const [fileName, setFileName] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const activateInput = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
    onChange(e);
  };

  return (
    <>
      <input
        type="file"
        name={name}
        style={{display: 'none'}}
        ref={inputRef}
        onChange={onFileChange}
      />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <TextField
            fullWidth
            label={label}
            inputProps={{readOnly: true}}
            value={fileName}
            onClick={activateInput}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={activateInput}
            variant="outlined">
            <AddPhotoAlternateOutlinedIcon/>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FileInput;
