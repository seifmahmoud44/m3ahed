import { useState } from "react";

import classes from "./news.module.css";
import NewsPageIcon from "./newsPageIcon/NewsPageIcon";

import "react-quill/dist/quill.snow.css";
import Pagination from "../../components/pafination/Pagination";
const News = () => {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const products = [
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },

    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 2", description: "Description of product 2" },
    { name: "Product 1", description: "Description of product 1" },
    { name: "Product 2", description: "Description of product 2" },
  ];

  const currentData = () => {
    const startIdx = (currentPage - 1) * itemsPerPage;
    return data.slice(startIdx, startIdx + itemsPerPage);
  };
  return (
    <>
      <h1 className={classes.title}>اخبارنا</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 max-w-[1200px] mx-auto">
        {products.map((product, index) => (
          <div key={index} className="">
            {/* Customize this content */}
            <NewsPageIcon
              headLine="أجمل اللحظات"
              path="/news/bestMoment"
              imageBackground="../../../public/7489234.jpg"
            />
          </div>
        ))}
      </div>
      {/* <div className="my-10">
        <Pagination products={products} itemsPerPage={10} />
      </div> */}
    </>
  );
};

export default News;
