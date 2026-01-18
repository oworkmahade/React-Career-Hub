import React from "react";
import Section from "../Section/Section";
import Job from "../Job/Job";

export default function FeaturedJobs({ jobs }) {
  console.log(jobs);

  return (
    <div className="border-red-600 border-2 my-2 p-2 ">
      <Section
        title="Featured Jobs"
        para="Featured Jobs highlights top career opportunities selected for their relevance, demand, and growth potential."
      ></Section>

      <div className="grid grid-cols-2 gap-4 p-4">
        {jobs.map((job) => (
          <Job job={job}></Job>
        ))}
      </div>
    </div>
  );
}
