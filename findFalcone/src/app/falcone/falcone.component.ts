import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { FalconeService } from './falcone-service.service';

@Component({
  selector: 'app-falcone',
  templateUrl: './falcone.component.html',
  styleUrls: ['./falcone.component.scss']
})
export class FalconeComponent implements OnInit {
  formModel: any = {};
  planets: any = [];
  vehicles: any = [];
  totalTimeTaken: number = 0;
  totalVehicleCounts:any = {};
  displayedColumns: string[] = ['Vehicle Name', 'Total Count', 'Used Count', 'Avaialbility'];
  get usedVehicleCount() {
    let vehicles:any = {};
    ['planet1', 'planet2', 'planet3', 'planet4'].forEach((planet, index)=>{
      if(this.formModel[planet] && this.formModel['vehicle'+(index+1)]) {
        vehicles[this.formModel['vehicle'+(index+1)]] ? (vehicles[this.formModel['vehicle'+(index+1)]] += 1) : (vehicles[this.formModel['vehicle'+(index+1)]] = 1);
      } else {
        vehicles[this.formModel['vehicle'+(index+1)]]  = 0;
      }
    })
    return vehicles;
  }
  constructor(private falconeService: FalconeService, private router: Router) { }

  ngOnInit(): void {
    this.getDropDownValues();
  }

  getDropDownValues(): any{
    forkJoin(this.falconeService.getplanets(),
             this.falconeService.getvehicles()).subscribe(([planets, vehicles]: any) => {
               this.planets = planets;
               this.vehicles = vehicles;
               vehicles.forEach((vehicle: any)=>{
                this.totalVehicleCounts[vehicle.name] = vehicle.total_no;
               })
             });
  }

  onvalueChange(event:any,level: any, value: any): any{
  this.getTotalTime();
  
  }

  calculateTimeTaken(vehicle:any,planet:any){
    const speed = this.vehicles.find((data:any)=>data.name === vehicle).speed;
    const timeTaken = this.planets.find((data:any)=>data.name === planet).distance / speed;
    return timeTaken;
  }

  getTotalTime() {
    return ['planet1', 'planet2', 'planet3', 'planet4'].reduce((calculatedDistance, planetName, index)=>{
      return calculatedDistance + (this.formModel[planetName] && this.formModel['vehicle'+index] ? this.calculateTimeTaken(this.formModel['vehicle'+index], this.formModel[planetName]) : 0);
    }, 0);
  }

  isTravelNotPossible(vehicle:any, planet:any){
    return (this.usedVehicleCount[vehicle.name] >= this.totalVehicleCounts[vehicle.name]) || vehicle.max_distance < this.planets.find((k:any)=>k.name===planet).distance;
  }

  onPlanetChange(index:any){
   delete this.formModel['vehicle'+index];
  }
  findThatFalcone(){
    this.falconeService.getToken().subscribe((response:any)=>{
      const payload = { 
        token: response.token, 
        planet_names: ['planet1', 'planet2', 'planet3', 'planet4'].map(planet=>this.formModel[planet]),
        vehicle_names: ['vehicle1', 'vehicle2', 'vehicle3', 'vehicle4'].map(vehicle=>this.formModel[vehicle])
      }
      this.falconeService.findFalcone(payload).subscribe((result:any)=>{
        this.falconeService.searchResults.next({...result, time_taken: this.getTotalTime()});
        if(result.status){
          this.router.navigate(['results'])
        }
      })
    })
  }
}
