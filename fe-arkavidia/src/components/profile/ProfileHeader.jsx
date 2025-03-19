// import { Camera, MapPin, UserCheck, UserPlus, X } from "lucide-react";

const ProfileHeader = ({ userData, onSave, isOwnProfile }) => {
	const renderConnectionButton = () => {
		const baseClass = "text-white py-2 px-4 rounded-full transition duration-300 flex items-center justify-center";

		// Assuming the connection status and related actions have been handled already
		return (
			<button className={`${baseClass} bg-primary hover:bg-primary-dark text-white`}>
				<UserPlus size={20} className="mr-2" />
				Connect
			</button>
		);
	};

	return (
		<div className="bg-white shadow rounded-lg mb-6">
			<div
				className="relative h-48 rounded-t-lg bg-cover bg-center"
				style={{
					backgroundImage: `url('${userData.bannerImg || "/banner.png"}')`,
				}}
			>
				{isOwnProfile && (
					<label className="absolute top-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
						<Camera size={20} />
						<input type="file" className="hidden" accept="image/*" />
					</label>
				)}
			</div>

			<div className="p-4">
				<div className="relative -mt-20 mb-4">
					<img
						className="w-32 h-32 rounded-full mx-auto object-cover"
						src={userData.profilePicture || "/avatar.png"}
						alt={userData.name}
					/>

					{isOwnProfile && (
						<label className="absolute bottom-0 right-1/2 transform translate-x-16 bg-white p-2 rounded-full shadow cursor-pointer">
							<Camera size={20} />
							<input type="file" className="hidden" accept="image/*" />
						</label>
					)}
				</div>

				<div className="text-center mb-4">
					<h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
					<p className="text-gray-600">{userData.headline}</p>
					<div className="flex justify-center items-center mt-2">
						<MapPin size={16} className="text-gray-500 mr-1" />
						<span className="text-gray-600">{userData.location}</span>
					</div>
				</div>

				{isOwnProfile ? (
					<button
						className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300"
						onClick={() => onSave({})}
					>
						Save Profile
					</button>
				) : (
					<div className="flex justify-center">{renderConnectionButton()}</div>
				)}
			</div>
		</div>
	);
};

export default ProfileHeader;
