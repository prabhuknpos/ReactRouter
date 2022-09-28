import { useParams } from "react-router-dom";
export const UserDetails = () => {
  const { userId } = useParams();

  return (
    <div>
      <h4>User Details based on id {userId}</h4>
    </div>
  );
};
