import axios from "axios";

const STUDENT_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  getAllStudent() {
    return axios.get(STUDENT_URL);
  }

  addStudent(student) {
    return axios.post(STUDENT_URL, student);
  }

  getStudentByid(stuid) {
    return axios.get(STUDENT_URL + "/" + stuid);
  }

  updateStudent(student) {
    return axios.put(STUDENT_URL, student);
  }

  deleteStudent(stuid) {
    return axios.delete(STUDENT_URL + "/" + stuid);
  }
}

export default new StudentService();
