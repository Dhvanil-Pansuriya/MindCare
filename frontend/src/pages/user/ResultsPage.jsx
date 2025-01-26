import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const { moodScore } = location.state;

  const getMoodMessage = (score) => {
    switch (score) {
      case "Very Low":
        return "Your mood seems to be quite low. It might be helpful to reach out to a friend or professional for support.";
      case "Low":
        return "Your mood is on the lower side. Consider engaging in activities that usually lift your spirits.";
      case "Moderate":
        return "Your mood is balanced. Keep up with your regular self-care routines to maintain this stability.";
      case "High":
        return "Your mood is quite positive! This is a great time to tackle challenging tasks or help others.";
      case "Very High":
        return "Your mood is excellent! Enjoy this positive state and consider ways to sustain it.";
      default:
        return "Thank you for completing the assessment. Remember, moods can fluctuate, and that's completely normal.";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Your Mood Assessment Results</h1>
        <p className="text-xl mb-4">
          Your current mood score: <strong>{moodScore}</strong>
        </p>
        <p className="text-lg mb-6">{getMoodMessage(moodScore)}</p>
        <div className="mt-8">
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
