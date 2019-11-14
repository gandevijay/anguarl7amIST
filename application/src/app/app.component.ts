import { Component, OnInit } from '@angular/core';
import { AppserviceService } from './appservice.service';
import { IData } from './IData';
import { IUser } from './IUser';

import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appliation';
  students : Array<IData> = [];
  users : Array<IUser> = [];
  date;
  constructor(private service : AppserviceService){
   
  }

  getCurrentDate(){
    this.date = new Date();
    return this.date;
  }

  ngOnInit(){
    this.service.getJsonData().subscribe(results => {
        this.students = results;
        //console.log(this.students);
    });
    this.service.getLoadUsers().subscribe(results =>{
      this.users = results;
       console.log( this.users);
    })
  }


  columnDefs=[{field:"id"},{field:"name"},{field:"email"}];
  rowData=[
    {id:"1",name:"test",email:"abc@abc.com",sortable:true},
    {id:"2",name:"test1",email:"abc1@abc.com",sortable:true},
    {id:"3",name:"test2",email:"abc2@abc.com",sortable:true}]

    modules = AllCommunityModules;
}
