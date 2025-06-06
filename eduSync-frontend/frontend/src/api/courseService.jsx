import axios from 'axios';

const API_URL = 'https://localhost:7244/api';

export const getAllCourses = () =>
  axios.get(`${API_URL}/courses`);

export const enrollInCourse = (userId, courseId, token) =>
  axios.post(`${API_URL}/enrollments`, { userId, courseId }, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getEnrolledCourses = (userId, token) =>
  axios.get(`${API_URL}/enrollments/user/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  export const getInstructorCourses = (instructorId, token) =>
  axios.get(`https://localhost:7244/api/courses/instructor/${instructorId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const editCourse = (id, data, token) =>
  axios.put(`https://localhost:7244/api/courses/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const deleteCourse = (id, token) =>
  axios.delete(`https://localhost:7244/api/courses/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

