import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs'
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  selectedTab: any;
  @ViewChild('tabset') tabset: TabsetComponent;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.data.subscribe(data => {
      this.selectedTab = data;
    });
  }
   goto(id){
     console.log(this.tabset.tabs);
    this.tabset.tabs[id].active = true;
  }

}
