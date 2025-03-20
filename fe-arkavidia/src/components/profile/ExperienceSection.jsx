// // import { Briefcase, X } from "lucide-react";
// import { formatDate } from "../utils/dateUtils";

// const ExperienceSection = ({ userData, isOwnProfile }) => {
//   return (
//     <div className="bg-white shadow rounded-lg p-6 mb-6">
//       <h2 className="text-xl font-semibold mb-4">Experience</h2>
//       {userData.experience.map((exp) => (
//         <div key={exp._id} className="mb-4 flex justify-between items-start">
//           <div className="flex items-start">
//             <Briefcase size={20} className="mr-2 mt-1" />
//             <div>
//               <h3 className="font-semibold">{exp.title}</h3>
//               <p className="text-gray-600">{exp.company}</p>
//               <p className="text-gray-500 text-sm">
//                 {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
//               </p>
//               <p className="text-gray-700">{exp.description}</p>
//             </div>
//           </div>
//           {isOwnProfile && (
//             <button onClick={() => {}} className="text-red-500">
//               <X size={20} />
//             </button>
//           )}
//         </div>
//       ))}
//       {isOwnProfile && (
//         <button
//           onClick={() => {}}
//           className="mt-4 text-primary hover:text-primary-dark transition duration-300"
//         >
//           Edit Experiences
//         </button>
//       )}
//     </div>
//   );
// };
// export default ExperienceSection;
