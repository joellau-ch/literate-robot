import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Message } from '@literate-robot/api-interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
