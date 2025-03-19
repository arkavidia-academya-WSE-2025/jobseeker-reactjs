// import { School, X } from "lucide-react";

const EducationSection = ({ userData, isOwnProfile }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {userData.education.map((edu) => (
        <div key={edu._id} className="mb-4 flex justify-between items-start">
          <div className="flex items-start">
            <School size={20} className="mr-2 mt-1" />
            <div>
              <h3 className="font-semibold">{edu.fieldOfStudy}</h3>
              <p className="text-gray-600">{edu.school}</p>
              <p className="text-gray-500 text-sm">
                {edu.startYear} - {edu.endYear || "Present"}
              </p>
            </div>
          </div>
          {isOwnProfile && (
            <button onClick={() => {}} className="text-red-500">
              <X size={20} />
            </button>
          )}
        </div>
      ))}
      {isOwnProfile && (
        <button
          onClick={() => {}}
          className="mt-4 text-primary hover:text-primary-dark transition duration-300"
        >
          Edit Education
        </button>
      )}
    </div>
  );
};
export default EducationSection;
