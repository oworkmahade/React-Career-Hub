import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

export default function AppliedJob({ appliedJob }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between border">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-lg">
          <img src={appliedJob.logo} className="w-12" />
        </div>

        {/* Job Info */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{appliedJob.job_title}</h3>
          <p className="text-gray-500 text-sm">{appliedJob.company_name}</p>

          {/* Tags */}
          <div className="flex gap-2 mt-2">
            <span className="px-3 py-1 text-xs rounded-sm bg-blue-100 text-blue-600">
              {appliedJob.remote_or_onsite}
            </span>
            <span className="px-3 py-1 text-xs rounded-sm bg-indigo-100 text-indigo-600">
              {appliedJob.job_type}
            </span>
          </div>

          {/* Location & Salary */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <span className="flex items-center gap-1">
              <CiLocationOn /> {appliedJob.location}
            </span>
            <span className="flex items-center gap-1">
              <CiDollar /> Salary :{appliedJob.salary}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium">
        View Details
      </button>
    </div>
  );
}
