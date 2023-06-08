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
      .get("https://mocki.io/v1/af08530e-0341-4de5-b684-1beaf3477b7d")
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
      <div className="h-[7px] bg-primary-800 w-36 mb-[32px] lg:mb-[60px]"></div>
      {questions.map((question, open) => (
        <div key={question._id} className="py-[51px] border-t border-gray-200/70 ">
          <div onClick={() => handleOpenAns(open)} type="button" className="cursor-pointer w-full flex justify-between gap-6">
            <h2 className="text-[24px] lg:text-[32px] font-semibold text-secondary-800">{question.question}</h2>
            <span>{openAns === open ? <BiMinus className="text-2xl" /> : <FiChevronDown className="text-2xl" />}</span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${openAns === open ? "h-auto mt-[26px] lg:mt-[29px]" : "h-0 mt-0"} `}
          >
            <p className="text-secondary-800 text-[16px] lg:text-[24px]">{question.answer}</p>
          </div>
        </div>
      ))}
      <div className="w-full border-b border-gray-200/70"></div>
    </div>
  );
};

export default FAQ;
