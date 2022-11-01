package com.example.ead.backend.services;


import com.example.ead.backend.model.ClassRoom;
import com.example.ead.backend.repository.ClassRoomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassRoomService {

    @Autowired
    private ClassRoomRepo classRoomRepo;

    public List<ClassRoom> getAllClass(){
        return  classRoomRepo.findAll();
    }


   public  ClassRoom create(ClassRoom classRoom){
        return  classRoomRepo.save(classRoom);
   }

   public  Optional<ClassRoom> getOne(int id ){
        return classRoomRepo.findById(id);
   }

   public ClassRoom updateClassRoom(ClassRoom classRoom){
        ClassRoom c1 = classRoomRepo.findById(classRoom.getId()).get();
        c1.setNameOfclass(classRoom.getNameOfclass());
        c1.setClassDesc(classRoom.getClassDesc());
       return  classRoomRepo.save(classRoom);

   }

   public  String deleteClassRoom(int id){
     if(classRoomRepo.existsById(id)){
         classRoomRepo.deleteById(id);
         return  "Deleted";
     }
     else {
         return "Not Deleted";

     }
   }
}
