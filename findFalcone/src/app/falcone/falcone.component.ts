import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { FalconeService } from './falcone-service.service';

@Component({
  selector: 'app-falcone',
  templateUrl: './falcone.component.html',
  styleUrls: ['./falcone.component.scss']
})
export class FalconeComponent implements OnInit {
  formModel: any = {};
  planets: any;
  vehicles: any;
  totalTimeTaken: any = 0;

  constructor(private falconeService: FalconeService) { }

  ngOnInit(): void {
    this.getDropDownValues();
  }

  getDropDownValues(): any{
    forkJoin(this.falconeService.getplanets(),
             this.falconeService.getvehicles()).subscribe(([planets, vehicles]: any) => {
               this.planets = planets;
               this.vehicles = vehicles;
             });
  }

  onvalueChange(level: any, value: any): any{
    switch (level){
      case 'first':
        console.log(value);
        const 
        break;
      case 'second':
        console.log(value);
        break;
      case 'third':
        console.log(value);
        break;
      case 'fourth':
        console.log(value);
        break;
    }
  }

}
