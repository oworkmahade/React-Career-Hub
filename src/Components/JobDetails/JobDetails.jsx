import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import SharedButton from "../SharedButton/SharedButton";
import { ToastContainer, toast } from "react-toastify";
import {
  saveJobApplication,
  getStoredJobApplication,
} from "../../utility/localStorage";

export default function JobDetails() {
  const { id } = useParams();
  const jobs = useLoaderData();

  const selectedJob = jobs.find((job) => job.id === Number(id));

  const navigate = useNavigate();

  const handleAppliedJob = (id) => {
    // this will give an array
    const storedApplicationId = getStoredJobApplication();

    if (storedApplicationId.includes(id)) {
      toast("Already Applied !");
    } else {
      saveJobApplication(id);
      toast("Job Applied Successfully !");
      navigate("/appliedjobs");
      // setTimeout(() => {
      // }, 1000);
    }
  };

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
              {/* salary  */}
              <div className="Salary flex flex-row justify-left items-center mb-2 gap-2">
                <span>
                  <CiDollar />
                </span>
                <span>
                  {" "}
                  <span className="font-semibold">Salary:</span>{" "}
                  {selectedJob.salary} (Per Month)
                </span>
              </div>
              {/* Job Title  */}
              <div className="Job-Title Salary flex flex-row justify-left  mb-2 gap-2">
                <span className="mt-1">
                  <MdOutlineSubtitles />
                </span>
                <span>
                  <span className="font-semibold">Job Title:</span>{" "}
                  {selectedJob.job_title}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <hr className="mb-4" />
              {/* Phone  */}
              <div className="Phone  flex flex-row justify-left items-center mb-2 gap-2">
                <span>
                  <LuPhone />
                </span>
                <span>
                  <span className="font-semibold">Phone:</span>{" "}
                  {selectedJob.contact_information.phone}
                </span>
              </div>
              {/* email  */}
              <div className="email flex flex-row justify-left items-center mb-2 gap-2">
                <span>
                  <AiOutlineMail />
                </span>
                <span>
                  <span className="font-semibold">Email:</span>{" "}
                  {selectedJob.contact_information.email}
                </span>
              </div>
              {/* address  */}
              <div className="address flex flex-row justify-left  mb-2 gap-2">
                <span className="mt-1">
                  <CiLocationOn />
                </span>
                <span>
                  <span className="font-semibold">Address:</span>{" "}
                  {selectedJob.contact_information.address}
                </span>
              </div>
            </div>
          </div>
          <div className="applyNowBtn flex flex-row justify-center">
            <SharedButton
              btnText="Apply Now"
              onClickValue={() => handleAppliedJob(parseInt(selectedJob.id))}
            ></SharedButton>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
