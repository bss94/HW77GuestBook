import React from 'react';
import {Card, CardContent, CardHeader, CardMedia} from '@mui/material';
import styled from '@emotion/styled';
import {API_URL} from '../../../constants';


const ImageCardMedia = styled(CardMedia)({
  height: '0',
  paddingTop: '56.25%',
});

interface Props {
  author: string;
  message: string;
  image: string | null;
}

const PostItem: React.FC<Props> = ({
  author, message, image
}) => {
  return (
    <Card sx={{width: '250px'}}>
      <CardHeader title={author} sx={{textTransform: 'capitalize'}}/>
      {image && <ImageCardMedia image={`${API_URL}/${image}`} title={author}/>}
      <CardContent>
        {message}
      </CardContent>
    </Card>
  );
};

export default PostItem;