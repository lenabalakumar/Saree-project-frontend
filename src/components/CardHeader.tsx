import "./CardHeader.css";
import Icon from "@mui/material/Icon";
import { WhatsappRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CardHeader = () => {
  return (
    <div className="Card-header-container">
      <div className="Header-container">
        <div className="Header-left-container">
          <img
            src="https://images.unsplash.com/photo-1648531102877-6e978cb864ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            className="Header-image"
          />
          <div className="Header-content">Shop name</div>
        </div>
      </div>
      <div className="Header-right-container">
        <IconButton>
          <WhatsappRounded color="success" />
        </IconButton>
      </div>
    </div>
  );
};

export default CardHeader;
