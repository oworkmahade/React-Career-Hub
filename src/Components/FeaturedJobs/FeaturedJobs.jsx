import React, { useState } from "react";
import Section from "../Section/Section";
import Job from "../Job/Job";
import SharedButton from "../SharedButton/SharedButton";

export default function FeaturedJobs({ jobs }) {
  //  display data slicing
  const [dataLength, setDataLength] = useState(4);
  return (
    <div className=" my-2 p-2 mt-24">
      <Section
        title="Featured Jobs"
        // para="Featured Jobs highlights top career opportunities selected for their relevance, demand, and growth potential."
      ></Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto mt-24">
        {jobs.slice(0, dataLength).map((job) => (
          <Job job={job}></Job>
        ))}
      </div>
      <div
        className={`seeAll flex flex-row justify-center my-8 w-32 mx-auto ${dataLength === jobs.length && "hidden"}`}
      >
        <SharedButton
          btnText="See All Jobs "
          onClickValue={() => setDataLength(jobs.length)}
        ></SharedButton>
      </div>
    </div>
  );
}
