import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://www.youtube.com/devopsfordevelopers";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/willbutton.png"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer", borderRadius: "50%" }}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
    </>
  );
}
