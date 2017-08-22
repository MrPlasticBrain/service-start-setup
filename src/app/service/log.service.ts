import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }
  writeToLog(input:string){
    console.log('doaga od logService',input);

  }
}
