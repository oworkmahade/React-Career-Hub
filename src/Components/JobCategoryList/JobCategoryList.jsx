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

  return (
    <div className="w-3/4 p-2 mx-auto my-2 mt-32">
      <Section para="Job Category List provides a structured overview of job sectors, helping users for choosing suitable career opportunities easily"></Section>

      <div className="grid grid-cols-1 gap-4 JobCategoryList md:grid-cols-4">
        {categoryList.map((category) => (
          <CategoryList key={category.id} category={category}></CategoryList>
        ))}
      </div>
    </div>
  );
}
