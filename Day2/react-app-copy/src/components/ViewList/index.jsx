import { StTable } from "./../StTable";
export const ViewList = (props) => {
  const removeStudent = (e) => {
    e.target.parentElement.parentElement.remove();
  };
  return (
    <>
      <tbody>
        {props.students.map((st) => {
          return (
            <StTable
              removestudent={removeStudent}
              stid={st.stid}
              stName={st.stName}
              course={st.course}
              grade={st.grade}
            />
          );
        })}
      </tbody>
    </>
  );
};
