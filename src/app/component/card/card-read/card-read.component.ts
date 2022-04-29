import { Observable, map, Subscriber } from 'rxjs';
import { Tipo } from './../../../models/tipo.models';
import { TipoService } from './../../../servicos/tipo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.css']
})
export class CardReadComponent implements OnInit {

  public filmes: Tipo[] = [];

  constructor(
    private tipoService: TipoService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll()  {
    this.tipoService.getAll().subscribe((res: Tipo[]) => {
      this.filmes = res;
    })


  }


}
