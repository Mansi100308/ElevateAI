from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://elevate-ai-gules.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CareerRequest(BaseModel):
    career_goal: str
    education: str
    skills: str

@app.get("/")
def home():
    return {"message": "ElevateAI Backend Running 🚀"}

@app.post("/career")
def generate_career(data: CareerRequest):

    roadmap = f"""
🎯 Personalized Career Roadmap

Career Goal: {data.career_goal}

Education: {data.education}

Skills: {data.skills}

Recommended Steps:

1. Learn Programming Fundamentals.
2. Master HTML, CSS and JavaScript.
3. Learn React.js.
4. Learn Python & FastAPI.
5. Learn SQL & Databases.
6. Build 5 real-world projects.
7. Practice Data Structures & Algorithms.
8. Prepare for interviews.
9. Build a strong GitHub profile.
10. Apply for internships regularly.
"""

    return {"roadmap": roadmap}