import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const questions = [
  {
    id: 1,
    text: "How would you rate your overall mood today?",
    options: ["Very Poor", "Poor", "Neutral", "Good", "Excellent"],
  },
  {
    id: 2,
    text: "How well did you sleep last night?",
    options: ["Very Poorly", "Poorly", "Average", "Well", "Very Well"],
  },
  {
    id: 3,
    text: "How would you describe your stress level today?",
    options: ["Very High", "High", "Moderate", "Low", "Very Low"],
  },
  {
    id: 4,
    text: "How satisfied are you with your productivity today?",
    options: ["Very Unsatisfied", "Unsatisfied", "Neutral", "Satisfied", "Very Satisfied"],
  },
  {
    id: 5,
    text: "How connected do you feel to others today?",
    options: ["Very Disconnected", "Disconnected", "Neutral", "Connected", "Very Connected"],
  },
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  const navigate = useNavigate()

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Assessment complete, calculate mood
      const moodScore = calculateMoodScore(newAnswers)
      navigate("/results", { state: { moodScore } })
    }
  }

  const calculateMoodScore = (answers) => {
    const sum = answers.reduce((a, b) => a + b, 0)
    const average = sum / answers.length

    if (average < 1.5) return "Very Low"
    if (average < 2.5) return "Low"
    if (average < 3.5) return "Moderate"
    if (average < 4.5) return "High"
    return "Very High"
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="mb-8">
          <h1 className="text-2xl font-normal text-gray-800 mb-2">Mood Assessment</h1>
          <div className="h-1 w-full bg-gray-200 rounded-full">
            <div
              className="h-1 bg-gray-800 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-normal text-gray-800 mb-6">{question.text}</h2>
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 border border-gray-300 rounded-md transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <span className="inline-block w-6 h-6 mr-4 rounded-full border-2 border-gray-500"></span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <button onClick={() => navigate("/")} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            Exit Assessment
          </button>
        </div>
      </div>
    </div>
  )
}

