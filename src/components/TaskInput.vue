<template>
    <div>
        <!-- Formulario para agregar nuevas tareas -->
    </div>
</template>

<script>
export default {
    name: 'TaskInput',
    data() {
        return {
            taskDescription: ''
        };
    },
    methods: {
        saveTask() {
            // Emitir un evento para guardar la tarea
            this.$emit('save-task', { date: this.selectedDate, description: this.taskDescription });
            this.taskDescription = ''; // Limpiar el campo de descripción después de guardar la tarea
        }
    }
}
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
