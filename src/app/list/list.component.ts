import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';
import { User } from '../model/user';
import { UserInformation } from '../model/userinformation';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent{
  userInfo : UserInformation;
  
  constructor(public userService: UsersDataService) { 
    this.userInfo = {} as UserInformation;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response:UserInformation) => {
      debugger;
      this.userInfo = response;
      return;
     
    });
  }

 

  deleteUser(id : number){
    this.userService.deleteUser(id).subscribe(data=>{
      console.log(data);
    });
  }

}