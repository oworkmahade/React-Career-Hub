export default function Job({ job }) {
  return (
    <>
      <div className="featured_job_card p-4">
        <img src={job.logo} alt="" srcset="" />
        <h2 className="text-2xl font-semibold text-left">{job.job_title}</h2>
        <h2 className="text-2xl font-semibold">{job.company_name}</h2>
        <div>
          <button>{job.remote_or_onsite}</button>
          <button>{job.job_type}</button>
        </div>

        <div>
          <section></section>
          <section>{job.location}</section>
        </div>

        <div>
          <section></section>
          <section>Salary: {job.salary}</section>
        </div>

        <div className="button">
          <button>View Details</button>
        </div>
      </div>
    </>
  );
}
