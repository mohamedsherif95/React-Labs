import { AddStudent } from "./components/AddStudent";
import { useState } from "react";
import { ViewList } from "./components/ViewList";

export const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDelete = () => {
    setStudents([]);
  };

  // const removeStudent = (e) => {
  //   console.log("e.target.value");
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Add Student</h1>
          <AddStudent addstudent={addStudent} />
        </div>
        <div className="col-6">
          <h1>View List</h1>
          <button className="btn btn-danger m-2" onClick={handleDelete}>
            Reset
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
                <th>Remove</th>
              </tr>
            </thead>
            <ViewList students={students} />
          </table>
        </div>
      </div>
    </div>
  );
};
