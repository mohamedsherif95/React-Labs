export const Table1 = (props) => {
  return (
    <div>
      <table className="table1">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.number}</td>
            <td>{props.name}</td>
            <td>{props.course}</td>
            <td>{props.grade}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
