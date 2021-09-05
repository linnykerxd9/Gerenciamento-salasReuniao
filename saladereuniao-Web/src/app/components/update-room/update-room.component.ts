
import { ActivatedRoute, Params } from '@angular/router';
import { Room } from './../../models/room';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room/room.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: string;
  room: Room;
  submitted = false;

  constructor(private roomService: RoomService,
              private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    this.room = new Room();

    this.id = this.routerActive.snapshot.paramMap.get('id');

    this.roomService.getRoom(this.id)
    .subscribe( data => {
      console.log(data);
      this.room = data;
    },
      error => console.log(error)
    );
  }

  updateRoom(): void {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => {
        console.log(data);
      },
        error => console.log(error)
    );
    this.room = new Room();
    this.roomService.goToList();
  }

}
