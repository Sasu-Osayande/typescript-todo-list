import {  v4 as uuidv4 } from "uuid";

// console.log(uuidv4());

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
// const form = document.getElementById("#new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const task = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  addListItem(newTask)
})

function addListItem(task: {
  id: string
  title:string
  completed: boolean
  createdAt: Date
}) {}