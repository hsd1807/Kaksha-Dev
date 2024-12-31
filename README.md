# KakshaDev

KakshaDev is a modern e-learning marketplace that bridges traditional education with digital innovation. Built on the MERN stack, this platform offers a seamless environment for instructors to share knowledge through high-quality video content and for learners to enhance their skills.

## Features

### Core Features
* **Course Management**
  * Instructor dashboard for course creation and management
  * Video content upload and organization
  * Course pricing configuration

* **User Management**
  * Separate interfaces for learners and instructors
  * Course enrollment system
  * Integrated payment processing

* **Content Delivery**
  * Video streaming with playback controls
  * Lecture organization and management

### Additional Features
* Secure user authentication and account management
* Personalized dashboards for users and admins
* Secure payment gateway integration
* Course progress tracking

## Technology Stack

### Frontend
* React.js
* React Router for navigation
* CSS for styling
* Axios for HTTP requests

### Backend
* Node.js
* Express.js
* MongoDB with Mongoose
* JWT for authentication

## Getting Started

### Prerequisites
* Node.js installed on your machine
* MongoDB installed locally or a MongoDB Atlas account
* NPM or Yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/hsd1807/kaksha-dev.git
cd kaksha-dev
```

2. Install dependencies for backend
```bash
cd backend
npm install
```

3. Install dependencies for frontend
```bash
cd frontend
npm install
```

4. Create a `.env` file in the backend directory with the following variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret
Gmail=your_gmail_id
Password=your_password
```

5. Start the backend server
```bash
cd backend
npm run dev
```

6. Start the frontend application
```bash
cd frontend
npm run dev
```

## Database Schema

### Users
```javascript
{
  name: String,
  email: String,
  password: String,
  role: String,
  mainrole: String,
  subscription: Object,
  timestamps: true
}
```

### Courses
```javascript
{
  title: String,
  description: String,
  image: String,
  price: Number,
  duration: String,
  category: String,
  timestamps: true
}
```

### Lectures
```javascript
{
  title: String,
  description: String,
  video: String,
  course: ObjectId,
  createdAt: Date
}
```

### Progress
```javascript
{
  course: ObjectId,
  completedLectures: Array,
  user: ObjectId,
  timestamps: true
}
```

### Payment
```javascript
{
  razorpay_order_id: String,
  razorpay_payment_id: String,
  razorpay_signature: String,
  createdAt: Date
}
```

## Showcase
![HomePage](https://github.com/hsd1807/Kaksha-Dev/blob/main/assets/kd1.png)
![Admin Dashboard](https://github.com/hsd1807/Kaksha-Dev/blob/main/assets/kd2.png)
![Register](https://github.com/hsd1807/Kaksha-Dev/blob/main/assets/kd3.png)
![OTP Verification](https://github.com/hsd1807/Kaksha-Dev/blob/main/assets/kd4.png)
![OTP](https://github.com/hsd1807/Kaksha-Dev/blob/main/assets/kd5.png)
![Login](https://github.com/hsd1807/Kaksha-Dev/blob/main/assets/kd6.png)
![Payment](https://github.com/hsd1807/Kaksha-Dev/blob/main/assets/kd7.png)

## Security Features
* JWT based authentication
* Input validation and sanitization
* Password encryption
* Protected API endpoints
* Secure payment processing

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
* MongoDB Documentation
* Express.js Documentation
* React.js Documentation
* Node.js Documentation
* Razorpay Documentation
