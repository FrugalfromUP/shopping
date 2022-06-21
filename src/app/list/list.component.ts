import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input('items') items: any;

  constructor() {}
  @Output('getItem') sendSelectedItems = new EventEmitter();

  onSelect(id: any) {
    console.log(id);
    let index = this.items.findIndex((item: any) => item.id === id);

    this.items[index].purchased = !this.items[index].purchased;
  }

  createList() {
    let selected = this.items.filter((i: any) => i.purchased === true);
    alert('List created successfully');
    console.log(selected);
    this.sendSelectedItems.emit(selected);
  }
  ngOnInit(): void {}
}
