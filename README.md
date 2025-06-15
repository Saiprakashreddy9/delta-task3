# 🎵 DTunes - Music Player Web Application

A full-stack music player web application built with React.js frontend and Node.js/Express backend, featuring user authentication and music streaming capabilities.

## 🚀 Features

- **User Authentication System**
  - User registration (SignUp)
  - User login (SignIn)
  - Password validation and user verification
  - Secure user session management

- **Music Player Interface**
  - Clean and intuitive user interface
  - Responsive design for all devices
  - Modern React-based frontend
  - Interactive music player controls

- **Backend API**
  - RESTful API endpoints
  - MongoDB database integration
  - User data management
  - CORS enabled for cross-origin requests

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool and development server
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Core functionality

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Body-parser** - Request parsing middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
dtunes/
├── backend/
│   ├── db.js                 # Database connection and models
│   ├── server.js             # Express server and API routes
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx       # Main application component
│   │   │   ├── Home.jsx      # Home page component
│   │   │   ├── SignIn.jsx    # Login component
│   │   │   ├── SignUp.jsx    # Registration component
│   │   │   └── Footer.jsx    # Footer component
│   │   ├── assets/           # Static assets (images, icons)
│   │   ├── index.css         # Global styles
│   │   ├── main.jsx          # React entry point
│   │   └── package.json      # Frontend dependencies
└── README.md                 # This file
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Backend Setup

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/dtunes.git
cd dtunes/backend
```

2. **Install backend dependencies:**
```bash
npm install express mongoose body-parser cors
```

3. **Set up MongoDB:**
   - Create a MongoDB Atlas cluster or use local MongoDB
   - Update the connection string in `db.js`:
```javascript
mongoose.connect('your-mongodb-connection-string')
```

4. **Start the backend server:**
```bash
node server.js
```
The server will run on `http://localhost:3000`

### Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd ../frontend
```

2. **Install frontend dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```
The frontend will run on `http://localhost:5173` (Vite default)

## 🔧 API Endpoints

### Authentication Routes

#### POST /signup
Register a new user
```json
{
  "username": "string (3-30 characters)",
  "password": "string (minimum 6 characters)"
}
```

**Response:**
```json
{
  "msg": "User created successfully!!!",
  "name": "username"
}
```

#### POST /signin
Authenticate existing user
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "msg": "signed in sucessfully!!!",
  "name": "username"
}
```

## 🗄️ Database Schema

### User Model
```javascript
{
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}
```

## 🎯 Usage

1. **Registration**: New users can create an account using the SignUp component
2. **Login**: Existing users can log in using the SignIn component
3. **Home Page**: After authentication, users can access the main music player interface
4. **Music Player**: Browse and play music tracks (implementation depends on additional features)

## 🔒 Security Notes

⚠️ **Important Security Considerations:**

- **Password Hashing**: Currently, passwords are stored in plain text. For production, implement password hashing using bcrypt:
```javascript
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
```

- **JWT Tokens**: Consider implementing JWT tokens for secure session management
- **Environment Variables**: Store sensitive data like MongoDB connection strings in environment variables
- **Input Validation**: Add comprehensive input validation and sanitization

## 🌟 Future Enhancements

- [ ] **Security Improvements**
  - Password hashing with bcrypt
  - JWT token authentication
  - Input validation and sanitization
  - Rate limiting for API endpoints

- [ ] **Music Features**
  - Music file upload and storage
  - Playlist creation and management
  - Search functionality
  - Music streaming capabilities
  - Favorite songs feature

- [ ] **UI/UX Improvements**
  - Loading states and error handling
  - Dark/light theme toggle
  - Mobile-responsive design
  - Audio visualizations
  - Progress bars and time display

- [ ] **Additional Features**
  - User profiles and avatars
  - Social features (sharing, following)
  - Music recommendations
  - Offline playback support
  - Admin panel for content management

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Verify your MongoDB connection string
- Ensure your IP is whitelisted in MongoDB Atlas
- Check if MongoDB service is running (for local installations)

**CORS Errors:**
- Ensure CORS middleware is properly configured
- Check if frontend and backend URLs match

**Port Conflicts:**
- Backend runs on port 3000, frontend on 5173
- Change ports if conflicts occur

## 📝 Scripts

### Backend
```bash
npm start          # Start the server
node server.js     # Direct server start
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



**Built with ❤️ for music lovers everywhere! 🎶**

*Start your musical journey with DTunes today!*
