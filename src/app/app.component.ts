import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onomatopias: string[]

  constructor() {
    this.onomatopias = []
  }

  onReceiveNewOnomatopia($event: string) {
    this.onomatopias.push($event)
  }
}



