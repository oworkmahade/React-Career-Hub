import React, { useState } from "react";
import PropTypes from "prop-types";
import Section from "../Section/Section";
import Job from "../Job/Job";
import SharedButton from "../SharedButton/SharedButton";

export default function FeaturedJobs({ jobs }) {
  //  display data slicing
  const [dataLength, setDataLength] = useState(4);
  return (
    <div className="p-2 my-2 mt-24 ">
      <Section
        title="Featured Jobs"
        // para="Featured Jobs highlights top career opportunities selected for their relevance, demand, and growth potential."
      ></Section>

      <div className="grid w-3/4 grid-cols-1 gap-4 mx-auto mt-24 md:grid-cols-2">
        {Array.isArray(jobs) &&
          jobs
            .slice(0, dataLength)
            .map((job) => <Job key={job.id} job={job}></Job>)}
      </div>
      <div
        className={`seeAll flex flex-row justify-center my-8 w-32 mx-auto ${Array.isArray(jobs) && dataLength === jobs.length ? "hidden" : ""}`}
      >
        <SharedButton
          btnText="See All Jobs "
          onClickValue={() => setDataLength(jobs.length)}
        ></SharedButton>
      </div>
    </div>
  );
}

FeaturedJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};
