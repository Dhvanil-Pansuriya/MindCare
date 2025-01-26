import React from "react"
import { Link } from "react-router-dom"
import { X } from "lucide-react"


export default function AssessmentPopup({ onClose }) {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-lg max-w-sm">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <X size={24} />
      </button>
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <p className="mb-4">Take a quick assessment to track your mood and get personalized recommendations.</p>
      <Link
        to="/assessment"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
      >
        Start Assessment
      </Link>
    </div>
  )
}

