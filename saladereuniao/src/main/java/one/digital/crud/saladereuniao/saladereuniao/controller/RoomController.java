package one.digital.crud.saladereuniao.saladereuniao.controller;


import one.digital.crud.saladereuniao.saladereuniao.exceptions.ResourceNotFoundException;
import one.digital.crud.saladereuniao.saladereuniao.model.Room;
import one.digital.crud.saladereuniao.saladereuniao.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(value = "http://localhost:4200")
public class RoomController {

    @Autowired
    private RoomRepository roomRepository;


    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @GetMapping("/rooms/{id}")
    public ResponseEntity<Room>  getRoomId(@PathVariable("id") Long id) throws ResourceNotFoundException {
        Room room = checkIfTheRoomExists(id, "Room not found: ");

        return ResponseEntity.ok().body(room);
    }

    @PostMapping("/rooms")
    public Room createRoom(@Valid @RequestBody Room room){
        return roomRepository.save(room);
    }

    @PutMapping("/rooms/{id}")
    public ResponseEntity<Room> updateRoom(@PathVariable("id") Long id, @Valid @RequestBody Room room) throws ResourceNotFoundException {
        Room roomVerify = checkIfTheRoomExists(id, "Room not found for this id: ");

        Room roomUpdated = roomRepository.save(room);

         return ResponseEntity.ok().body(roomUpdated);
    }

    @DeleteMapping("/rooms/{id}")
    public Map<String, Boolean> deleteRoom(@PathVariable("id") Long id) throws ResourceNotFoundException {
            Room room = checkIfTheRoomExists(id,"Room not found for this id:");

            roomRepository.deleteById(id);

            Map<String, Boolean> response = new HashMap<>();
            response.put("Deleted",Boolean.TRUE);
            return response;
    }

    private Room checkIfTheRoomExists(@PathVariable("id") Long id, String s) throws ResourceNotFoundException {
        return roomRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException(s + id)
        );
    }
}
