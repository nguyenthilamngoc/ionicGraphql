import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ShoppingListProvider } from '../providers/shopping-list/shopping-list';
import { GraphQLModule } from '../apollo.config';
import { HttpClientModule} from '@angular/common/http';
import { NewItemPage} from '../pages/new-item/new-item';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    NewItemPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GraphQLModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    NewItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListProvider
  ]
})
export class AppModule {}
