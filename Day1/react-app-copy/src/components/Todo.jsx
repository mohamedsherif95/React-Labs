export const Todo = (props) => {
  return (
    <div>
      <dl>
        <dt>{props.name}</dt>
        <dd>{props.desc}</dd>
      </dl>
    </div>
  );
};
