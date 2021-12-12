import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserInformation } from '../model/userinformation';
import { catchError } from 'rxjs/operators';
import { from, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UsersDataService {
  constructor(private http: HttpClient) { }
  //get rest api
  public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users?page=1';
    return this.http.get<UserInformation>(url);

  }
  //post rest api
  createUsers(user: UserInformation[]) {
    return this.http.post('https://reqres.in/api/users', user).
      pipe(
        map((data: any) => {
          return data;
        }), catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  }

  //delete rest api
  deleteUser(id: number) {
    const deleteEndpoint = "https://reqres.in/api/users/2" + id;
    return this.http.delete(deleteEndpoint);
  }

  callingFromTemplate() {
    console.log('Calling from Template Directly');
  }


  updateUser(id:number) {
    this.http.put<any>('https://reqres.in/api/users/2', id)
        .subscribe(data => this.http = data.id);
}

}

