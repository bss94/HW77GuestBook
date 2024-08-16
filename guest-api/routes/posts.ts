import express from 'express';
import {imagesUpload} from '../multer';
import fileDb from '../fileDb';
import {ReqPost} from '../types';

const postsRouter = express.Router();

postsRouter.get('/', async (req, res) => {
  const products = await fileDb.getItems();
  res.send(products);
});


postsRouter.post('/', imagesUpload.single('image'), async (req, res) => {
  if (!req.body.message || req.body.message.trim() === '') {
    return res.status(400).send({error: 'Bad request! Message are required!'});
  }
  const post: ReqPost = {
    author: req.body.author ? req.body.author : 'Anonymous',
    message: req.body.message,
    image: req.file ? req.file.filename : null
  };

  const savedProduct = await fileDb.addItem(post);
  res.send(savedProduct);
});


export default postsRouter;