import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const Social = () => {
  return (
    <div className="social-header">
      <div className="social">
        <a href="https://github.com/viethoang2206" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/v%C5%A9-vi%E1%BB%87t-ho%C3%A0ng-b54751224/
"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <p className="social-text">My socials</p>
    </div>
  );
};

export default Social;
