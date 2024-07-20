<template>
    <div class="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editTaskModalLabel">Edit Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitTask">
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="task.title"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  id="description"
                  v-model="task.description"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="form-check mb-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="completed"
                  v-model="task.completed"
                />
                <label class="form-check-label" for="completed">Completed</label>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Update Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script type="module">
  import axios from "axios";
  import * as bootstrap from 'bootstrap';
  
  export default {
    props: ['taskId'], 
    data() {
      return {
        task: {
          title: "",
          description: "",
          completed: false,
        },
      };
    },
    watch: {
      taskId(newVal) {
        if (newVal) {
          this.fetchTask(newVal);
        }
      },
    },
    methods: {
      fetchTask(id) {
        axios
          .get(`http://localhost:3000/api/tasks/${id}`)
          .then((response) => {
            this.task = response.data;
          })
          .catch((error) => {
            console.error("Error fetching task:", error);
          });
      },
      submitTask() {
        axios.put(`http://localhost:3000/api/tasks/${this.taskId}`, this.task).then(() => {
          this.$emit('task-updated');
          const modalElement = document.getElementById('editTaskModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-light {
    background-color: #f8f9fa !important;
  }
  
  .card {
    border: none;
    border-radius: 0.75rem;
  }
  
  .card-body {
    padding: 2rem;
  }
  
  .card-title {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .form-label {
    font-weight: 500;
  }
  
  .form-check-label {
    margin-left: 0.5rem;
    font-weight: 500;
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
  </style>
  