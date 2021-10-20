import { Todo } from "./components/Todo";

export const App = () => {
  const tasks = [
    {
      name: "Task 1",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore repudiandae aperiam aut amet. Laboriosam harum accusantium deserunt sed incidunt ab?",
    },
    {
      name: "Task 2",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore repudiandae aperiam aut amet. Laboriosam harum accusantium deserunt sed incidunt ab?",
    },
    {
      name: "Task 3",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore repudiandae aperiam aut amet. Laboriosam harum accusantium deserunt sed incidunt ab?",
    },
    {
      name: "Task 4",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore repudiandae aperiam aut amet. Laboriosam harum accusantium deserunt sed incidunt ab?",
    },
    {
      name: "Task 5",
      Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore repudiandae aperiam aut amet. Laboriosam harum accusantium deserunt sed incidunt ab?",
    },
  ];
  return (
    <div>
      <h1>Hello from Lab 1</h1>
      {tasks.map((task) => (
        <Todo name={task.name} desc={task.Desc} />
      ))}
    </div>
  );
};
