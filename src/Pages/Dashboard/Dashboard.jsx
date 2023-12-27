// import { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { BsArchiveFill } from "react-icons/bs";
import { useDrop } from "react-dnd";
// import useTasks from "../../Hooks/UseTasks/useTasks";
import Task from "./Task/Task";
import { useEffect, useState } from "react";
// import { BiSolidMessageSquareEdit } from "react-icons/bi";
// import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/UseAxiosPublic/useAxiosPublic";
import useAuth from "../../Hooks/UseAuth/useAuth";
// import toast from "react-hot-toast";

const Dashboard = () => {
  // const [taskss, , loading] = useTasks();
  const axiosPublic = useAxiosPublic();
  const [todo, setTodo] = useState();
  const [ongo, setongo] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const data = async () => {
      const res = await axiosPublic(`/tasks/${user.email}`);
      setTodo(res.data);
      setLoading(false);
    };
    data();
  }, [axiosPublic, user]);
  // const todoData = taskss?.filter((task) => task.status === "Todo");
  // const onGoingData = taskss?.filter((task) => task.status === "OnGoing");
  // const completedData = taskss?.filter((task) => task.status === "Completed");

  // const handelDelete = async (task) => {
  //   const result = await axiosPublic.delete(`/task/${task._id}`);
  //   if (result.data.deletedCount > 0) {
  //     toast.success(`You Have Successfully Deleted ${task.title} Task`, {
  //       duration: 3000, // Duration in milliseconds
  //       position: "top-right", // Toast position on the screen
  //       style: {
  //         backgroundColor: "green",
  //         color: "white",
  //       },
  //     });
  //     refetch();
  //   }
  // };
  // const handelSatusChange = async (stText, id) => {
  //   const result = await axiosPublic.patch(`/taskupdate/${id}`, { stText });
  //   if (result.data.modifiedCount > 0) {
  //     toast.success(`You Have Successfully Updated Status`, {
  //       duration: 3000, // Duration in milliseconds
  //       position: "top-right", // Toast position on the screen
  //       style: {
  //         backgroundColor: "green",
  //         color: "white",
  //       },
  //     });
  //     refetch();
  //   }
  // };

  const [{ isOver }, addToTodoRef] = useDrop({
    accept: "todo",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
  const [{ isOver: isTodoOver }, remodeFromTodoRef] = useDrop({
    accept: "ongo",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
  const moveTodoItem = (item) => {
    // const filterTodoData = todo.filter((_, i) => i !== item.index);
    setTodo((prev) => prev.filter((_, i) => i !== item.index));
    setongo((prev) => [...prev, item]);
  };
  const removeTodoItem = (item) => {
    setongo((prev) => prev.filter((_, i) => i !== item.index));
    setTodo((prev) => [...prev, item]);
  };
  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="p-5">
      <h1 className="text-center font-bold mb-10 text-5xl">
        Manage Your Tasks
      </h1>
      <div className="flex gap-4">
        <div ref={remodeFromTodoRef} className="bg-orange-400 flex-1">
          <h1 className="text-center bg-blue-500 font-semibold p-3">Todo </h1>
          <div
            className={`flex p-2 flex-col gap-4 ${
              isTodoOver ? "bg-red-500" : "bg-blue-600"
            }`}
          >
            {todo?.map((task, i) => (
              <Task
                key={task._id}
                type="todo"
                task={task}
                index={i}
                onTodo={moveTodoItem}
              />
            ))}
          </div>
        </div>
        {/* on going container */}
        <div ref={addToTodoRef} className="bg-green-500 flex-1">
          <h1 className="text-center bg-red-500 p-3">On Going</h1>
          <div
            className={`flex flex-col p-2 gap-4 ${
              isOver ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {ongo?.map((task, i) => (
              <Task
                key={task._id}
                type="ongo"
                task={task}
                index={i}
                onTodo={removeTodoItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
