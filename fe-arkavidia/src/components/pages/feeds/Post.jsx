import { Link } from "react-router-dom";
import { ThumbsUp, MessageCircle, Share2, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import PostAction from "./PostAction";

const Post = () => {
	return (
		<div className='bg-secondary rounded-lg shadow mb-4'>
			<div className='p-4'>
				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center'>
						<Link to={`/profile/username`}>
							<img
								src={"/avatar.png"}
								alt={"User Name"}
								className='size-10 rounded-full mr-3'
							/>
						</Link>

						<div>
							<Link to={`/profile/username`}>
								<h3 className='font-semibold'>User Name</h3>
							</Link>
							<p className='text-xs text-info'>User Headline</p>
							<p className='text-xs text-info'>
								{formatDistanceToNow(new Date(), { addSuffix: true })}
							</p>
						</div>
					</div>
					<button className='text-red-500 hover:text-red-700'>
						<Trash2 size={18} />
					</button>
				</div>
				<p className='mb-4'>Post content goes here</p>
				<img src={"/post-image.png"} alt='Post content' className='rounded-lg w-full mb-4' />

				<div className='flex justify-between text-info'>
					<PostAction
						icon={<ThumbsUp size={18} />}
						text="Like (0)"
					/>

					<PostAction
						icon={<MessageCircle size={18} />}
						text="Comment (0)"
					/>
					<PostAction icon={<Share2 size={18} />} text="Share" />
				</div>
			</div>
		</div>
	);
};
export default Post;
