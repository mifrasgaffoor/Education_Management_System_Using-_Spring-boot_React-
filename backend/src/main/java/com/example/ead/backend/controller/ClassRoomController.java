package com.example.ead.backend.controller;

import com.example.ead.backend.model.ClassRoom;
import com.example.ead.backend.model.Teacher;
import com.example.ead.backend.services.ClassRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v3/classroom")
public class ClassRoomController {

    //CRUD for Class Room

    @Autowired
    private ClassRoomService   classRoomService;

    @GetMapping
    public List<ClassRoom> getAllClassRooms (){
        return  classRoomService.getAllClass();
    }

    //Create ClassRoom
    @PostMapping
    public  ClassRoom createClass (@RequestBody ClassRoom classRoom ){
            return  classRoomService.create(classRoom);
    }

    //Get ClassRooms

    @GetMapping("{id}")
    public Optional<ClassRoom> getClassRoomById( @PathVariable int id ){
        return  classRoomService.getOne(id);
    }

    // Update ClassRoomByID
     @PutMapping
      public  ClassRoom updateClassRoom( @RequestBody  ClassRoom classRoom){
        return  classRoomService.updateClassRoom(classRoom);
      }

    //DELETE ClassRoomById

    @DeleteMapping ("{id}")
    public ResponseEntity<Teacher> deleteTeacher (@PathVariable int id ) {
        String deleteTeacher = classRoomService.deleteClassRoom(id);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }


}
