/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { BiMinus } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import axios from "axios";

const FAQ = () => {
  const [openAns, setOpenAns] = useState(null);
  const [questions, setQuestions] = useState([]);

  const fetchData = () => {
    axios
      .get("/faq.json")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenAns = (open) => {
    if (openAns === open) {
      return setOpenAns(null);
    }
    setOpenAns(open);
  };
  return (
    <div className="container py-[44px] lg:py-[144px]">
      <h2 className="text-[32px] md:text-[40px] lg:text-[64px] font-bold">
        Let’s explore the thoughts <br /> that are on your mind.
      </h2>
      <div className="h-1 bg-primary-800 w-20 mb-[32px] lg:mb-[60px]"></div>
      {questions.map((question, open) => (
        <div key={question._id} className="py-[51px] border-t border-gray-200/70">
          <div onClick={() => handleOpenAns(open)} type="button" className="cursor-pointer w-full flex justify-between gap-6">
            <h2 className="text-[24px] lg:text-[32px] font-semibold text-secondary-800">{question.question}</h2>
            <span>{openAns === open ? <BiMinus className="text-2xl" /> : <FiChevronDown className="text-2xl" />}</span>
          </div>
          <p className={openAns === open ? "text-[16px] lg:text-[24px] mt-[26px] lg:mt-[29px] text-secondary-800 h-auto duration-300 transition-all" : "hidden"}>
            {question.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
