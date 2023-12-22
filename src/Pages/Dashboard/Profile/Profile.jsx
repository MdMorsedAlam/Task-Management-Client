import { BsEnvelope, BsPhone } from "react-icons/bs";
import useAuth from "../../../Hooks/UseAuth/useAuth";

const Profile = () => {
 const {user}=useAuth();
 return (
  <div>
   <div className="max-w-lg mx-auto p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={user?.photoURL} alt={user?.photoURL}className="object-cover object-center w-full h-full rounded bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{user?.displayName}</h2>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
			<BsEnvelope/>
				<span className="dark:text-gray-400">{user?.email}</span>
			</span>
			<span className="flex items-center space-x-2">
				<BsPhone/>
				<span className="dark:text-gray-400">+25 381 77 983</span>
			</span>
		</div>
	</div>
</div>
  </div>
 );
};

export default Profile;