import { useState } from "react";
import Navbar from "../components/Navbar";

function CareerMentor() {
  const [careerGoal, setCareerGoal] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");

  async function generateRoadmap() {
    try {
      fetch("https://elevateai-8lcu.onrender.com/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          career_goal: careerGoal,
          education: education,
          skills: skills,
        }),
      });

      const data = await response.json();

      console.log("Response:", data);

      if (data.roadmap) {
        setResult(data.roadmap);
      } else if (data.error) {
        setResult("❌ " + data.error);
      } else {
        setResult("❌ Unknown error.");
      }
    } catch (error) {
      console.error(error);
      setResult("❌ Error connecting to backend.");
    }
  }

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto mt-10 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          AI Career Mentor
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Career Goal</label>
            <input
              type="text"
              placeholder="Software Engineer"
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold">Current Education</label>
            <input
              type="text"
              placeholder="BCA"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-semibold">Current Skills</label>
            <input
              type="text"
              placeholder="HTML, CSS, JavaScript"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            onClick={generateRoadmap}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Generate Roadmap
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-100">
            <h2 className="text-xl font-bold mb-2">Generated Roadmap</h2>
            <pre className="whitespace-pre-wrap">{result}</pre>
          </div>
        )}
      </div>
    </>
  );
}

export default CareerMentor;