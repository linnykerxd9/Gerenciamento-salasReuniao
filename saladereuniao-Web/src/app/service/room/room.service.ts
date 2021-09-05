import { Params, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Room } from 'src/app/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms';

  constructor(private http: HttpClient,
              private router: Router) { }


  getRoom(id: string): Observable<any>{
    console.log(id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRoom(room: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, room);
  }

  updateRoom(id: string, value: any): Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRoom(id: string): Observable<any> {
    console.log(id);
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }

    getRoomList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }

    goToList(): void {
      this.router.navigate(['/rooms']);
    }
}
