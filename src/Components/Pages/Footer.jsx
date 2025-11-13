import React from "react";
import icon from "../../assets/Grn-icon.jpg";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-[#3700ffbb] to-[#00d40ec2] text-gray-200  p-10">
        <aside>
          <img className="w-10 rounded-xl" src={icon} alt="" />
          <p>
            At Green Spot, we believe in green thinking, a clean environment,
            and transparency in action. Join us as we build a healthier, greener
            future—together.
          </p>
          <p className="font-bold">
            <span className="text-indigo-600">GREEN SPOT</span> Industries Ltd.
            <br />
            ROKY tech since 1992
          </p>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <span>
                <a href="https://x.com/" target="_blank">
                  <FaXTwitter size={25} />
                </a>
              </span>
              <span>
                <a href="https://youtube.com" target="_blank">
                  <GrYoutube size={25} />
                </a>
              </span>
              <span>
                <a href="https://facebook.com" target="_blank">
                  <FaSquareFacebook size={25} />
                </a>
              </span>
            </div>
          </nav>

          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <nav className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/roky18"
              target="_blank"
              className="link link-hover"
            >
              About us
            </a>
            <a
              href="https://github.com/roky18"
              target="_blank"
              className="link link-hover"
            >
              Contact
            </a>
            <Link to="/">
              <a className="link link-hover">Home</a>
            </Link>
          </nav>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
