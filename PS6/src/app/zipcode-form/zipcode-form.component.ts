import { Component, OnInit } from '@angular/core';
import { WEATHERDESCRIPTION as weather } from '../weatherDescription';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ZipcodeService } from './zipcode-service.service';


@Component({
  selector: 'app-zipcode-form',
  templateUrl: './zipcode-form.component.html',
  styleUrls: ['./zipcode-form.component.css']
})

export class ZipcodeFormComponent implements OnInit {
  message: string;
  WeatherForecast: weather;
  zipC: string;
  private backendUrl = 'http://localhost:3000/weather';
  weatherType = '';
  zipCode = '';
  id = '';
  getzipC() {
    return this.zipC;
  }

  setzipC(value) {
    this.zipC = value;
  }

  addZip(newZip: NgForm) {
    // const weath = new weather('', '', newZip);
    const weath = new weather('', newZip.value);
    this.message = `Added ${JSON.stringify(weath.zip['zip'])}`;  // prints: Added {"zip":"02215"}
    // call function to back end w param: JSON.stringify(weath.zip)
    this.zipC = JSON.stringify(weath.zip);
  }

  constructor(private http: HttpClient) {
    this.message = '';
    this.WeatherForecast = new weather ({wx_desc: ''}, {zip: ''});


    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );

    const postData =  {
      zip: this.zipC,
    };
    this.http.post(this.backendUrl, postData, { observe: 'response' })
      .subscribe(data => {
        console.log(data);
        const weatherType = JSON.stringify(data['wx_desc']);
        const zipCode = postData.zip;
        return [weatherType, zipCode];

      }, error => {
        console.log(error);
      });
  }
  ngOnInit() {
  }
}
