import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  gethomepage(): string {
    return 'Welcome to Backend Service';
  }
  
}
