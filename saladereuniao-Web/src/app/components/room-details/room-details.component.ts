import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/service/room/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: string;
  room: Room;

  constructor(private roomService: RoomService,
              private routerActive: ActivatedRoute) { }

  ngOnInit(): void {

    this.room = new Room();

    this.id = this.routerActive.snapshot.paramMap.get('id');

    this.roomService.getRoom(this.id)
    .subscribe(data => {
      console.log(data);
      this.room = data;
    },
      error => console.log(error)
    );
  }

  list(): void {
    this.roomService.goToList();
  }

}
