import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  constructor() {}
  @Input('selected') selected: any;
  @Input('items') allItems: any;

  @Output('leftItems') onLeftItems = new EventEmitter();

  removeItems(id: any) {
    let selectedIndex = this.selected.findIndex((i: any) => i.id === id);
    let listIndex = this.allItems.findIndex((i: any) => i.id === id);
    console.log(selectedIndex);
    console.log(listIndex);

    this.selected.splice(selectedIndex, 1);
    this.allItems.splice(listIndex, 1);
    console.table(this.selected);
    console.table(this.allItems);
  }

  ngOnInit(): void {}
}
