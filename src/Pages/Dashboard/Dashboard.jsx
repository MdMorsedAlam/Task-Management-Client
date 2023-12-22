import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const initialTasks = [
  { id: "task-1", content: "Task 1" },
  { id: "task-2", content: "Task 2" },
  { id: "task-3", content: "Task 3" },
];
const Dashboard = () => {
  // const todolist = [
  //   { id: "1", name: "Item1" },
  //   { id: "2", name: "Item2" },
  //   { id: "3", name: "Item3" },
  // ];
  const [tasks, setTasks] = useState(initialTasks);
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newTasks = [...tasks]; // Create a new array
    const [removed] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, removed);

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Task Management</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task,index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {task.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
    // <DragDropContext onDragEnd={() => {}}>
    //   <div>
    //     <h1>ToDo List</h1>
    //   </div>
    //   <Droppable droppableId="TODO" type="group">
    //     {(provided) => (
    //       <div
    //         className="flex flex-col gap-5"
    //         ref={provided.innerRef}
    //         {...provided.droppableProps}
    //       >
    //         {todolist?.map((todo, index) => (
    //           <Draggable draggableId={todo.id} key={todo.id} index={index}>
    //             {(provided) => (
    //               <div
    //                 ref={provided.innerRef}
    //                 {...provided.dragHandleProps}
    //                 {...provided.draggableProps}
    //               >
    //                 <h1 className="bg-red-500 text-center text-white gap-5 p-5">
    //                   {todo.name}
    //                 </h1>
    //               </div>
    //             )}
    //           </Draggable>
    //         ))}
    //         {provided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Dashboard;
