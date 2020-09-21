import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  items = [{ id: 1, itemText: 'Selected Item 1' },
           { id: 2, itemText: 'Selected Item 2' },
           { id: 3, itemText: 'Selected Item 3' },
           { id: 4, itemText: 'Selected Item 4' },
           { id: 5, itemText: 'Selected Item 5' }];
  selectedItem: any;
  forward = false;
  backward = true;
  constructor() { }

  ngOnInit() {
    this.selectedItem = this.items[0];
  }

  moveForward(item) {
    this.backward = false;
    this.selectedItem = this.items.find(element => {
      if(this.items.length === (element.id)){
        this.forward = true;
      }
      return element.id === item.id + 1 && element.id !== -1;
    });
  }

  moveBackward(item) {
    this.forward = false;
    this.selectedItem = this.items.find(element => {
      if(Math.min.apply(Math, this.items.map(a => a.id)) ===item.id-1){
        this.backward = true;
      }
      return element.id === item.id - 1 && element.id !== -1;
    });
}
}


