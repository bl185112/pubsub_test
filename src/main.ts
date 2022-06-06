import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { createServer } from 'http';
import { AppModule } from './app.module';
import listenForMessages from './gcp/listenForMessages';
import publishMessage from './gcp/publishMessage';
import * as express from 'express'
import 'dotenv/config'

const bootstrap = async () => {
  const server = express()

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server)
  );
  await app.init();
  
  createServer(server).listen(3000, listenForMessages)
}

bootstrap()