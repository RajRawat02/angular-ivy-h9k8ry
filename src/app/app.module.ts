import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { HeaderComponent } from './pages/header/header.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,TabsModule.forRoot() ],
  declarations: [ AppComponent, HeaderComponent, NavigationComponent, TabsComponent, ToolbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
