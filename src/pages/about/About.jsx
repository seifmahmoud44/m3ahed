import { useEffect } from "react";
import classesAbout from "./about.module.css";
import { useState } from "react";

const About = () => {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const response = await fetch(
        "https://m3ahed.e3lanotopia.software/api/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);

      // Update state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Step 3: Call the `getData` function in useEffect
  useEffect(() => {
    getData();
  }, []);
  // console.log(data?.posts[0]?.content);

  return (
    <>
      {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 max-w-[1200px] mx-auto"></div> */}
      {data.posts && (
        <div dangerouslySetInnerHTML={{ __html: data?.posts[0]?.content }} />
      )}
    </>
  );
};

export default About;
