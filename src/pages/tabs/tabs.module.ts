import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import {NewItemPageModule} from '../new-item/new-item.module';

@NgModule({
  declarations: [
    TabsPage,
    NewItemPageModule
  ],
 
  imports: [
    IonicPageModule.forChild(TabsPage),
  ]
})
export class TabsPageModule {}
