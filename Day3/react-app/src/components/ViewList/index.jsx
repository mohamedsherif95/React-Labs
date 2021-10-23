import { StTable } from "./../StTable";
export const ViewList = (props) => {
  const removeStudent = (e) => {
    // e.target.parentElement.remove();
    let newRow = e.target.parentNode.parentNode;
    newRow.parentNode.removeChild(newRow);
  };
  return (
    <>
      {props.students.map((st, i) => {
        return (
          <StTable
            key={i}
            removestudent={removeStudent}
            stid={st.stid}
            stName={st.stName}
            course={st.course}
            grade={st.grade}
          />
        );
      })}
    </>
  );
};
