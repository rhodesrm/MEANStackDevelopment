import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZipcodeFormComponent } from './zipcode-form.component';

@Injectable({
  providedIn: 'root'
})

export class ZipcodeService {
  private backendUrl = 'http://localhost:3000/weather';
  constructor(private http: HttpClient) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );

    const postData =  {
      zip: ZipcodeFormComponent.zipC,
    };
    this.http.post(this.backendUrl, postData, { observe: 'response' })
      .subscribe(data => {
        console.log(data);
        const weatherType = JSON.stringify(['wx_desc']);
        const zipCode = postData.zip;
        return [weatherType, zipCode];

      }, error => {
        console.log(error);
      });

  }
}
