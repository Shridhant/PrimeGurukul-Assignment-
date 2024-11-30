AuthApp: Secure Authentication System
AuthApp is a simple authentication application that provides user signup, login, and access to a protected route. It demonstrates the use of modern web development technologies like React, Node.js, Express, and JSON Web Tokens (JWT).

Features
User Signup:

Create a new account with full name, email, and password.
Passwords are securely hashed using bcrypt.
User Login:

Authenticate using email and password.
Receives a JSON Web Token (JWT) upon successful login.
Protected Route:

Access restricted data using the token provided at login.
Displays a list of all registered users.
Responsive UI:

Clean and modern interface built with React and CSS.
Technologies Used
Backend:
Node.js: JavaScript runtime for server-side programming.
Express.js: Lightweight framework for building APIs.
bcryptjs: For hashing user passwords securely.
jsonwebtoken (JWT): For creating and verifying authentication tokens.
Frontend:
React: Component-based library for building the user interface.
Axios: For making HTTP requests to the backend.
React Router: For navigation between pages.
