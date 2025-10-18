Day 4 – NestJS + MongoDB

### 1️⃣ Install – pnpm add @nestjs/mongoose mongoose @nestjs/config
### 2️⃣ .env – MONGO_URI=mongodb://127.0.0.1:27017/day4_db
### 3️⃣ ConfigModule – ConfigModule.forRoot({ isGlobal: true })
### 4️⃣ DB Connect – MongooseModule.forRoot(process.env.MONGO_URI)
### 5️⃣ User Schema – fields: name, email(unique), age, createdAt (+ timestamps)
### 6️⃣ Soft Delete Plugin – add isDeleted, deletedAt & hide in find/findOne
### 7️⃣ Users Module – module, controller, service generate + wire model
### 8️⃣ CRUD APIs – POST /users, GET /users, GET /users/:id, PUT /users/:id, DELETE /users/:id (soft)
### 9️⃣ Restore API – PUT /users/:id/restore
### 🔟 Validation – CreateUserDto, UpdateUserDto, ValidationPipe + MongoIdPipe


