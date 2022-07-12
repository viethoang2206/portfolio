import { Col, Row } from "antd";
import { motion } from "framer-motion";
import travelLog from "../../assets/img/travellog.png";
import todo from "../../assets/img/todo.png";
import ecom from "../../assets/img/ecom.png";
import landing from "../../assets/img/landing.png";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5000 }}
      className="project"
    >
      <h1 className="h1-adj">Portfolio</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="project-info zoom">
            <img src={travelLog} alt="" />
            <div className="display-adj">
              <h1>Travel Log</h1>
              <h3>A website using Reactjs, Nodejs, MongoDB</h3>
              <div className="button-container">
                <button>
                  <a
                    target="#"
                    href="https://github.com/viethoang2206/travel-log"
                  >
                    Github
                  </a>
                </button>
                <button>
                  <a
                    target="#"
                    href="https://62c4663f3bc348000998147b--deft-dusk-a7b31a.netlify.app/"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project-info  zoom">
            <img src={todo} alt="" />
            <div className="display-adj">
              <h1>Todo List</h1>
              <h3>A website using Reactjs, Nodejs, MongoDB</h3>
              <div className="button-container">
                <button>
                  <a
                    target="#"
                    href="https://github.com/viethoang2206/todo-demo"
                  >
                    Github
                  </a>
                </button>
                <button>
                  {" "}
                  <a
                    target="#"
                    href="https://62c4663f3bc348000998147b--deft-dusk-a7b31a.netlify.app/"
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project-info draw-effect">
            <img src={ecom} alt="" />
            <div className="display-adj">
              <h1>Shopping Website</h1>
              <h3>A website using Reactjs, Nodejs, MongoDB</h3>
              <div className="button-container">
                <button>
                  <a
                    target="#"
                    href="https://github.com/viethoang2206/Ecommerce-website"
                  >
                    Github
                  </a>
                </button>
                <button>
                  <a target="#" href="http://ecom-web.surge.sh/">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="project-info draw-effect">
            <img src={landing} alt="" />
            <div className="display-adj">
              <h1>Landing Page</h1>
              <h3>A website using Html,SCSS,Jquery</h3>
              <div className="button-container">
                <button>
                  <a
                    target="#"
                    href="https://github.com/viethoang2206/simple-website"
                  >
                    Github
                  </a>
                </button>
                <button>
                  <a target="#" href="http://digital-marketing-prj.surge.sh/">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
