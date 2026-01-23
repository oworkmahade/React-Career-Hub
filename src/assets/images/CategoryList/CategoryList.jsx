import React from "react";

export default function CategoryList({ category }) {
  const { logo, category_name, availability } = category;
  return (
    <div className="w-58 p-8  rounded-lg bg-slate-50 mt-8">
      <div className="w-14 h-14 bg-blue-50 rounded-md mb-6 flex items-center justify-center">
        <img src={logo} alt="" srcset="" />
      </div>
      <h3 className="text-lg font-semibold">{category_name}</h3>
      <p className="text-sm text-gray-400">{availability} Jobs Available</p>
    </div>
  );
}
