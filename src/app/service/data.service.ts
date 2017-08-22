import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from "app/service/log.service";

@Injectable()
export class DataService {

  constructor(private logService:LogService) { }
  items:Array<string> = [];
  pushData = new EventEmitter<string>();
  addData(input:string){
    this.items.push(input)
    this.logService.writeToLog(input+":: From data servis KURO DA MI JADES");
  }
  getData(){
    return this.items;
  }
  emitData(input:string){
    this.pushData.emit(input);
  }
  
}
