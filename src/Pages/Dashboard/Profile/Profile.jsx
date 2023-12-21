import useAuth from "../../../Hooks/UseAuth/useAuth";

const Profile = () => {
 const {user}=useAuth();
 return (
  <div>
   <h1>{user?.displayName}</h1>
  </div>
 );
};

export default Profile;