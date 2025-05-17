// server.js
import express from 'express';
import courses from "./course.js";
import logger from "./logger.js";
import validateQuery from './validateQuery.js';
import authenticate from './auth.js';

const app = express();
const PORT = 3000;

app.use(logger);

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses', authenticate, validateQuery, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;

    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    let filteredCourses = courses.filter(course => course.department === dept);

    if(level) {
        filteredCourses = filteredCourses.filter(course => course.level === level);
    }

    if(minCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits >= parseInt(minCredits));
    }

    if(maxCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits <= parseInt(maxCredits));
    }

    if(semester) {
        filteredCourses = filteredCourses.filter(course => course.semester === semester);
    }

    if(instructor) {
        const query = instructor.toLowerCase();
        filteredCourses = filteredCourses.filter(course => 
            course.instructor.toLowerCase().includes(query)
        );
    }

    res.status(200).json(filteredCourses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
