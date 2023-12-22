import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/UseAxiosPublic/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/UseAuth/useAuth";
const AddTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const task = { ...data, email: user.email, status: "Todo" };
    const result = await axiosPublic.post("/tasks", task);
    if (result.data.insertedId) {
      toast.success("successfully Added New Task!", {
        duration: 3000, // Duration in milliseconds
        position: "top-right", // Toast position on the screen
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
    }
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
              <option disabled selected>
                Select Priority
              </option>
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
              {...register("des", { required: true })}
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white bg-gradient-to-r from-yellow-500 to-emerald-500 font-semibold hover:bg-gradient-to-l transition-all duration-700 hover:text-2xl text-xl border-none"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
