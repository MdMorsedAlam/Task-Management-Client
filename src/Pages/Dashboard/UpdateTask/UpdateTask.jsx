import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic/useAxiosPublic";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const UpdateTask = () => {
 const {id}=useParams();
const axiosPublic=useAxiosPublic();
const [task,setTask]=useState();
 useEffect(()=>{
  axiosPublic.get(`/task/${id}`)
  .then(res=>{setTask(res.data)})
  .catch(err=>{console.log(err);})
 },[id,axiosPublic]);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
 console.log(data);
      toast.success("I Am Working On It", {
        duration: 3000, // Duration in milliseconds
        position: "top-right", // Toast position on the screen
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
    reset();
  };
 return (
  <div className="hero min-h-screen bg-base-200">
  <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-semibold">
            Task Title
          </span>
        </label>
        <input
          type="text"
          placeholder="Task Title"
          className="input input-bordered"
          defaultValue={task?.title}
          {...register("title", { required: true })}
          required
        />
        {errors.title && <p className="text-red-500">Title Is Required</p>}
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-semibold">Priority</span>
        </label>
        <select
        
          {...register("priority", { required: true })}
          className="select input input-bordered select-ghost w-full"
        >
          <option>{task?.priority}</option>
          <option>Low</option>
          <option>Moderate</option>
          <option>High</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-semibold">
            Last Date
          </span>
        </label>
        <input
          type="date"
          className="input input-bordered"
          defaultValue={task?.date}
          {...register("date", { required: true })}
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text text-lg font-semibold">
            Description
          </span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Description"
          defaultValue={task?.des}
          {...register("des", { required: true })}
        ></textarea>
      </div>
      <div className="form-control mt-6">
        <button
          type="submit"
          className="btn text-white bg-gradient-to-r from-yellow-500 to-emerald-500 font-semibold hover:bg-gradient-to-l transition-all duration-700 hover:text-2xl text-xl border-none"
        >
          Update Task Task
        </button>
      </div>
    </form>
  </div>
</div>
 );
};

export default UpdateTask;