package com.example.ead.backend.services;


import com.example.ead.backend.model.Student;
import com.example.ead.backend.model.Teacher;
import com.example.ead.backend.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepo teacherRepo;

    public List<Teacher> getTeachers(){
        return  teacherRepo.findAll();
    }

    public Optional<Teacher>  oneTeacher(int id ){
        return teacherRepo.findById(id);
    }



    public  Teacher updateTeacher(Teacher teacher){
        Teacher tech = teacherRepo.findById(teacher.getId()).get();
        tech.setName(teacher.getName());
        tech.setSubject(teacher.getSubject());
        tech.setHomeDown(teacher.getHomeDown());
        return  teacherRepo.save(teacher);
    }

    public  String deleteTeacher(int id ){
       if(teacherRepo.existsById(id)){
           teacherRepo.deleteById(id);
           return  "Deleted";
       }else{
           return  "Not";
       }
    }


}
