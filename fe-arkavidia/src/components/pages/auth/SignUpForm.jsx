const SignUpForm = () => {
	return (
	  <form className="flex flex-col gap-4">
		<input
		  type="text"
		  placeholder="Full name"
		  className="input input-bordered w-full"
		  required
		/>
		<input
		  type="text"
		  placeholder="Username"
		  className="input input-bordered w-full"
		  required
		/>
		<input
		  type="email"
		  placeholder="Email"
		  className="input input-bordered w-full"
		  required
		/>
		<input
		  type="password"
		  placeholder="Password (6+ characters)"
		  className="input input-bordered w-full"
		  required
		/>
  
		<button type="submit" className="btn btn-primary w-full text-white">
		  Agree & Join
		</button>
	  </form>
	);
  };
  export default SignUpForm;
  