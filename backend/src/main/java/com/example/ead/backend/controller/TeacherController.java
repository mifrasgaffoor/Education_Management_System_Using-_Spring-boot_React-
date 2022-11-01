package com.example.ead.backend.controller;

import com.example.ead.backend.exception.NotFound;
import com.example.ead.backend.model.Teacher;
import com.example.ead.backend.repository.TeacherRepo;
import com.example.ead.backend.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v2/teachers")
public class TeacherController {

    @Autowired

    private TeacherService teacherService;

    @Autowired
    private TeacherRepo teacherRepo ;

    // ALL CRUD API

    @GetMapping
    public List<Teacher> getAllTeachers (){return  teacherService.getTeachers();}

    //CREATE TEACHER API
     @PostMapping
     public  Teacher createTeacher (@RequestBody Teacher teacher) {
        return  teacherRepo.save(teacher);
     }


     // GETBYID
    @GetMapping("{id}")
    public ResponseEntity<Teacher> getTeacherById (@PathVariable int id ){
        Teacher teacher = teacherService.oneTeacher(id).orElseThrow(()-> new NotFound("Teachers Not Exits" + id));
        return  ResponseEntity.ok(teacher);
    }

    @PutMapping
    public Teacher updateTeacher(@RequestBody Teacher teacher){
        return  teacherService.updateTeacher(teacher);
    }


  @DeleteMapping ("{id}")
    public  ResponseEntity<Teacher> deleteTeacher (@PathVariable int id ) {
     String deleteTeacher = teacherService.deleteTeacher(id);
     return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

}
