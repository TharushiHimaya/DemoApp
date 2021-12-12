import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: any = {};
  
  constructor(public http: HttpClient, private apiService: UsersDataService){}

  createUser(){
    this.apiService.createUsers(this.user).subscribe((res)=>{
    });
  }

  ngOnInit(): void {
  }

}
