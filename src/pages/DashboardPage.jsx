import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Text from "../components/Text";

const DashboardPage = () => {
  const users = [
    {
      name: 'jaga',
      count: 1232
    },
    {
      name: 'test',
      count: 1231
    },
    {
      name: 'test2',
      count: 1230
    },
  ]

  
  return (
    <div>
      <Header />
      {
        users.map(e => 
          <Dashboard name={e.name} count={ e.count} />
        )
      }
      
    </div>
  );
};

export default DashboardPage;
