import ProfileHeader from "../profile/ProfileHeader";
import AboutSection from "../profile/AboutSection";
import ExperienceSection from "../profile/ExperienceSection";
import EducationSection from "../profile/EducationSection";
import SkillsSection from "../profile/SkillsSection";

const ProfilePage = ({ userData, isOwnProfile, onSave }) => {
	return (
		<div className="max-w-4xl mx-auto p-4">
			<ProfileHeader userData={userData} isOwnProfile={isOwnProfile} onSave={onSave} />
			<AboutSection userData={userData} isOwnProfile={isOwnProfile} onSave={onSave} />
			<ExperienceSection userData={userData} isOwnProfile={isOwnProfile} onSave={onSave} />
			<EducationSection userData={userData} isOwnProfile={isOwnProfile} onSave={onSave} />
			<SkillsSection userData={userData} isOwnProfile={isOwnProfile} onSave={onSave} />
		</div>
	);
};

export default ProfilePage;
