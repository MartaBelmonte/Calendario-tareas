<template>
  <div>
    <!-- Encabezado -->
    <header class="bg-primary text-white py-4">
      <div class="container text-center">
        <h1 class="task-title mb-2">Mi Lista de Tareas</h1>
        <p class="lead mb-0">Selecciona un día y escribe tu tarea pendiente</p>
      </div>
    </header>

    <!-- Contenedor principal -->
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="height: 50vh;">
          <CalendarWidget @task-saved="handleTaskSaved" @show-task-form="toggleTaskForm" @date-selected="updateSelectedDate" />
        </div>

      <!-- Componente TaskList -->
        <div class="col-md-6 mt-5">
          <div class="task-list-container">
            <h2 class="text-center">Tareas Pendientes</h2>
            <TaskList :tasks="tasks" :selectedDate="selectedDate" />
          </div>
        </div>
      </div>
    </div>

    <!-- Input de texto y botón -->
    <div class="container" v-if="showTaskForm">
      <div class="row mt-1"> <!-- Reducido el margen top -->
        <div class="col-md-6 offset-md-6">
          <div class="input-group">
            <textarea v-model="taskText" rows="3" class="form-control mb-1"
              placeholder="Ingrese su tarea aquí"></textarea> <!-- Ajustar el margen inferior -->
            <button @click="saveTask" class="btn btn-primary btn-sm ml-2" style="height: 40px; line-height: 1;">Guardar tarea</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer bg-dark text-white py-3 mt-4 fixed-bottom">
      <div class="container text-center">
        <p class="mb-0">© 2024 Marta Belmonte Andrés</p>
      </div>
    </footer>
  </div>
</template>

<script>
import CalendarWidget from './components/CalendarWidget.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    CalendarWidget,
    TaskList
  },
  data() {
    return {
      tasks: [],
      taskText: '',
      selectedDate: null,
      showTaskForm: false // Estado para controlar la visibilidad del formulario
    };
  },
  methods: {
    updateSelectedDate(date) {
      this.selectedDate = date;
    },
    handleTaskSaved(taskInfo) {
      this.tasks.push(taskInfo);
    },
    toggleTaskForm() {
      console.log('Fecha recibida en App.vue:', this.selectedDate);
      this.showTaskForm = !this.showTaskForm;
    },
    saveTask() {
      if (this.taskText.trim() !== '') {
        this.handleTaskSaved({ date: this.selectedDate, text: this.taskText });
        this.taskText = ''; // Limpiar el campo de texto
      }
    },
    handleDateSelected(date) {
      this.selectedDate = date;
    }
  }
};
</script>

<style>
.task-title {
  margin-bottom: 10px;
}

.lead {
  font-size: 1.25rem;
}

.task-list-container {
  height: 40vh;
  /* Reducir la altura */
  overflow-y: auto;
}
</style>



















