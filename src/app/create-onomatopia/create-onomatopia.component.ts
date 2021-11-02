import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {

  // String type isn't possible because I'm using FormControl
  newOnomatopia = new FormControl('')

  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia(): void {
    // Using newOnomatopia.value because of FormControl
    this.sendOnomatopiaToParent.emit(this.newOnomatopia.value)
    // Reset the value of the input in the template
    this.newOnomatopia = new FormControl('')
  }
}
