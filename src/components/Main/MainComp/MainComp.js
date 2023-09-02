import classes from "./MainComp.module.css";
import BGImg from "../../../images/Main-Page/Movies/MoneyHeistposter.jpeg";
import MainContent from "./MainContent";
import Carousel from "./Carousel";
const MainComp = () => {
  return (
    <div className={classes.MainComp}>
      <img
        src={BGImg}
        alt="Background Img"
        className={classes.MainCompImg}
      ></img>
      <MainContent />
      <Carousel />
    </div>
  );
};
export default MainComp;
