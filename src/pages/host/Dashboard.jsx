import React from "react";
import { getHostVans} from "../../api"

export function loader({params}) {
    return getHostVans(params.id)
}

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Here</h1>

      
    </div>
  );
};

export default Dashboard;
