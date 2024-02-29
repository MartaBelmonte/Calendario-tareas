<template>
    <div class="input-group">
        <textarea v-model="taskText" rows="3" class="form-control mb-1" placeholder="Ingrese su tarea aquí"></textarea> 
        <button @click="saveTask" class="btn btn-primary btn-sm ml-2" style="height: 40px; line-height: 1;">Guardar tarea</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskText: ''
        };
    },
    props: ['selectedDate'],
    methods: {
        saveTask() {
            if (this.taskText.trim() !== '') {
                const taskInfo = { id: this.generateUniqueId(), date: this.selectedDate, title: this.taskText };
                this.$emit('new-task', taskInfo);
                this.taskText = '';
            }
        },
        generateUniqueId() {
            return Math.random().toString(36).substr(2, 9); 
        }
    }
};
</script>

<style>
textarea.form-control {
    margin-bottom: 10px;
}

button.btn-primary {
    height: 40px;
    line-height: 1;
}
</style>





