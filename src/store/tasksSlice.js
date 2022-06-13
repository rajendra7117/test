import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState: {tasks: [], editingTask: {}, isEditing: false, showForm: false, showTasks: true, showModal: false},
    reducers:{
        addTask(state, action){
            state.tasks = [...state.tasks, action.payload]
        },
        editTask(state, action){
            let taskId = action.payload.id 
            let taskIndex = state.tasks.findIndex((task) => task.id===taskId)
            state.tasks[taskIndex] = action.payload.task
        },
        editingTask(state, action){
            state.editingTask = action.payload
        
        },
        editing(state, action){
                state.isEditing = true
        },

        notEditing(state){
            state.isEditing=false
           
        },
        showForm(state){
            state.showForm=true
        },
        hideForm(state, action){
            state.showForm = false
        },
        showTasks(state, action){
            state.showTasks = true
        },
        hideTasks(state, action){
            state.showTasks = false
        },

        deleteTask(state){
            let id = state.editingTask.id
            state.tasks = state.tasks.filter((task) => task.id!==id)
            state.isEditing = !state.isEditing
            state.showForm = false 
            state.showTasks = true 
            state.showModal = false
            state.editingTask = {}
        },
        displayModal(state, action){
            state.showModal = true
        },
        hideModal(state, action){
            state.showModal = false
        }

    }
})

export const tasksSliceActions = tasksSlice.actions

export default tasksSlice