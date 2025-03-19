const LoginForm = () => {
	return (
		<form className='space-y-4 w-full max-w-md'>
			<input
				type='text'
				placeholder='Username'
				className='input input-bordered w-full'
				required
			/>
			<input
				type='password'
				placeholder='Password'
				className='input input-bordered w-full'
				required
			/>

			<button type='submit' className='btn btn-primary w-full'>
				Login
			</button>
		</form>
	);
};
export default LoginForm;
