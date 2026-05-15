"use client";

import { STAGES_DATA } from "@/data/quiz";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const QuizSection = () => {
  const params = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const id = parseInt(params.stageId as string);

  const currentStage = STAGES_DATA.find((s) => s.id === id);
  const [score, setScore] = useState(0);

  if (!currentStage) {
    return (
      <div className="mt-20 text-center text-white">ไม่พบด่านนี้ในระบบ</div>
    );
  }

  const question = currentStage.questions;
  const currentQuestion = question[currentQuestionIndex];

  const handleAnswerClick = (selectedOption: string) => {
    const choiceLetter = selectedOption.charAt(0);

    if (choiceLetter === currentQuestion.answer) {
      setScore((prev) => prev++);

      const nextIndex = currentQuestionIndex + 1;
    }
  };

  return <div></div>;
};

export default QuizSection;
