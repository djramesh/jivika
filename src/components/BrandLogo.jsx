/* eslint-disable react/prop-types */
import { useState } from "react";
import logoImg from "../assets/jeevika-logo.png";

const BrandLogo = ({ variant = "dark" }) => {
  const [failed, setFailed] = useState(false);
  const isLight = variant === "light";

  if (failed) {
    return (
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.45rem",
          fontWeight: 700,
          letterSpacing: "0.02em",
          color: isLight ? "#FFFFFF" : "#163020",
        }}
      >
        JEEVIKA
      </span>
    );
  }

  if (isLight) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#ffffff",
          padding: "6px 14px",
          borderRadius: "10px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.18)",
        }}
      >
        <img
          src={logoImg}
          alt="Jeevika — OIL's Livelihood Cluster Project"
          style={{
            height: "46px",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <img
      src={logoImg}
      alt="Jeevika — OIL's Livelihood Cluster Project"
      style={{
        height: "54px",
        width: "auto",
        objectFit: "contain",
        display: "block",
      }}
      onError={() => setFailed(true)}
    />
  );
};

export default BrandLogo;
