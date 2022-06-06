import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import listenForMessages from './gcp/listenForMessages';
import publishMessage from './gcp/publishMessage';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("publish")
  pubMessage(@Body() newMessage) {
    console.log("new message", newMessage);
    publishMessage(newMessage);
  }

  @Get("subscribe")
  subTopic(){
    console.log("Subscribing");
    listenForMessages();
  }
}
