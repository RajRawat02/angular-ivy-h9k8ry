import { Component, OnInit, Output, EventEmitter,ViewChild } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @ViewChild('tabset') tabset: TabsetComponent;
  selectedId:any;
  tabs = [{ id: 1, title: 'Tabs1', heading: 'tab 1 selected' },
          { id: 2, title: 'Tabs2', heading: 'tab 2 selected' },
          { id: 3, title: 'Tabs3', heading: 'tab 3 selected' }];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.updatedDataSelection(this.tabs[0]);
  }

  onChangeTab(tab) {
    this.dataService.updatedDataSelection(tab);
    this.selectedId = tab.id;
  }

  // goto(id){
  //   this.tabset.tab[id].active = true;
  // }
}
