import RecommendedUser from "./RecommendedUser";
import Post from "./Post";
import PostCreation from "./PostCreation";
import Sidebar from "./SideBar";

const PostPage = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
			<div className='hidden lg:block lg:col-span-1'>
				<Sidebar />
			</div>

			<div className='col-span-1 lg:col-span-3'>
				{/* Mockup for Post */}
				<Post />
				<PostCreation
					user={{ profilePicture: "/avatar.png", name: "John Doe" }}
					isPending={false}
					handlePostCreation={() => {}}
					handleImageChange={() => {}}
					imagePreview={null}
				/>
				<RecommendedUser
					user={{ username: "janedoe", profilePicture: "/avatar.png", name: "Jane Doe", headline: "Web Developer" }}
					connectionStatus={{ status: "not_connected" }}
					handleConnect={() => {}}
					acceptRequest={() => {}}
					rejectRequest={() => {}}
				/>
			</div>
		</div>
	);
};

export default PostPage;
