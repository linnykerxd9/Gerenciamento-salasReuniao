import { CreateRoomComponent } from './create-room/create-room.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateRoomComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CreateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    UpdateRoomComponent,
  ]
})
export class ComponentsModule { }
