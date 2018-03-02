import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText: string = 'Add a new item';
  goalText: string = 'My first life goal';
  goals = [];

  constructor(private _data:DataService) { }

  ngOnInit() {
    
    this._data.goal.subscribe(res=> this.goals = res);
    this._data.changeGoal(this.goals);
    this.itemCount=this.goals.length;
  }

  addItem()
  {
    this.goals.push(this.goalText);
    
    
    this.goalText='';
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;

  }

  removeItem(i)
  {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
    this.itemCount=this.goals.length;
  }
}
