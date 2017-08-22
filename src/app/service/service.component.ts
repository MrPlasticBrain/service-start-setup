import { Component } from '@angular/core';
import { LogService } from "app/service/log.service";

@Component({
    selector: 'app-service',
    template: `
    <app-cmp-a></app-cmp-a>
    <hr>
    <hr>
    <app-cmp-b></app-cmp-b>
  `
})
export class ServiceComponent {
}
