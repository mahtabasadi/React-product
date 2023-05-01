import WithCount from "../hoc/WithCount";

const HoverCounter = ({count , IncrementCount}) => {
  return (
    <div>
      <h2 onMouseOver={IncrementCount}>hovered {count} times</h2>
    </div>
  );
};

export default WithCount(HoverCounter);
