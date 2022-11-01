package com.example.ead.backend.controller;

import com.example.ead.backend.exception.NotFound;
import com.example.ead.backend.model.Student;
import com.example.ead.backend.repository.StudentRepo;
import com.example.ead.backend.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/api/v1/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepo studentRepo ;


    @GetMapping
    public List<Student> getAllStudents(){
        return  studentService.getAllStudents();
    }

    //Create Api
    @CrossOrigin("*")
    @PostMapping
    public Student createStudent(  @RequestBody  Student student ){
     studentService.create(student);
        return student;
    }

// Build Get Student By ID
    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById( @PathVariable int id ){
             Student student = studentService.getOne(id).orElseThrow(()-> new NotFound("Student Not Exits " + id ));
             return  ResponseEntity.ok(student);
    }

 // Build Update Student


    @PutMapping
    public Student updateStudent(@RequestBody Student student){
        return  studentService.updateStudent(student);
    }


    //Build Delete Rest Api
    @DeleteMapping("{id}")
    public  ResponseEntity<HttpStatus> deleteStudent ( @PathVariable  int id){
             String student =  studentService.deleteStu(id);
             return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
