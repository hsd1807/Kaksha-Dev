import { instance } from "../index.js";
import tryCatch from "../middlewares/tryCatch.js";
import { Course } from "../models/course.js";
import { Lecture } from "../models/lecture.js";
import { Payment } from "../models/payment.js";
import { User } from "../models/user.js";
import crypto from "crypto";

export const getAllCourses = tryCatch(async(req, res) => {
    const courses = await Course.find();
    res.json({
        courses,
    });
});

export const getSingleCourse = tryCatch(async(req, res) => {
    const course = await Course.findById(req.params.id);

    res.json({
        course,
    });
});

export const fetchLectures = tryCatch(async(req, res) => {
    const lectures = await Lecture.find({course: req.params.id});

    const user = await User.findById(req.user._id);

    if (user.role === "admin") {
        return res.json({ lectures });
    }

    if (!user.subscription.includes(req.params.id))
        return res.status(400).json({
        message: "You have not subscribed to this course.",
    });

    res.json({ lectures });
});

export const fetchLecture = tryCatch(async (req, res) => {
    const lecture = await Lecture.findById(req.params.id);

    const user = await User.findById(req.user._id);

    if (user.role === "admin") {
        return res.json({ lecture });
    }

    if (!user.subscription.includes(req.params.id))
        return res.status(400).json({
        message: "You have not subscribed to this course.",
    });

    res.json({ lecture });
});

export const getMyCourses = tryCatch(async(req, res) => {
    const courses = await Course.find({ _id: req.user.subscription });

    res.json({
        courses,
    });
});

export const checkout = tryCatch(async(req, res) => {
    const user = await User.findById(req.user._id);

    const course = await Course.findById(req.params.id);

    if (user.subscription.includes(course._id)) {
        return res.status(400).json({
            message: "You already have this Course",
        });
    }

    const options = {
        amount: Number(course.price * 100),
        currency: "INR",
    };

    const order = await instance.orders.create(options);

    res.status(201).json({
        order,
        course,
    });
});


export const paymentVerification = tryCatch(async(req, res) => {
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac("sha256", process.env.Razorpay_Secret).update(body).digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        await Payment.create({ razorpay_order_id, razorpay_payment_id, razorpay_signature, });

        const user = await User.findById(req.user._id);
        const course = await Course.findById(req.params.id);

        user.subscription.push(course._id);

        await user.save();

        res.status(200).json({
            message: "Course Purchased Successfully!",
        });
    } else {
        return res.status(400).json({
            message: "Payment Failed",
        })
    }
});
