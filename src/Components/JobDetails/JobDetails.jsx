import { useLoaderData, useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();

  // Solution 1
  const jobData = useLoaderData();
  const selectedJob = jobData.find((job) => job.id === Number(id));

  return (
    <div>
      <div className="w-3/4 mx-auto my-10   rounded-md grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold mb-2">Job Description:</h3>
            <p className="text-gray-600">{selectedJob.job_description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Job Responsibility:</h3>
            <p className="text-gray-600">{selectedJob.job_responsibility}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Educational Requirements:</h3>
            <p className="text-gray-600">
              {selectedJob.educational_requirements}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Experiences:</h3>
            <p className="text-gray-600">{selectedJob.experiences}</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-blue-50 rounded-md p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Job Details</h3>
              <hr className="mb-4" />
              <p className="mb-2">
                <span className="font-semibold">Salary:</span>{" "}
                {selectedJob.salary} (Per Month)
              </p>
              <p>
                <span className="font-semibold">Job Title:</span>{" "}
                {selectedJob.job_title}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <hr className="mb-4" />
              <p className="mb-2">
                <span className="font-semibold">Phone:</span>{" "}
                {selectedJob.contact_information.phone}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Email:</span>{" "}
                {selectedJob.contact_information.email}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {selectedJob.contact_information.address}
              </p>
            </div>
          </div>

          <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-md">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
