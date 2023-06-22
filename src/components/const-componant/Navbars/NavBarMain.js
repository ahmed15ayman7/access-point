import "./NavBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "./NavLinks";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { DonePlay } from "../../../assets/audios/SoundPlay";
import { useSelector } from "react-redux";

function NavBarMain({ constraintsRef }) {
  let user = useSelector((e) => e.reducerAuth.profile);
  let checkProfile = user === null ? "Login page" : "Profile page";
  let checkUrl = user === null ? "/login" : "/profile";
  let navLinksUp = navLinks.map((e, i) =>
    i === 3 ? { name: checkProfile, url: checkUrl, classIcon: e.classIcon } : e
  );
  return (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className=" nav ps-5 nav-grand">
        {navLinksUp.map((e, i) => (
          <OverlayTrigger
            key={i}
            placement={"bottom"}
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Go to <strong>{e.name}</strong>
              </Tooltip>
            }>
            <Link
              to={e.url}
              onClick={() => DonePlay()}
              className="mb-2 nav-link">
              <i className={e.classIcon} style={{ color: "#ffffff" }}></i>
            </Link>
          </OverlayTrigger>
        ))}
      </motion.div>
    </>
  );
}

export default NavBarMain;
