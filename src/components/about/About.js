import { motion } from "framer-motion";
import { Progress } from "antd";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5000 }}
      className="project about"
    >
      <h1 className="h1-adj">About me</h1>
      <div className="knowledge">
        <div className="about">
          <h1>About</h1>
          <p>
            I am a frontend developer from Vietnam and at the moment i am living
            in Ho Chi Minh city. I enjoy building everything from small sites to
            rich interactive web app. Currently, i am a forth year student in
            Vietnamese German University and i am looking an internship. If you
            find my portfolio suitable, please feel free to contact me
          </p>
        </div>
        <div className="skill">
          <h1>Skill</h1>
          <div className="progress">
            <p>Jquery</p>
            <Progress percent={65} />
            <p>ReactJs</p>
            <Progress percent={50} status="active" />
            <p>NodeJs</p>
            <Progress percent={30} />
            <p>MongoDB</p>
            <Progress percent={20} />
            <p>HTML</p>
            <Progress percent={90} showInfo={true} />
            <p>CSS</p>
            <Progress percent={50} showInfo={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
