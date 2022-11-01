import axios from "axios";

const TEACHER_URL = "http://localhost:8080/api/v2/teachers";

class TeacherService {
  getAllteacher() {
    return axios.get(TEACHER_URL);
  }

  addteacher(teacher) {
    return axios.post(TEACHER_URL, teacher);
  }

  getTeacherByid(teacherid) {
    return axios.get(TEACHER_URL + "/" + teacherid);
  }

  updateTeacher(teacher) {
    return axios.put(TEACHER_URL, teacher);
  }

  deleteTeacher(teacherid) {
    return axios.delete(TEACHER_URL + "/" + teacherid);
  }
}

export default new TeacherService();
