import { Component, DoCheck, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Person } from '../../model/person';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {

  public name: string = '';
  public reward: string = '';

  public randomIndex!: number;
  public randomPerson: Person[] = [];

  public receiverData: any = this._localStorageService.getLocalStorage();

  public dataSource: Array<Person> = [];

  constructor(
    private _localStorageService: LocalStorageService
  ) {

  }
  ngDoCheck(): void {
  }

  ngOnInit(): void {
   if(this.receiverData){
    this.getLocalStorage();
   }
  }

  getLocalStorage(){
    this.dataSource = JSON.parse(this.receiverData);
  }

  pushDataSource(name: string, reward: string){
    this.dataSource.push(
      {
        name: name,
        reward: reward
      }
    );
  }

  save(person: Person[]){
    this._localStorageService.saveToLocalStorage(person);
  }

  confirmation(name: string, reward: string) {
    const ERROR: string = 'Error: Insira um nome válido!'

    name = this.name;
    reward = this.reward;

    this.pushDataSource(name, reward);
    console.log('teste')
    this.save(this.dataSource);
    this.name = ''
  }

  getRandom() {
    if(this.dataSource.length == 0){
      alert('Lista vazia');
    } else {
      this.randomIndex = Math.floor(Math.random() * this.dataSource.length);
      this.randomPerson.push(this.dataSource[this.randomIndex]);
    }
  }

  cleanList() {
    const message: string = 'Você tem certeza que deseja LIMPAR A LISTA?';
    const error: string = 'Não há o que deletar!'
    if(this.dataSource.length == 0){
      alert(error);
    } else {
      if(window.confirm(message)){
        this.dataSource = [];
        this.save(this.dataSource);
      }
    }
  }
}
