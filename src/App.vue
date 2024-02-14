<template>
  <div>
    <h1 class="task-title text-center mb-4">Mi Lista de Tareas</h1>
    <p class="text-center">Selecciona un dia y escribe tu tarea pendiente</p>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <CalendarWidget @date-selected="handleDateSelected" />
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <div class="task-input">
            <textarea v-model="taskText" class="form-control" rows="5" placeholder="Escribe tu tarea aquí"
              style="width: 400px;"></textarea>
            <button @click="saveTask" class="btn btn-primary mt-3" style="width: 40%;">Guardar tarea</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWidget from './components/CalendarWidget.vue';

export default {
  components: {
    CalendarWidget
  },
  data() {
    return {
      taskText: ''
    };
  },
  methods: {
    handleDateSelected(date) {
      console.log('Fecha seleccionada:', date);
    },
    saveTask() {
      // Lógica para guardar la tarea
    }
  }
};
</script>

<style scoped>
.task-title {
  margin-bottom: 70px; /* Ajusta el margen inferior */
}

.task-input {
  margin-top: 20px;
  text-align: center;
}
</style>



