import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  gethomepage(): string {
    return 'Home Page';
  }
  
}
