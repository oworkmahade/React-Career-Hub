import { CiLocationOn, CiDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Job({ job }) {
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/job/${job.id}`);
  };
  return (
    <>
      <div className="featured_job_card p-16 border-slate-200 border">
        <img src={job.logo} alt="" srcset="" />
        <h2 className="text-xl font-semibold text-left my-4">
          {job.job_title}
        </h2>
        <h2 className="text-lg font-semibold my-2">{job.company_name}</h2>
        <div className="flex flex-row gap-4 text-sm font-semibold text-blue-500">
          <button className="border-blue-100 border p-2 rounded-sm">
            {job.remote_or_onsite}
          </button>
          <button className="border-blue-100 border p-2 rounded-sm">
            {job.job_type}
          </button>
        </div>

        <div className="flex flex-row gap-6 my-4">
          <div className="flex flex-row justify-center items-center gap-2">
            <section>
              <CiLocationOn />
            </section>
            <section>{job.location}</section>
          </div>

          <div className="flex flex-row justify-center items-center gap-2">
            <section>
              <CiDollar />
            </section>
            <section>Salary: {job.salary}</section>
          </div>
        </div>

        <div className="button">
          <button
            onClick={handleShowDetails}
            className="bg-blue-400 rounded-sm p-2 text-white font-semibold"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
}
