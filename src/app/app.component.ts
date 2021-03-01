import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-angular-test';
  geoLocationGet(){
    console.log(navigator.geolocation)
    if(navigator.geolocation){
      console.log("Accessed")
      navigator.geolocation.getCurrentPosition(success, error);
      function success(position){
          console.log(position.coords);
      }
      function error(error){
        console.log(error);
      }
    }

  }
}
