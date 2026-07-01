# Task Manager

A full-stack Task Manager application built with **Spring Boot** (backend) and **React + Vite** (frontend). Create, edit, complete, and delete tasks through a clean REST API and UI.

## Tech Stack

- **Backend:** Java 17, Spring Boot 3, Spring Data JPA, H2 (in-memory database)
- **Frontend:** React 18, Vite, Axios
- **Tools:** Maven, npm

## Project Structure

```
task-manager/
├── backend/                # Spring Boot REST API
│   └── src/main/java/com/taskmanager/app/
│       ├── controller/      # REST controllers
│       ├── model/           # JPA entities
│       ├── repository/      # Spring Data repositories
│       ├── service/         # Business logic
│       └── exception/       # Error handling
└── frontend/                # React app
    └── src/
        ├── api/              # Axios API calls
        └── components/       # React components
```

## Getting Started

### Prerequisites

- Java 17+
- Maven (or use the included wrapper, if present)
- Node.js 18+ and npm

### Run the Backend

```bash
cd backend
mvn spring-boot:run
```

The API will start on **http://localhost:8080**.
H2 console is available at `http://localhost:8080/h2-console` (JDBC URL: `jdbc:h2:mem:taskdb`, user: `sa`, no password).

### Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will start on **http://localhost:5173**.

> Make sure the backend is running first, otherwise the frontend won't be able to fetch tasks.

## API Endpoints

| Method | Endpoint            | Description          |
|--------|----------------------|-----------------------|
| GET    | `/api/tasks`          | Get all tasks         |
| GET    | `/api/tasks/{id}`     | Get a task by ID      |
| POST   | `/api/tasks`           | Create a new task     |
| PUT    | `/api/tasks/{id}`     | Update a task         |
| DELETE | `/api/tasks/{id}`     | Delete a task         |

### Example request body (POST / PUT)

```json
{
  "title": "Learn Spring Boot",
  "description": "Finish the REST API tutorial",
  "completed": false
}
```

## Opening the Project in VS Code

1. Open VS Code.
2. `File > Open Folder` → select the `task-manager` folder (this contains both `backend` and `frontend`).
3. Install recommended extensions when prompted:
   - **Extension Pack for Java** (backend)
   - **Spring Boot Extension Pack** (backend)
   - **ES7+ React/Redux/React-Native snippets** (frontend, optional)
4. Open two integrated terminals (`` Ctrl+` ``) — one for `backend`, one for `frontend` — and run the commands above in each.

## Pushing to GitHub

```bash
cd task-manager
git init
git add .
git commit -m "Initial commit: Task Manager (Spring Boot + React)"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

## Future Improvements

- Switch H2 to a persistent database (PostgreSQL / MySQL)
- Add user authentication
- Add due dates and priority levels for tasks
- Deploy backend and frontend (e.g. Render/Railway + Vercel/Netlify)
