<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="mb-0">Task List</h5>
      <div>
        <button class="btn btn-primary me-2" @click="showAddTaskModal">Add Task</button>
        <button class="btn btn-secondary" @click="logout">Logout</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-4 mb-3" v-for="task in tasks" :key="task.id">
        <div class="card shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">{{ task.description }}</p>
            <p class="card-text">
              <small class="text-muted">Completed: {{ task.completed ? 'Yes' : 'No' }}</small>
            </p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-secondary btn-sm me-2" @click="showEditTaskModal(task.id)">Edit</button>
              <button class="btn btn-danger btn-sm" @click="deleteTask(task.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddTaskModal @task-added="fetchTasks"/>
    <EditTaskModal :taskId="currentTaskId" @task-updated="fetchTasks"/>
  </div>
</template>

<script>
import axios from 'axios';
import AddTaskModal from './modals/AddTaskModal.vue';
import EditTaskModal from './modals/EditTaskModal.vue';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap';

export default {
  components: {
    AddTaskModal,
    EditTaskModal,
  },
  data() {
    return {
      tasks: [],
      currentTaskId: null,
    };
  },
  methods: {
    fetchTasks() {
      axios.get('http://localhost:3000/api/tasks')
        .then((response) => {
          this.tasks = response.data;
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    },
    showAddTaskModal() {
      const modalElement = document.getElementById('addTaskModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    },
    showEditTaskModal(taskId) {
      this.currentTaskId = taskId;
      const modalElement = document.getElementById('editTaskModal');
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    },
    deleteTask(id) {
      axios.delete(`http://localhost:3000/api/tasks/${id}`)
        .then(() => {
          this.fetchTasks();
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'Login' });
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}

.card {
  border: none;
  border-radius: 0.75rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn-secondary:hover {
  background-color: #545b62;
  border-color: #4e555b;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
  transition: background-color 0.3s, border-color 0.3s;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
