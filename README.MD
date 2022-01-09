#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. imports mongoose in index.js and connect to database
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value for database

#### Routers

- auth.js=for registering and login users
-catagories.js 
- post.js
-user.js

#### User Model
-Post.js
-User.js
-Catagory.js


#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User


#### Login User

- Validate - email, password - in atuh route
- If email or password is missing, throw error
- Find User
- Compare Passwords
- If no user or password does not match, throw error
- If correct, successful login