// import { X } from "lucide-react";

const SkillsSection = ({ userData, isOwnProfile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap">
        {userData.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center"
          >
            {skill}
            {isOwnProfile && (
              <button onClick={() => {}} className="ml-2 text-red-500">
                <X size={14} />
              </button>
            )}
          </span>
        ))}
      </div>
      {isOwnProfile && (
        <button
          onClick={() => {}}
          className="mt-4 text-primary hover:text-primary-dark transition duration-300"
        >
          Edit Skills
        </button>
      )}
    </div>
  );
};
export default SkillsSection;
