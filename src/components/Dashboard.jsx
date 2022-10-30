import image from "../assets/images/gamershub.gif";

const Dashboard = (props) => {
  const { name, avatar, count } = props;
  return (
    <div className="dashboard-container">
      <div className="card-container">
        <div className="image">
          <img src={image} height="60px" width="60px" />
        </div>
        <div className="name">
          <h2>{name}</h2>
        </div>
        <div className="count">
          <h1>{count}</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
