from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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
    return {
        "message": "Trip request received successfully!",
        "trip": trip
    }