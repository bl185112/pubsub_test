import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import listenForMessages from './listenForMessages';
import publishMessage from './publishMessage';


async function bootstrap() {
  const app1 = await NestFactory.create(AppModule);
  await app1.listen(3000, publishMessage);
  // const app2 = await NestFactory.create(AppModule);
  // await app2.listen(3001, listenForMessages);
}
bootstrap();
