import { Col } from "react-bootstrap";

export const PhaserContainer = ({ title, description, iframeUrl }) => {
  return (
    <div className="phaser-framebx">
      <iframe src={iframeUrl} height={600} width={1600}></iframe>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  )
}