import { STAGES_DATA } from "@/data/quiz";
import QuizSection from "@/features/quiz/quiz_section";
import React from "react";

const page = async () => {
  return (
    <div className="h-full w-full">
      <QuizSection />
    </div>
  );
};

export default page;