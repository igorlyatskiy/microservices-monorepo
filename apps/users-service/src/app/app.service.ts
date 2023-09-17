import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): any[] {
    return [ {
      user: 'testUser',
      id: 'jasodfnasd'
    } ];
  }
}
