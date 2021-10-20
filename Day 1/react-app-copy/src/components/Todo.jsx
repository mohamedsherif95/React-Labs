export const Todo = (props) => {
  return (
    <div>
      <dl>
        <dt>{props.name}</dt>
        <dd>{props.desc}</dd>
      </dl>
      {/* <h2>{props.name}</h2>
      <p>{props.desc}</p> */}
    </div>
  );
};
