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
    }
  };

  return (
    <div>
      <div className="grid w-3/4 grid-cols-1 gap-8 mx-auto my-10 rounded-md md:grid-cols-3">
        {/* LEFT SIDE */}
        <div className="space-y-6 text-sm leading-relaxed md:col-span-2">
          <div>
            <h3 className="mb-2 font-semibold">Job Description:</h3>
            <p className="text-gray-600">{selectedJob.job_description}</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Job Responsibility:</h3>
            <p className="text-gray-600">{selectedJob.job_responsibility}</p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Educational Requirements:</h3>
            <p className="text-gray-600">
              {selectedJob.educational_requirements}
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Experiences:</h3>
            <p className="text-gray-600">{selectedJob.experiences}</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between p-6 rounded-md bg-blue-50">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-semibold">Job Details</h3>
              <hr className="mb-4" />
              {/* salary  */}
              <div className="flex flex-row items-center gap-2 mb-2 Salary justify-left">
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
              <div className="flex flex-row gap-2 mb-2 Job-Title Salary justify-left">
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
              <h3 className="mb-4 font-semibold">Contact Information</h3>
              <hr className="mb-4" />
              {/* Phone  */}
              <div className="flex flex-row items-center gap-2 mb-2 Phone justify-left">
                <span>
                  <LuPhone />
                </span>
                <span>
                  <span className="font-semibold">Phone:</span>{" "}
                  {selectedJob.contact_information.phone}
                </span>
              </div>
              {/* email  */}
              <div className="flex flex-row items-center gap-2 mb-2 email justify-left">
                <span>
                  <AiOutlineMail />
                </span>
                <span>
                  <span className="font-semibold">Email:</span>{" "}
                  {selectedJob.contact_information.email}
                </span>
              </div>
              {/* address  */}
              <div className="flex flex-row gap-2 mb-2 address justify-left">
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
          <div className="flex flex-row justify-center applyNowBtn">
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
