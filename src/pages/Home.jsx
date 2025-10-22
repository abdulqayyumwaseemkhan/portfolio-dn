import React from "react";
import HeroSection from "../components/HeroSection";
import HomeArticles from "../components/HomeArticles";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <h3
        style={{
          marginTop: "20rem",
          textAlign: "center",
          color: "#00276E",
          marginBottom: "1.5rem",
        }}
      >
        Recent Blogs
      </h3>

      <HomeArticles />
    </div>
  );
}
