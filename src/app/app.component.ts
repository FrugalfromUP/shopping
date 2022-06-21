import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  previewValue = true;

  public listItems = [
    {
      id: 0,
      name: 'Lemon',
      purchased: false,
    },

    {
      id: 1,
      name: 'potato',
      purchased: false,
    },
    {
      id: 2,
      name: 'qualiflower',
      purchased: false,
    },
    {
      id: 3,
      name: 'tomato',
      purchased: false,
    },
    {
      id: 4,
      name: 'brinjle',
      purchased: false,
    },
    {
      id: 5,
      name: 'chilli',
      purchased: false,
    },
  ];
  public selectedItems = [];

  onToggle() {
    this.previewValue = !this.previewValue;
  }

  sendSelectedItems(data: any) {
    this.selectedItems = data;
  }

  getLeftItems(obj: any) {
    this.listItems = obj.remainingList;
    console.log(obj.remainingList);
    this.selectedItems = obj.remainingSelected;
  }
}
