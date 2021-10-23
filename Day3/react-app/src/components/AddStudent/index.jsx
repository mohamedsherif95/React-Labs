import { Input } from "./../Input";
import { useState } from "react";

export const AddStudent = (props) => {
  const [stid, setStid] = useState("");
  const [stName, setStName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = () => {
    props.addstudent({ stid, stName, course, grade });
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
    </div>
  );
};
