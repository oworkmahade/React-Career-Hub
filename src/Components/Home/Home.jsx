import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <JobCategoryList></JobCategoryList>
      <FeaturedJobs jobs={jobs}></FeaturedJobs>
    </div>
  );
};

export default Home;
