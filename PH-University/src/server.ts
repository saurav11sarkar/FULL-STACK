import mongoose from 'mongoose';
import { config } from './app/config';
import app from './app';
import { Server } from 'http';

let server: Server;
const serverDB = async () => {
  try {
    await mongoose.connect(config.URL as string);
    server = app.listen(config.PORT, () => {
      console.log(`Server is running http://localhost:${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
serverDB();

process.on('unhandledRejection', () => {
  console.log('unhandledRejection 😒');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('uncaughtException 😡');
  process.exit(1);
});
