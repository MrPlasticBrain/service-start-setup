import { Component } from '@angular/core';
import { LogService } from "app/service/log.service";
import { DataService } from "app/service/data.service";

@Component({
    selector: 'app-cmp-a',
    template:  `
    <h2>Component A</h2>
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor = "let item of retrivedDataArray">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p></p>
    </div>
  `,
  providers:[LogService]
})
export class CmpAComponent {
constructor(private logService:LogService,private dataService:DataService){}
retrivedDataArray:Array<string> = [];
onLog(input:string){
    this.logService.writeToLog(input);
}
onStore(input:string){
    this.dataService.addData(input);
}
onGet(){
    this.retrivedDataArray = this.dataService.getData();
}
onSend(input:string){
    this.dataService.emitData(input);
}
}
