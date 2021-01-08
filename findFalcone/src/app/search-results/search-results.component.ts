import { Component } from '@angular/core';
import { FalconeService } from '../falcone/falcone-service.service';

@Component({
  selector: 'app-falcone',
  templateUrl: 'search-results.component.html',
  styleUrls: ['search-results.component.scss']
})
export class SearchResultsComponent {
    searchResults:any = {};
    constructor(private falconeService: FalconeService){
        this.falconeService.searchResults.subscribe((result)=>{
            console.log(result);
            this.searchResults = result
        });
    }
}