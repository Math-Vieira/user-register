import * as mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});
