import { Input } from "../";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddStudent = (props) => {
  const [stid, setStid] = useState("");
  const [stName, setStName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const isLoggedIn = localStorage.getItem("token") === "123";

  const history = useHistory();

  const handleSubmit = () => {
    props.addstudent({ stid, stName, course, grade });
  };

  const handleLogOut = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      history.replace("/login");
    }
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <Input
        value={stid}
        setValue={setStid}
        label="ID"
        placeholder={"Enter Student ID"}
      />
      <Input
        value={stName}
        setValue={setStName}
        label="St. Name"
        placeholder={"Enter Student Name"}
      />
      <Input
        value={course}
        setValue={setCourse}
        label="Course"
        placeholder={"Enter Course Name"}
      />
      <Input
        value={grade}
        setValue={setGrade}
        label="Grade"
        placeholder={"Enter Student Grade"}
      />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add Student
      </button>
      <button onClick={handleLogOut} className="btn btn-danger">
        Log out
      </button>
    </div>
  );
};
