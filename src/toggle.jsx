import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
      {/* Toggle Track */}
      <div
        role="switch"
        aria-checked={isOn}
        onClick={() => setIsOn(!isOn)}
        style={{
          position: "relative",
          width: 80,
          height: 40,
          borderRadius: 999,
          cursor: "pointer",
          background: isOn ? "#1D9E75" : "#e2e2e2",
          transition: "background 0.3s ease",
        }}
      >
        {/* Thumb */}
        <div
          style={{
            position: "absolute",
            top: 4,
            left: 4,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
            transform: isOn ? "translateX(40px)" : "translateX(0)",
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      </div>

      {/* Status Chip */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 16px",
          borderRadius: 999,
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.05em",
          background: isOn ? "#E1F5EE" : "#f1f1f1",
          color: isOn ? "#085041" : "#888",
          border: isOn ? "1px solid #5DCAA5" : "1px solid #ddd",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: isOn ? "#1D9E75" : "#aaa",
            display: "inline-block",
          }}
        />
        {isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
}
