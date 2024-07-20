# Task Manager

A simple task manager application built with Vue 3 and Node.js, utilizing Bootstrap for styling and modals made for Jr Technical Test (Redsquare).

## Features

- List tasks
- Add tasks via modal
- Edit tasks via modal
- Delete tasks
- User authentication (login/logout)
- Protected routes

## Technologies Used

- Vue 3
- Node.js
- Express
- MySQL
- Sequelize
- Axios
- Bootstrap 5
- JWT (JSON Web Tokens)

## Project Setup

### Prerequisites

- Node.js (v18.9.x or later)
- MySQL

### Backend Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/proappple123/task-manager.git
    cd task-manager
    ```

2. **Navigate to the backend directory and install dependencies**:

    ```bash
    cd backend
    npm install
    ```

**Configure the database connection**:

    Edit the `backend/config/config.json` file with your MySQL credentials:

    {
      "development": {
        "username": "root",
        "password": "your_password",
        "database": "task_manager",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }

    Edit the `backend/config/database.js` file with your MySQL credentials:

    const sequelize = new Sequelize('task_manager', 'root', 'your_password', {
        host: '127.0.0.1',
        port: 3306, 
        dialect: 'mysql',
    });

4. **Run the backend server**:

    ```bash
    node index.js
    ```

### Frontend Setup

1. **Navigate to the frontend directory and install dependencies**:

    ```bash
    cd task-manager
    npm install
    ```

2. **Run the frontend development server**:

    ```bash
    npm run serve
    ```

3. **Open your browser and navigate to `http://localhost:8080`**.

### Database Setup

1. **Run migrations to create the necessary tables**:

    ```bash
    cd backend
    npx sequelize-cli db:migrate
    ```

2. **Seed the database with initial data**:

    ```bash
    cd backend
    npx sequelize-cli db:seed:all
    ```

### Project Structure

#### Backend (`backend` directory)

- `index.js`: Entry point for the backend server.
- `config/database.js`: Sequelize configuration for MySQL.
- `config/config.json`: Database configuration file.
- `models/`: Sequelize models for User and Task entities.
- `controllers/`: Controllers for authentication and task management.
- `routes/`: Express routes for authentication and task management.
- `middlewares/authMiddleware.js`: Middleware for protecting routes.

#### Frontend (`frontend` directory)

- `src/main.js`: Entry point for the Vue application.
- `src/router/index.js`: Vue Router configuration.
- `src/components/`: Vue components for Login, TaskList, and modals.
- `src/components/modals/AddTaskModal.vue`: Modal component for adding tasks.
- `src/components/modals/EditTaskModal.vue`: Modal component for editing tasks.

## Usage

### Adding a Task

1. **Click on the "Add Task" button** on the task list page.
2. **Fill in the task details** in the modal that appears.
3. **Click the "Add Task" button** to save the task.

### Editing a Task

1. **Click the "Edit" button** next to the task you want to edit.
2. **Modify the task details** in the modal that appears.
3. **Click the "Update Task" button** to save the changes.

### Deleting a Task

1. **Click the "Delete" button** next to the task you want to delete.

### User Authentication

1. **Navigate to `/login`** to access the login page.
2. **Enter your email and password** and submit the form.
3. **On successful login**, the token is stored in localStorage and you are redirected to the task list.
4. **Click the "Logout" button** to log out and clear the token from localStorage.

