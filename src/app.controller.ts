import { Controller, Get, UsePipes,ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  gethome(): string {
    return this.appService.gethomepage();
  }
}
