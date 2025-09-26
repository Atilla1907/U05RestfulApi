Projektbeskrivning

REST API byggt med Node.js, Express och MongoDB.
Hantera todos med CRUD: Create, Read, Update, Delete.
--------------------------------------------------------------
Installation och körning lokalt

1. Klona projektet:
git clone https://github.com/DITT-ANVÄNDARNAMN/todo-api.git
cd todo-api

2. Installera dependencies:
npm install

3. Skapa .env i projektets rot:
PORT=5000
MONGO_URI=din-mongodb-url

4. Starta servern:
npm run dev

API:et körs nu på:
http://localhost:5000
----------------------------------------------------------------------
Deploy
https://u05restfulapi.onrender.com
Start Command för Render:
npm start
------------------------------------------------------------------------
Endpoints
1. GET alla todos:   GET /api/v1/todos

2. GET en todo:  GET /api/v1/todos/:id

3. POST ny todo: POST /api/v1/todos
Body JSON: { "title": "Exempel", "description": "Test", "completed": false, "dueDate": "2025-09-30" }

4. PUT (uppdatera todo): PUT /api/v1/todos/:id
Body JSON: { "completed": true }

5. DELETE todo:  DELETE /api/v1/todos/:id
-----------------------------------------------------------------------------
videon kommer inte ha något ljud eftersom jag har en trasig mikrofon.