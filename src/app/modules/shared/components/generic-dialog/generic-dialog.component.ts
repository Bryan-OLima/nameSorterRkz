import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'src/app/modules/home/model/person';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Person[]){
  }

  public randomIndex!: number;
  public randomPerson: Person[] = [];

  winner: string = 'E o vencendor é...'
  ngOnInit(): void {
    this.winnerReveal();
    this.getRandom();
  }

  winnerReveal() {
    setTimeout(() => {
      this.winner = ''
    }, 3000);
  }

  getRandom() {
    if(this.data.length == 0){
      alert('Lista vazia');
    } else {
      this.randomIndex = Math.floor(Math.random() * this.data.length);
      this.randomPerson.push(this.data[this.randomIndex]);
    }
  }
}
