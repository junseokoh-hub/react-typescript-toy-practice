import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

interface JobsType {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

const url = "https://course-api.com/react-tabs-project";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<JobsType[]>([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="my-20 mx-auto w-[90vw] max-w-6xl lg:w-[95vw]">
      <div className="mb-16 text-center">
        <h2 className="heading">experience</h2>
        <div className="mx-auto mb-5 w-20 h-1 bg-blue-500"></div>
      </div>
      <div className="my-0 mx-auto w-[80vw] max-w-6xl">
        {/* btn container */}
        <div className="mb-16 flex flex-col justify-center flex-wrap">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`my-0 mx-2 py-1 px-0 bg-transprent border-transparent capitalize text-xl tracking-widest transition-all ease-linear duration-300 cursor-pointer leading-4 outline-blue-200 hover:text-blue-500 hover:shadow-md hover:shadow-blue-300 ${
                  index === value && "text-blue-500 shadow-md shadow-blue-300"
                }`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3 className="heading font-normal">{title}</h3>
          <h4 className="heading py-1 px-3 uppercase font-bold text-gray-900 bg-gray-200 inline-block rounded-md">
            {company}
          </h4>
          <p className="mb-5 text-gray-600 tracking-widest">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div
                key={index}
                className="mb-5 grid grid-cols-[auto_1fr] gap-x-8 items-center"
              >
                <FaAngleDoubleRight className="text-blue-500"></FaAngleDoubleRight>
                <p className="mb-0 text-gray-900">{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button
        type="button"
        className="lg:my-0 lg:mx-auto lg:mt-12 lg:py-1 lg:px-3 lg:transition-all lg:ease-linear lg:duration-300 lg:cursor-pointer lg:border-2 lg:border-solid lg:border-transparent lg:shadow-md lg:shadow-gray-100 lg:rounded-md lg:uppercase lg:bg-blue-500 lg:text-blue-900 lg:tracking-widest lg:font-bold lg:text-sm lg:block lg:w-48 lg:text-center lg:hover:text-blue-900 lg:hover:bg-blue-100"
      >
        more info
      </button>
    </section>
  );
};

export default App;
