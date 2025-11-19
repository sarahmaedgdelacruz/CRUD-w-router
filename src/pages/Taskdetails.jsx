import { useParams } from "react-router";

function Taskdetails() {
  const { id } = useParams();
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-lg font-medium"> Details </h3>
      <p>{id}</p>
    </div>
  );
}

export default Taskdetails;
