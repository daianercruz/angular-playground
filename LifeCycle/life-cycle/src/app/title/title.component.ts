import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() nome:string = " "

    constructor(){
      console.log(`Construtor ${this.nome}`)
    }

    ngOnChanges(): void {
      console.log(`ngOnChanges ${this.nome}`);
  }

     ngOnInit(): void {
    console.log(`OnInit ${this.nome}`)
  }

}

