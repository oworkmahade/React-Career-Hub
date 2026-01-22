import { useEffect, useState } from "react";
import Section from "../Section/Section";
import CategoryList from "../../assets/images/CategoryList/CategoryList";

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
      <div className="my-2 p-2 w-3/4 mx-auto mt-32">
        <Section para="Job Category List provides a structured overview of job sectors, helping users for choosing suitable career opportunities easily"></Section>

        <div className="JobCategoryList grid grid-cols-1 md:grid-cols-4 gap-4">
          {categoryList.map((category) => (
            <CategoryList category={category}></CategoryList>
          ))}
        </div>
      </div>
    </>
  );
}
