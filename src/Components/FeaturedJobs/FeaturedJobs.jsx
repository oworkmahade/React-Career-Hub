import React from "react";
import Section from "../Section/Section";
import Job from "../Job/Job";

export default function FeaturedJobs({ jobs }) {
  return (
    <div className=" my-2 p-2 mt-24">
      <Section
        title="Featured Jobs"
        // para="Featured Jobs highlights top career opportunities selected for their relevance, demand, and growth potential."
      ></Section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto mt-24">
        {jobs.map((job) => (
          <Job job={job}></Job>
        ))}
      </div>
    </div>
  );
}
