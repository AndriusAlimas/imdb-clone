// src/HomePage.js
import React from "react";
import FeaturedSlider from "../../FeaturedSlider/FeaturedSlider";

const HomePage = () => {
  const featuredContent = [
    {
      image:
        "https://images.unsplash.com/photo-1585079547594-8f2e3c97a3e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Adventure Movie",
      description: "Explore the world of adventure with our top movie picks.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Sci-Fi Excitement",
      description: "Dive into the future with these sci-fi classics.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Drama and Intrigue",
      description: "Experience the drama and uncover the mysteries.",
    },
  ];

  return (
    <div>
      <FeaturedSlider content={featuredContent} />
    </div>
  );
};

export default HomePage;
