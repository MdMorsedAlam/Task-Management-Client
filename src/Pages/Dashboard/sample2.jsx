// import { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { BsArchiveFill } from "react-icons/bs";
import useTasks from "../../Hooks/UseTasks/useTasks";
import Task from "./Task/Task";
// import { BiSolidMessageSquareEdit } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import useAxiosPublic from "../../Hooks/UseAxiosPublic/useAxiosPublic";
// import toast from "react-hot-toast";

const Dashboard = () => {
  const [taskss, ,loading] = useTasks();
  // const axiosPublic = useAxiosPublic();
console.log(taskss);
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

  const hedTitle = [
    { title: "TODO", titleBg: "bg-red", bg: "bg-green" },
    { title: "OnGoing", titleBg: "bg-blue", bg: "bg-red" },
    { title: "Completed", titleBg: "bg-green", bg: "bg-blue" },
  ];

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="p-5">
      <h1 className="text-center font-bold mb-10 text-5xl">
        Manage Your Tasks
      </h1>
      <div className="flex gap-4">
        {hedTitle?.map((title, index) => (
          <div className={`${title.bg}-500 flex-1`} key={index}>
            <h1
              className={`text-center text-violet-500 font-semibold text-3xl ${title.titleBg}-500`}
            >
              {title?.title}
            </h1>
            <div>
              {
                taskss?.map(task=><Task task={task} key={task._id}/>)
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
