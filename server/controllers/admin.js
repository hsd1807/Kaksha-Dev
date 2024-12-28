import tryCatch from "../middlewares/tryCatch.js";
import { Course } from "../models/course.js";
import { Lecture } from "../models/lecture.js";

export const createCourse = tryCatch(async(req, res) => {
    const {title, description, category, createdBy, duration, price} = req.body;

    const image = req.file;

    await Course.create({
        title,
        description,
        category,
        createdBy,
        image: image?.path,
        duration,
        price,
    });

    res.status(201).json({
        message: "Course created successfully",
    });
});

export const addLecture = tryCatch(async(req,res) => {
    const course = await Course.findById(req.params.id);

    if (!course) return res.status(404).json({
        message: "No Course with this ID",
    });

    const {title, description} = req.body;

    const file = req.file;

    const lecture = await Lecture.create({
        title,
        description,
        video: file?.path,
        course: course._id,
    });

    res.status(201).json({
        message: "Lecture Added",
        lecture,
    });
});
