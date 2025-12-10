import React, { useState } from "react";
import Navbar from "../Components/navbar";
import "../Css/Home.css";
import bali from "../assets/images/Bali.jpeg";

const Home = () => {
  const [search, setSearch] = useState({ source: "", destination: "" });
  const [aiOutput, setAiOutput] = useState([]); // array of recommendation objects
  const [loading, setLoading] = useState(false);

  // Dummy AI model
  const dummyModel = {
    Mumbai: {
      Goa: [
        { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", title: "Baga Beach", desc: "Enjoy the sun, sand, and water sports at Goa’s famous Baga Beach." },
        { img: "https://images.unsplash.com/photo-1529429617124-1f7b07e64e97", title: "Fort Aguada", desc: "Historic fort with panoramic views of the Arabian Sea." },
        { img: "https://images.unsplash.com/photo-1563201518-3f860fb2a2f0", title: "Goan Cuisine", desc: "Taste authentic Goan seafood dishes at local restaurants." }
      ],
    },
    Delhi: {
      Jaipur: [
        { img: "https://images.unsplash.com/photo-1590546190707-0f4e5dbebf33", title: "Amber Fort", desc: "Explore the majestic Amber Fort with its stunning architecture." },
        { img: "https://images.unsplash.com/photo-1615193682431-31f92a5e1b44", title: "Hawa Mahal", desc: "Visit the iconic Pink City palace with its unique windows." },
        { img: "https://images.unsplash.com/photo-1589758438368-97d0d83a110b", title: "Rajasthani Cuisine", desc: "Enjoy traditional Rajasthani dishes at local eateries." }
      ]
    }
  };

  // Default suggestions
  const defaultSuggestions = [
    { img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", title: "City Tour", desc: "Explore local attractions and landmarks of your chosen destination." },
    { img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Local Cuisine", desc: "Taste popular dishes and street food in the city." },
    { img: "https://images.unsplash.com/photo-1526788079935-7b0e3dbdcda3", title: "Sightseeing", desc: "Discover famous sights and hidden gems in the area." }
  ];

  const handleChange = (e) => setSearch({ ...search, [e.target.name]: e.target.value });

  const fetchAIRecommendations = () => {
    setLoading(true);
    setAiOutput([]);

    setTimeout(() => {
      const src = search.source.trim().toLowerCase();
      const dest = search.destination.trim().toLowerCase();

      const normalizedModel = {};
      Object.keys(dummyModel).forEach((s) => {
        normalizedModel[s.toLowerCase()] = {};
        Object.keys(dummyModel[s]).forEach((d) => {
          normalizedModel[s.toLowerCase()][d.toLowerCase()] = dummyModel[s][d];
        });
      });

      if (normalizedModel[src] && normalizedModel[src][dest]) {
        setAiOutput(normalizedModel[src][dest]);
      } else {
        setAiOutput(defaultSuggestions);
      }

      setLoading(false);
    }, 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.source || !search.destination) return;
    fetchAIRecommendations();
  };

  const recommendations = [
    {
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      title: "Maldives",
      desc: "Crystal clear beaches, luxury villas, and peaceful sunsets.",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Paris",
      desc: "The city of love — Eiffel Tower, cafes, and timeless romance.",
    },
    {
      img: bali,
      title: "Bali",
      desc: "Nature, beaches, temples, and the perfect island escape.",
    },
    {
      img: "https://images.unsplash.com/photo-1503264116251-35a269479413",
      title: "Switzerland",
      desc: "Snowy mountains, scenic lakes, and breathtaking views.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the World with Us</h1>
          <p>"Jobs fill your pocket, but adventures fill your soul."</p>

          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              name="source"
              placeholder="Source"
              value={search.source}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={search.destination}
              onChange={handleChange}
              required
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      {/* AI Recommendations as Cards */}
      {loading && <p className="loading-text">Loading AI recommendations...</p>}
      {!loading && aiOutput.length > 0 && (
        <section className="recommend-section">
          <h2>AI Recommendations for {search.destination}</h2>
          <div className="recommend-container">
            {aiOutput.map((rec, index) => (
              <div className="card" key={index}>
                <img src={rec.img} alt={rec.title} />
                <h3>{rec.title}</h3>
                <p>{rec.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* You May Also Like Section */}
      <section className="recommend-section">
        <h2>You May Also Like</h2>
        <div className="recommend-container">
          {recommendations.map((rec, index) => (
            <div className="card" key={index}>
              <img src={rec.img} alt={rec.title} />
              <h3>{rec.title}</h3>
              <p>{rec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <h3>TripHunt</h3>
            <p>Your trusted partner for unforgettable journeys.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Travel History</li>
              <li>Favourite</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Destinations</h4>
            <ul>
              <li>Maldives</li>
              <li>Paris</li>
              <li>Switzerland</li>
              <li>Bali</li>
              <li>Dubai</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>Email: support@triphunt.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Pune, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 TripHunt. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
