package com.example.ead.backend;

import com.example.ead.backend.model.ClassRoom;
import com.example.ead.backend.model.Student;
import com.example.ead.backend.model.Teacher;
import com.example.ead.backend.repository.ClassRoomRepo;
import com.example.ead.backend.repository.StudentRepo;
import com.example.ead.backend.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

   @Autowired
   private StudentRepo studentRepo ;

    @Autowired
    private TeacherRepo teacherRepo;

    @Autowired
    private ClassRoomRepo classRoomRepo;

    @Override
    public void run(String... args) throws Exception {

        Student student1 =  new Student();
        student1.setFirstName("Perera");
        student1.setLastName("Kamal");
        student1.setEmailId("parera@gmail.com");
        studentRepo.save(student1);


        Student student2 =  new Student();
        student2.setFirstName("Ajantha");
        student2.setLastName("Amanda");
        student2.setEmailId("ajantha@gmail.com");
        studentRepo.save(student2);

        Teacher teacher1  =  new Teacher();
        teacher1.setName("Kavith");
        teacher1.setSubject("History");
        teacher1.setHomeDown("Colombo");
        teacherRepo.save(teacher1);

        ClassRoom classRoom = new ClassRoom();
        classRoom.setNameOfclass("Grade-10");
        classRoom.setClassDesc("which is situated in 2nd floor");
        classRoomRepo.save(classRoom);
    }
}
