import { CiLocationOn, CiDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Job({ job }) {
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/job/${job.id}`);
  };
  return (
    <div className="p-16 border featured_job_card border-slate-200">
      <img src={job.logo} alt="" srcSet="" />
      <h2 className="my-4 text-xl font-semibold text-left">{job.job_title}</h2>
      <h2 className="my-2 text-lg font-semibold">{job.company_name}</h2>
      <div className="flex flex-row gap-4 text-sm font-semibold text-blue-500">
        <button className="p-2 border border-blue-100 rounded-sm">
          {job.remote_or_onsite}
        </button>
        <button className="p-2 border border-blue-100 rounded-sm">
          {job.job_type}
        </button>
      </div>

      <div className="flex flex-row gap-6 my-4">
        <div className="flex flex-row items-center justify-center gap-2">
          <section>
            <CiLocationOn />
          </section>
          <section>{job.location}</section>
        </div>

        <div className="flex flex-row items-center justify-center gap-2">
          <section>
            <CiDollar />
          </section>
          <section>Salary: {job.salary}</section>
        </div>
      </div>

      <div className="button ">
        <button
          onClick={handleShowDetails}
          className="px-4 py-2 bg-gradient-to-r from-[#818cf8] to-[#a78bfa] text-white font-semibold rounded-sm shadow-sm hover:opacity-90 transition-opacity"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

Job.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    logo: PropTypes.string,
    job_title: PropTypes.string,
    company_name: PropTypes.string,
    remote_or_onsite: PropTypes.string,
    job_type: PropTypes.string,
    location: PropTypes.string,
    salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
