import { useEffect, useState } from "react";
import Section from "../Section/Section";

export default function JobCategoryList() {
  // data load for job category using useState useEffect
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategoryList(data));
  }, []);

  // console.log(categoryList);
  return (
    <>
      <div className="border-red-600 border-2 my-2 p-2 w-3/4 mx-auto">
        <Section
          title="Job Category List"
          para="Job Category List provides a structured overview of job sectors, helping users for choosing suitable career opportunities easily"
        ></Section>
      </div>
    </>
  );
}
