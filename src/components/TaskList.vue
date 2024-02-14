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
export default {
    name: 'TaskList',
    props: ['tasks'], // Recibe las tareas como propiedades
    methods: {
        deleteTask(task) {
            this.$emit('task-deleted', task);
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








