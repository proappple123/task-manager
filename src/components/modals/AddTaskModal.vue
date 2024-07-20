<template>
    <div class="modal fade" id="addTaskModal" tabindex="-1" aria-labelledby="addTaskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addTaskModalLabel">Add Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitTask">
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" v-model="task.title" required />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" v-model="task.description" required></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script type="module">
  import axios from 'axios';
  import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
  import * as bootstrap from 'bootstrap';
  
  export default {
    data() {
      return {
        task: {
          title: '',
          description: '',
          completed: false,
        },
      };
    },
    methods: {
      submitTask() {
        axios.post('http://localhost:3000/api/tasks', this.task).then(() => {
          this.$emit('task-added');
          const modalElement = document.getElementById('addTaskModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        });
      },
    },
  };
  </script>
  

  