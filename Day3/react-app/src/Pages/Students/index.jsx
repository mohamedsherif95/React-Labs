import { useState } from "react";
import { AddStudent } from "../../components/AddStudent";
import { ViewList } from "../../components/ViewList";

export const Students = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDelete = () => {
    setStudents([]);
  };
  return (
    <div className="row">
      <h1>Students</h1>
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
          <tbody>
            <ViewList students={students} />
          </tbody>
        </table>
      </div>
    </div>
  );
};
