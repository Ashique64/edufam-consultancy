import React from "react";
import "./WhatsAppButton.scss";

const buildWhatsAppLink = (phoneNumber, message) => {
  const encoded = encodeURIComponent(message || "");
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
};

const WhatsAppButton = ({
  phoneNumber = "919074506060",
  message = "Hello! I'm interested in your services.",
  tooltip = "Chat on WhatsApp",
  size = 56,
  bottom = 20,
  right = 20,
  zIndex = 9999,
  ariaLabel = "Open WhatsApp chat",
  openInNewTab = true,
}) => {
  const link = buildWhatsAppLink(phoneNumber, message);
  const styleVars = {
    "--wa-size": `${size}px`,
    "--wa-bottom": `${bottom}px`,
    "--wa-right": `${right}px`,
    "--wa-z": zIndex,
  };

  return (
    <a
      className="wa-fab"
      href={link}
      target={openInNewTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={tooltip}
      style={styleVars}
    >
      {/* WhatsApp logo SVG */}
      <svg
        className="wa-icon"
        viewBox="0 0 32 32"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="#25D366"
          d="M27.38 4.62A14.96 14.96 0 0 0 16 0C7.18 0 0 7.18 0 16c0 2.81.73 5.5 2.11 7.89L0 32l8.33-2.19A15.87 15.87 0 0 0 16 31.04c8.82 0 16-7.18 16-16 0-4.26-1.66-8.27-4.62-11.42z"
        />
        <path
          fill="#FFF"
          d="M23.46 18.88c-.35-.18-2.05-1.02-2.37-1.13-.32-.12-.55-.18-.78.18-.23.35-.87 1.1-1.06 1.33-.19.23-.4.26-.73.09-.34-.17-1.45-.53-2.76-1.71-1.02-.91-1.71-2.03-1.91-2.37-.2-.34-.02-.52.16-.7.17-.17.34-.4.5-.6.16-.2.23-.35.34-.58.12-.23.05-.43-.04-.62-.09-.18-.76-1.82-1.05-2.51-.28-.68-.57-.58-.77-.59h-.66c-.21 0-.61.09-.92.43-.31.34-1.21 1.18-1.21 2.88s1.24 3.35 1.41 3.58c.17.23 2.44 3.74 5.89 5.22.82.36 1.46.57 1.99.73.83.26 1.6.23 2.21.15.67-.1 2.06-.84 2.36-1.65.3-.82.3-1.51.21-1.65-.09-.14-.32-.23-.67-.41z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;