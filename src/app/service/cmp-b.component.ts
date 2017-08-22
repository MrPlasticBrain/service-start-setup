import { Component, OnInit } from '@angular/core';
import { LogService } from "app/service/log.service";
import { DataService } from "app/service/data.service";

@Component({
    selector: 'app-cmp-b',
    template:  `
    <h2>Component B</h2>
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
         <ul>
            <li *ngFor = "let item of retrivedDataArray">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  providers:[LogService]
})
export class CmpBComponent implements OnInit{
constructor(private logService:LogService,private dataService:DataService){}
retrivedDataArray:Array<string> = [];
value =''; 
onLog(input:string){
    this.logService.writeToLog(input);
}
onStore(input:string){
    this.dataService.addData(input);
}
onGet(){
    this.retrivedDataArray = this.dataService.getData();
}
ngOnInit(){
    this.dataService.pushData.subscribe(
        (data) => this.value = data
    );
}
}
