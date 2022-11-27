import {Col} from "react-bootstrap";

export const PhaserContainer = ({ title, description, iframeUrl }) => {
  return (
    <Col size={12} sm={2} md={5}>
      <div className="phaser-framebx">
        <iframe src={iframeUrl}></iframe>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}