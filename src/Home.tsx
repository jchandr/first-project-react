import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate("/app");
        }}
      >
        App
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
    </>
  );
};

export default Home;
