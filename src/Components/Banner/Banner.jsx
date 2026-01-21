import userImage from "../../assets/images/user.png";

export default function Banner() {
  return (
    <div className="bg-slate-50 px-2 pt-2 min-h-96">
      <div className="w-3/4 mx-auto min-h-96 flex flex-col md:flex-row justify-center gap-4 my-4">
        {/* left  */}
        <div className="flex-1 p-4">
          <p className="text-5xl font-bold mt-8">
            One Step <br /> Closer To Your
          </p>
          <p className="text-5xl font-bold my-4 text-[#7f8ffe]">Dream Job</p>
          <p className="text-sm">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="mt-4">
            <button
              className="text-sm bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-md text-white"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
        {/* right  */}
        <div className="flex-1 px-4">
          <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  );
}
