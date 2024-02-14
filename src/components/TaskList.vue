<template>
    <div>
        <div class="task-list">
            <div v-for="(task, index) in tasks" :key="index">
                <div class="task-item">
                    <strong>{{ selectedDate }}:</strong> {{ task.text }}
                </div>
                <hr class="task-divider">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: ['tasks', 'selectedDate'], // Recibe las tareas y la fecha seleccionada como propiedades
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



