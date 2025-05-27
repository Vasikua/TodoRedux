import { createAction } from "@reduxjs/toolkit"


export const addTask = createAction("tasks/addTask");
console.log(addTask("check the code"));
export const deleteTask = createAction("tasks/deleteTask");
console.log(deleteTask("check the code"))
export const toggleTaskCompleted = createAction("tasks/toggleTaskCompleted");
console.log(toggleTaskCompleted("check the code"))
export const setStatusFilter = createAction("filters/setStatusFilter");
console.log(setStatusFilter("check the code"))