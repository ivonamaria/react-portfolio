import React from "react";

const SkillBar = () => {
  const skills = [
    { name: "HTML", level: 98 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
  ];

  const colors = ["bg-blue-900", "bg-green-900", "bg-yellow-900", "bg-red-900", "bg-purple-900"];

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-orange-900 bg-black text-white flex flex-col justify-center items-center">
      {skills.map((skill, index) => (
        <div key={skill.name} className="w-full py-2">
          <p className="text-lg font-bold">{skill.name}</p>
          <div className="relative h-2 bg-gray-300 rounded-full">
            <div
              className={`absolute top-0 left-0 h-2 ${colors[index]} to-white rounded-full`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;
