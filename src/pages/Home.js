function Home() {
  const places = [
  {
    id: 1,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    id: 2,
    name: "Dubai",
    location: "UAE",
    image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
  },
  {
    id: 3,
    name: "New York",
    location: "USA",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59",
  },
];

  return (
    <div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}
>
      <h1>Explore Destinations</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {places.map((place) => (
          <div
            key={place.id}
            style={{
  border: "none",
  borderRadius: "15px",
  width: "250px",
  overflow: "hidden",
  backgroundColor: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
}}
          >
            <img
  src={place.image}
  alt={place.name}
  style={{ width: "100%", height: "150px", objectFit: "cover" }}
/>
            <div style={{ padding: "10px" }}>
              <h3>{place.name}</h3>
              <p>{place.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;