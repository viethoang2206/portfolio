import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import headerImg from "../../assets/img/header-img.svg";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["am a Web Developer", "love making websites"];
  const period = 2000;
  const navigate = useNavigate();
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const navProject = () => {
    navigate("/project");
    document.title = "Portfolio | V Vhoang";
  };
  const navAbout = () => {
    navigate("/about");
    document.title = "About | V Vhoang";
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -500 }}
      className=" main-banner"
    >
      <div className="info">
        <h1 className="tagline">Welcome to my Portfolio</h1>
        <h2>Hi! I'm Hoang </h2>
        <h2 className="wrap">I {text}</h2>
        <h3>Change the world, one line of code at a time</h3>
        <div className="buttons">
          <button className="swipe" onClick={() => navProject()}>
            My porfolio
          </button>
          <button className="swipe about-me" onClick={() => navAbout()}>
            About me
          </button>

          <a className="cv" href={require("./VietHoangVu_Resume.pdf")} download>
            Download CV
          </a>
        </div>
      </div>
      <div className="banner">
        <img src={headerImg} alt="" />
      </div>
    </motion.div>
  );
};

export default Banner;
