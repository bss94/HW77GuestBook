import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Post, ReqPost} from './types';

const filename = './db.json';
let data: Post[] = [];

const fileDb = {
  async init() {
    try {
      const fileContents = await fs.readFile(filename);
      data = JSON.parse(fileContents.toString());
    } catch (e) {
      data = [];
    }
  },
  async getItems() {
    return data;
  },
  async addItem(item: ReqPost) {
    const id = crypto.randomUUID();
    const post: Post = {id, ...item};
    data.push(post);
    await this.save();
    return post;
  },
  async save() {
    return fs.writeFile(filename, JSON.stringify(data, null, 2));
  }
};

export default fileDb;