import { Component } from '@angular/core';
import { weatherDescriptions } from './weatherDescriptionMock';
import {WEATHERDESCRIPTION} from './weatherDescription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Weather Viewer';
  descriptions = weatherDescriptions;
  private selectedDescription: WEATHERDESCRIPTION;
  // whitespace
  selectDescription(weatherDescription: WEATHERDESCRIPTION) {
    this.selectedDescription = weatherDescription;
  }
}
