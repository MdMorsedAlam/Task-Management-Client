import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
const Task = ({ task, type, index,onTodo }) => {
  const [{ isDragable }, dragRef] = useDrag({
    type: type,
    item: () => ({ ...task, index }),

    collect: (monitor) => ({
      isDraging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && item) {
        onTodo(item)
      }
    },
  });
  return (
    <div
      ref={dragRef}
      className={`p-3 bg-orange-500 ${
        isDragable ? "opacity-60" : "opacity-100"
      }`}
    >
      <h1>{task?.title}</h1>
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.object.isRequired,
  type: PropTypes.node,
  index: PropTypes.node,
  onTodo: PropTypes.func,
};
export default Task;
