import { HeaderComponent } from './components/header/header.component';
import { CardReadComponent } from './component/card/card-read/card-read.component';
import { CardItemComponent } from './component/card/card-item/card-item.component';
import { CardComponent } from './component/card/card.component';
import { TipoService } from './servicos/tipo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardItemComponent,
    CardReadComponent,
    HeaderComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],

  providers: [TipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
