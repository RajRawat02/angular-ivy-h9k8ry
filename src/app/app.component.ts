import { Component, VERSION,ViewChild } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   public tabs: any;

   ngOnInit() {
  }
  @ViewChild('tabset') tabset: TabsetComponent;

  operateOnList(){
    
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }
}
