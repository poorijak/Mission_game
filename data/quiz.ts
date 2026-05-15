export interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string;
}

export interface Stage {
  id: number;
  name: string;
  questions: Question[];
  x: string;
  y: string;
}

export const STAGES_DATA: Stage[] = [
  {
    id: 1,
    name: "ด่านเริ่มต้นฝึกหัด",
    x: "50%",
    y: "80%", // ล่างสุด
    questions: [
      {
        id: 1,
        text: "1 + 1 เท่ากับเท่าไร?",
        options: ["A) 1", "B) 2", "C) 3", "D) 4"],
        answer: "B",
      },
      {
        id: 2,
        text: "HTML ย่อมาจากอะไร?",
        options: [
          "A) Hyper Text Markup Language",
          "B) High Tech Modern Language",
          "C) Home Tool Markup Language",
          "D) Hyperlink Text Management Language",
        ],
        answer: "A",
      },
    ],
  },
  {
    id: 2,
    name: "ลุยป่ามหัศจรรย์",
    x: "25%",
    y: "60%", // เลื้อยไปซ้าย
    questions: [
      {
        id: 3,
        text: "Next.js ใช้ Framework อะไรเป็นพื้นฐาน?",
        options: ["A) Angular", "B) Vue", "C) React", "D) Svelte"],
        answer: "C",
      },
    ],
  },
  {
    id: 3,
    name: "ผจญภัยในถ้ำน้ำแข็ง",
    x: "75%",
    y: "40%", // เลื้อยไปขวา
    questions: [
      {
        id: 4,
        text: "CSS ย่อมาจากอะไร?",
        options: [
          "A) Creative Style Sheets",
          "B) Cascading Style Sheets",
          "C) Computer Style Sheets",
          "D) Colorful Style Sheets",
        ],
        answer: "B",
      },
    ],
  },
  {
    id: 4,
    name: "ปราสาทจอมมาร",
    x: "50%",
    y: "15%", // บนสุด
    questions: [
      {
        id: 5,
        text: "Tailwind CSS เป็นรูปแบบใด?",
        options: [
          "A) Utility-First",
          "B) Component-Based",
          "C) Inline-Styling",
          "D) CSS-in-JS",
        ],
        answer: "A",
      },
    ],
  },
];
