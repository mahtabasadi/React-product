import WithCount from "../hoc/WithCount";

const ClickCounter = ({ count, IncrementCount }) => {
  return (
    <div>
      <h2 onClick={IncrementCount}>hovered {count} times</h2>
    </div>
  );
};

export default WithCount(ClickCounter);
