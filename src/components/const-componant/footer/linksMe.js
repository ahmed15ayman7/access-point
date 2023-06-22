import { motion } from "framer-motion";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { DonePlay } from "../../../assets/audios/SoundPlay";
import "./footer.css";
import { links } from "./links";

function LinksMe({ constraintsRef }) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      className="flex-column-reverse nav pb-5 footer-links-grand">
      {links.map((e, i) => (
        <OverlayTrigger
          key={i}
          placement={"left"}
          overlay={
            <Tooltip id={`tooltip-left`}>
              folowing <strong>{links[i].name}</strong>
            </Tooltip>
          }>
          <Nav.Link
            eventKey={`link-${i + 1}`}
            href={e.url}
            onClick={() => DonePlay()}
            target="_blank"
            className="mt-1 mb-1 drop">
            <i className={links[i].classIcon} style={{ color: "#ffffff" }}></i>
          </Nav.Link>
        </OverlayTrigger>
      ))}
    </motion.div>
  );
}

export default LinksMe;
