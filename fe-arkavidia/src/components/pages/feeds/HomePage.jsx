import Sidebar from "../components/Sidebar";
import PostCreation from "../components/PostCreation";
// import Post from "../components/Post";
import { Users } from "lucide-react";
import RecommendedUser from "../components/RecommendedUser";

const HomePage = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
			<div className='hidden lg:block lg:col-span-1'>
				<Sidebar />
			</div>

			<div className='col-span-1 lg:col-span-2 order-first lg:order-none'>
				<PostCreation />

				{/* Mockup for Posts */}
				<div className="bg-white rounded-lg shadow p-8 text-center">
					<div className="mb-6">
						<Users size={64} className="mx-auto text-blue-500" />
					</div>
					<h2 className="text-2xl font-bold mb-4 text-gray-800">No Posts Yet</h2>
					<p className="text-gray-600 mb-6">Connect with others to start seeing posts in your feed!</p>
				</div>
			</div>

			{/* Mockup for Recommended Users */}
			<div className='col-span-1 lg:col-span-1 hidden lg:block'>
				<div className='bg-secondary rounded-lg shadow p-4'>
					<h2 className='font-semibold mb-4'>People you may know</h2>
					<RecommendedUser />
				</div>
			</div>
		</div>
	);
};
export default HomePage;
