// import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { BsArchiveFill } from "react-icons/bs";
import useTasks from "../../Hooks/UseTasks/useTasks";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/UseAxiosPublic/useAxiosPublic";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [taskss, refetch] = useTasks();
  const axiosPublic = useAxiosPublic();
  const todoData = taskss?.filter((task) => task.status === "Todo");
  const onGoingData = taskss?.filter((task) => task.status === "OnGoing");
  const completedData = taskss?.filter((task) => task.status === "Completed");
  const handelDelete = async (task) => {
    const result = await axiosPublic.delete(`/task/${task._id}`);
    if (result.data.deletedCount > 0) {
      toast.success(`You Have Successfully Deleted ${task.title} Task`, {
        duration: 3000, // Duration in milliseconds
        position: "top-right", // Toast position on the screen
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
      refetch();
    }
  };
  const handelSatusChange=async(stText,id)=>{
    const result=await axiosPublic.patch(`/taskupdate/${id}`,{stText})
    if(result.data.modifiedCount>0){
      toast.success(`You Have Successfully Updated Status`, {
        duration: 3000, // Duration in milliseconds
        position: "top-right", // Toast position on the screen
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
      refetch();
    }
  }
  return (
    <div className="p-5">
      <h1 className="text-center font-bold mb-10 text-5xl">
        Manage Your Tasks
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <DragDropContext onDragEnd={() => {}}>
          <div className="bg-red-500 flex-1 rounded-md">
            <h1 className="text-center bg-violet-400 p-3 text-3xl font-semibold">
              To Do
            </h1>
            <Droppable droppableId="TODO" type="group">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="grid grid-cols-2 p-3 gap-2"
                >
                  {todoData?.map((task, index) => (
                    <Draggable
                      draggableId={task._id}
                      index={index}
                      key={task._id}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="bg-base-100 rounded-md shadow-xl"
                        >
                          <div className="flex flex-col p-3 ">
                            <h2 className="text-2xl font-semibold">
                              {task.title}
                            </h2>
                            <p className="text-lg font-semibold">
                              {task.priority}
                            </p>
                            <p className="text-lg italic font-semibold">
                              {task.date}
                            </p>
                            <p className="text-[#222222]">{task.des}</p>
                            <div className="flex mt-3 gap-3">
                              <button onClick={() => handelDelete(task)}>
                                <BsArchiveFill className="text-xl text-red-500" />
                              </button>
                              <Link to={`updatetask/${task._id}`}>
                                <BiSolidMessageSquareEdit className="text-2xl text-green-500" />
                              </Link>
                            </div>
                            <div className="flex flex-col gap-2 mt-3 overflow-hidden">
                              <button className="btn btn-xs btn-accent" onClick={()=>handelSatusChange("OnGoing",task._id)}>Ongoing</button>
                              <button className="btn btn-xs btn-accent"  onClick={()=>handelSatusChange("Completed",task._id)}>Completed</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div className="bg-green-500 rounded-md flex-1">
            <h1 className="text-center bg-yellow-400 p-3 text-3xl font-semibold">
              On Going
            </h1>
            <Droppable droppableId="ONGOINg" type="group">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="grid grid-cols-2 p-3 gap-2"
                >
                  {onGoingData?.map((task, index) => (
                    <Draggable
                      draggableId={task._id}
                      index={index}
                      key={task._id}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="bg-base-100 rounded-md shadow-xl"
                        >
                          <div className="flex flex-col p-3 ">
                            <h2 className="text-2xl font-semibold">
                              {task.title}
                            </h2>
                            <p className="text-lg font-semibold">
                              {task.priority}
                            </p>
                            <p className="text-lg italic font-semibold">
                              {task.date}
                            </p>
                            <p className="text-[#222222]">{task.des}</p>
                            <div className="flex mt-3 gap-3">
                              <button onClick={() => handelDelete(task)}>
                                <BsArchiveFill className="text-xl text-red-500" />
                              </button>
                              <Link to={`updatetask/${task._id}`}>
                                <BiSolidMessageSquareEdit className="text-2xl text-green-500" />
                              </Link>
                            </div>
                            <div className="flex flex-col gap-2 mt-3 overflow-hidden">
                              <button className="btn btn-xs btn-accent" onClick={()=>handelSatusChange("OnGoing",task._id)}>Ongoing</button>
                              <button className="btn btn-xs btn-accent"  onClick={()=>handelSatusChange("Completed",task._id)}>Completed</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="bg-blue-500 rounded-md flex-1">
            <h1 className="text-center bg-lime-500 p-3 text-3xl font-semibold">
              Completed
            </h1>
            <Droppable droppableId="COMPLETED" type="group">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="grid grid-cols-2 p-3 gap-2"
                >
                  {completedData?.map((task, index) => (
                    <Draggable
                      draggableId={task._id}
                      index={index}
                      key={task._id}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="bg-base-100 rounded-md shadow-xl"
                        >
                          <div className="flex flex-col p-3 ">
                            <h2 className="text-2xl font-semibold">
                              {task.title}
                            </h2>
                            <p className="text-lg font-semibold">
                              {task.priority}
                            </p>
                            <p className="text-lg italic font-semibold">
                              {task.date}
                            </p>
                            <p className="text-[#222222]">{task.des}</p>
                            <div className="flex mt-3 gap-3">
                              <button onClick={() => handelDelete(task)}>
                                <BsArchiveFill className="text-xl text-red-500" />
                              </button>
                              <Link to={`updatetask/${task._id}`}>
                                <BiSolidMessageSquareEdit className="text-2xl text-green-500" />
                              </Link>
                            </div>
                            <div className="flex flex-col gap-2 mt-3 overflow-hidden">
                              <button className="btn btn-xs btn-accent" onClick={()=>handelSatusChange("OnGoing",task._id)}>Ongoing</button>
                              <button className="btn btn-xs btn-accent"  onClick={()=>handelSatusChange("Completed",task._id)}>Completed</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Dashboard;
