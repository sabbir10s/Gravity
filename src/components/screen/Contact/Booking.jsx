import { useState } from "react";
import "../../../styles/Booking.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const tags = ["Strategy", "Design", "Development", "Marketing"];
  const [selectedTags, setSelectedTags] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let timerInterval;
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank you for contacting us!",
      html: "Please wait while we connect you.",
      timer: 3000,
      timerProgressBar: true,
      customClass: {
        container: "my-swal-container",
        popup: "my-swal-popup",
        header: "my-swal-header",
        title: "my-swal-title",
        closeButton: "my-swal-close-button",
        icon: "my-swal-icon",
        image: "my-swal-image",
        htmlContainer: "my-swal-html-container",
        input: "my-swal-input",
        inputLabel: "my-swal-input-label",
        validationMessage: "my-swal-validation-message",
        actions: "my-swal-actions",
        confirmButton: "my-swal-confirm-button",
        denyButton: "my-swal-deny-button",
        cancelButton: "my-swal-cancel-button",
        loader: "my-swal-loader",
        footer: "my-swal-footer",
        timerProgressBar: "my-swal-progress-bar",
      },
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 1200);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
    setName("");
    setEmail("");
    setMessage("");
    navigate("/");
  };
  return (
    <div className="bg-white">
      <div className="container py-[44px] lg:py-[144px]">
        <div className="lg:grid grid-cols-3 lg:gap-20">
          <div className="lg:col-span-2">
            <p className="uppercase text-[16px] lg:text-[20px] text-secondary-800">Pick what you are interested in</p>
            <div className="mt-[24px] flex flex-wrap gap-4 lg:gap-8">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    selectedTags.includes(tag) ? setSelectedTags(selectedTags.filter((t) => t !== tag)) : setSelectedTags([...selectedTags, tag])
                  }
                  className={` py-3 px-10 text-[14px] lg:text-[20px] font-semibold rounded focus:outline-none ${
                    selectedTags.includes(tag)
                      ? "bg-primary-600 text-white border-2 border-transparent"
                      : "tagButton bg-white text-black border-2 border-[#f0f0f0]"
                  }`}
                >
                  <span className="text">{tag}</span>
                </button>
              ))}
            </div>
            <div className="mt-[50px]">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className=" text-[20px] w-full border-b-2 border-[#f0f0f0] focus:border-primary-800 pb-2 outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="What’s your name"
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="mt-[50px] text-[20px] w-full border-b-2 border-[#f0f0f0]  focus:border-primary-800 pb-2 outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Type e-mail address"
                  required
                />
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="mt-[50px] text-[20px] w-full border-b-2 border-[#f0f0f0]  focus:border-primary-800 pb-2 outline-none"
                  type="text"
                  name="about"
                  id="about"
                  placeholder="What can you tell us about it?"
                  required
                />
                <button className=" w-full lg:w-fit mt-[50px] text-[20px] bg-primary-800 hover:bg-primary-600 rounded shadow-custom cursor-pointer duration-300 transition-all ease-in-out text-white px-[80px] py-[20px]">
                  Send a Request
                </button>
              </form>
            </div>
          </div>
          <div className="hidden lg:block">
            <div>
              <p className="uppercase text-[16px] text-secondary-800/50">Address</p>
              <p className="mt-[10px] text-[20px] text-secondary-800">
                Uttara, Sector- 4,
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
            <div className="mt-[60px]">
              <p className="uppercase text-[16px] text-secondary-800/50">Prefer to talk?</p>
              <p className="mt-[10px] text-[20px] text-secondary-800">09638-945755</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
