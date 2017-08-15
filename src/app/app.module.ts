import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ng2-cookies';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';

import { SocketIoModule, SocketIoConfig, Socket} from 'ng-socket-io';
import { environment } from '../environment';
import { NewsComponent } from './news/news.component'

const config: SocketIoConfig = { url: environment.socket };

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocketIoModule.forRoot(config) 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
