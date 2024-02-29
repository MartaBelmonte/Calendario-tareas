<template>
    <div>
        <div class="task-list">
            <div v-for="task in tasks" :key="task.id">
                <div class="task-item">
                    <strong>{{ task.date }}:</strong> {{ task.title }}
                    <button @click="deleteTask(task)">Eliminar</button>
                </div>
                <hr class="task-divider">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TaskList',
    props: ['tasks'], 
    methods: {
        deleteTask(task) {
            axios.delete(`http://localhost:8000/tareas/${task.id}`)
                .then(() => {
                    console.log("Tarea eliminada:", task);
                    this.$emit('task-deleted', task);
                })
                .catch(error => {
                    console.error("Error al eliminar tarea:", error);
                });
        }
    }
};
</script>


<style scoped>
.task-list {
    background-color: #f0f0f0;
    border: 1px solid red;
    border-radius: 5px;
    padding: 40px;
}

.task-item {
    margin-bottom: 10px;
}

.task-divider {
    border-top: 1px solid #ccc;
    /* Línea de separación entre las tareas */
    margin-top: 20px;
    /* Espacio entre las tareas */
}
</style>








