import api from "../api/api";

export const indexCourses = () => {
    api.get("/courses");
}

export const showCourses = (slug) => {
    api.get(`/courses/${slug}`);
}

export const storeCourse = (data) => {
    api.post("/courses", data);
}

export const updateCourse = (slug, data) => {
    api.put(`/courses/${slug}`, data);
}

export const deleteCourse = (slug) => {
    api.delete(`/courses/${slug}`);
}