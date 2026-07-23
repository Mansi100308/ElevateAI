import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>ElevateAI</h1>

        <p>Your Personal AI Growth Hub</p>

        <hr />

        <h2>Features</h2>

        <button>Career Mentor</button>

        <br /><br />

        <button>Study Planner</button>

        <br /><br />

        <button>Ask AI</button>
      </div>
    </>
  );
}

export default Home;