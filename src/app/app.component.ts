import { Component } from '@angular/core';
import{CronaService} from './crona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'krona3';
  countries: any;
  country: any;
  confirmed:Number
  recovered:Number
  deaths: Number 
  constructor(private crona: CronaService){}

  ngOnInit()
  {
    this.crona.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries=data
      
     
    })
  }

  getData()
  {
    this.crona.getCoronaRealtimeData(this.country).subscribe((data)=>{
        console.log(data);
        var index =data.length -1
        this.confirmed = data[index].Confirmed
        this.recovered = data[index].Recovered
        this.deaths = data[index].Deaths
        
    })
  }

  getCountry(country:any)
  {
    this.country = country
  }
}

