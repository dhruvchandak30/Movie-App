import { useNavigate } from "react-router-dom";
import classes from "./MainComp.module.css";

const MainContent = () => {
  const navigate = useNavigate();
  const playHeist = () => {
    navigate("/movie/5");
  };
  return (
    <div className={classes.Content}>
      <h1>MONEY HEIST</h1>
      <div className={classes.Buttons}>
        <button className={classes.play} onClick={playHeist}>
          PLAY
        </button>
        <div className={classes.bg}>
          <button className={classes.Info} onClick={playHeist}>
            {" "}
            <span className={classes.info}>i</span>More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
