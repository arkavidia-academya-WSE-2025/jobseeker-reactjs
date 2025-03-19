const AboutSection = ({ userData, isOwnProfile }) => {
    return (
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">About</h2>
        {isOwnProfile && (
          <>
            <p>{userData.about}</p>
            <button
              onClick={() => {}}
              className="mt-2 text-primary hover:text-primary-dark transition duration-300"
            >
              Edit
            </button>
          </>
        )}
      </div>
    );
  };
  export default AboutSection;
  