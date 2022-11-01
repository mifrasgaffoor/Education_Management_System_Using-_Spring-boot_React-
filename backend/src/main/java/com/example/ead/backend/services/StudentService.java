package com.example.ead.backend.services;

import com.example.ead.backend.model.Student;
import com.example.ead.backend.model.Teacher;
import com.example.ead.backend.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    public List<Student> getAllStudents(){
        return  studentRepo.findAll();
    }

    public Optional<Student> getOne(int id){
        return  studentRepo.findById(id);
    }

    public Optional<Student> create(Student student){
        return Optional.of (studentRepo.save(student));
    }

    public Student updateStudent(Student student){
        Student stu = studentRepo.findById(student.getId()).get();
        stu.setFirstName(student.getFirstName());
        stu.setLastName(student.getLastName());
        stu.setEmailId(student.getEmailId());
        return  studentRepo.save(student);
    }




    public String deleteStu(int id ){
     if(studentRepo.existsById(id)){
         studentRepo.deleteById(id);
         return  id + "Deleted ";
     }else {
         return "Not Deleted";
     }

   }

}
