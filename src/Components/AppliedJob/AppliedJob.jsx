import PropTypes from "prop-types";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function AppliedJob({ job }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${job.id}`);
  };
  return (
    <div className="flex items-center justify-between p-6 bg-white border shadow-sm rounded-xl">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
          <img src={job.logo} alt={job.company_name} className="w-12" />
        </div>

        {/* Job Info */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{job.job_title}</h3>
          <p className="text-sm text-gray-500">{job.company_name}</p>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-sm">
              {job.remote_or_onsite}
            </span>
            <span className="px-3 py-1 text-xs text-indigo-600 bg-indigo-100 rounded-sm">
              {job.job_type}
            </span>
          </div>

          {/* Location & Salary */}
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <CiLocationOn /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <CiDollar /> Salary :{job.salary}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <button
        onClick={handleViewDetails}
        className="px-5 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
      >
        View Details
      </button>
    </div>
  );
}

AppliedJob.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    remote_or_onsite: PropTypes.string.isRequired,
    job_type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
  }).isRequired,
};
