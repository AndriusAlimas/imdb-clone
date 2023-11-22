import React, { useState, useEffect } from "react";
import FeaturedSlider from "../../FeaturedSlider/FeaturedSlider";
import { fetchMovies } from "../../../api";

const HomePage = () => {
  const [featuredContent, setFeaturedContent] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movies = await fetchMovies();
        setFeaturedContent(movies);
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    };
    loadMovies();
  }, []);

  return (
    <div>
      <FeaturedSlider content={featuredContent} />
    </div>
  );
};

export default HomePage;
