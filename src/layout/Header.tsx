import React from "react";

export function Header() {
  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      marginBottom: "24px",
      padding: "12px 0",
      borderBottom: "1px solid #e0e0e0"
    }}>
      <h2 style={{ margin: 0 }}>Mixo Ads Dashboard</h2>
      {/* <nav>
        <a href="/" style={{ marginRight: "16px" }}>Dashboard</a>
        <a href="/campaigns">Campaigns</a>
      </nav> */}
    </header>
  );
}
