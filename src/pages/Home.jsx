import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/dex")}>도감 시작</button>;
};

export default Home;
