import { Todo } from "./components/Todo";
import { Table1 } from "./components/Table1";

export const App = () => {
  const tasks = [
    {
      name: "Task 1",
      Desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      name: "Task 2",
      Desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      name: "Task 3",
      Desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      name: "Task 4",
      Desc: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      name: "Task 5",
      Desc: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  const students = [
    {
      number: "2",
      name: "ahmed",
      course: "HTML",
      grade: 90,
    },
    {
      number: "3",
      name: "ali",
      course: "CSS",
      grade: 86,
    },
    {
      number: "4",
      name: "emad",
      course: "mysql",
      grade: 90,
    },
  ];
  return (
    <div>
      <h1>Hello from Lab 1</h1>
      {tasks.map((task) => (
        <Todo name={task.name} desc={task.Desc} />
      ))}
      {students.map((st) => {
        return (
          <Table1
            number={st.number}
            name={st.name}
            course={st.course}
            grade={st.grade}
          ></Table1>
        );
      })}
    </div>
  );
};
