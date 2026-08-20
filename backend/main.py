from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
import os
import json

load_dotenv()

app = FastAPI()


# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gemini AI client
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

class TripRequest(BaseModel):
    destination: str
    startDate: str
    endDate: str
    budget: str
    interests: str
    travelers: int


@app.get("/")
def root():
    return {
        "message": "CruiseWay AI Backend is running!"
    }


@app.post("/api/generate-trip")
def generate_trip(trip: TripRequest):

    prompt = f"""
You are CruiseWay, an AI travel planner.

Create a personalized travel itinerary using these details:

Destination: {trip.destination}
Start Date: {trip.startDate}
End Date: {trip.endDate}
Budget: {trip.budget}
Interests: {trip.interests}
Number of Travelers: {trip.travelers}

Return ONLY valid JSON.

Use exactly this structure:

{{
  "overview": "Short overview of the trip",
  "days": [
    {{
      "day": 1,
      "date": "YYYY-MM-DD",
      "title": "Title of the day",
      "activities": [
        "Activity 1",
        "Activity 2",
        "Activity 3"
      ]
    }}
  ],
  "places": [
    "Place 1",
    "Place 2",
    "Place 3",
    "Place 4"
  ],
  "food": [
    "Food recommendation 1",
    "Food recommendation 2",
    "Food recommendation 3"
  ],
  "activities": [
    "Activity based on interests 1",
    "Activity based on interests 2",
    "Activity based on interests 3"
  ],
  "tips": [
    "Travel tip 1",
    "Travel tip 2",
    "Travel tip 3"
  ],
  "budget": {{
    "accommodation": "Estimated accommodation cost",
    "food": "Estimated food cost",
    "transport": "Estimated transport cost",
    "activities": "Estimated activities cost",
    "total": "Estimated total cost"
  }}
}}

IMPORTANT:
- Return JSON only.
- Do NOT use Markdown.
- Do NOT use ```json.
- Do NOT add any text before or after the JSON.
- Make the number of days match the given start and end dates.
- Keep the itinerary practical and suitable for the given budget and interests.
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt
    )

    itinerary = response.text.strip()

    # Remove accidental Markdown code fences if Gemini adds them
    if itinerary.startswith("```json"):
        itinerary = itinerary[7:]

    if itinerary.endswith("```"):
        itinerary = itinerary[:-3]

    itinerary = itinerary.strip()

    trip_data = json.loads(itinerary)

    return {
        "message": "Trip generated successfully!",
        "trip": trip.model_dump(),
        "itinerary": trip_data
    }