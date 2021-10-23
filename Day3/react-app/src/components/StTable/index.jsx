export const StTable = (props) => {
  return (
    <tr>
      <td>{props.stid}</td>
      <td>{props.stName}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td>
        <button className="btn btn-danger m-1" onClick={props.removestudent}>
          X
        </button>
      </td>
    </tr>
  );
};
