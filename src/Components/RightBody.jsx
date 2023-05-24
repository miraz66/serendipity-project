import { useEffect, useRef } from "react";
import DragonImage2 from "../Tools/Image/dragon.png";

function RightBody() {
  const myElementRef = useRef(null);

  useEffect(() => {
    const element = document.getElementById("myElement");

    for (let stars = 0; stars < 30; stars++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.classList.add("animate-popup");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      element.appendChild(star);
    }
  }, []);

  return (
    <>
      <div className="text-gray-100 pt-10 fixed text-xl">Serendipity</div>
      <div className="fixed max-w-xl mt-20">
        <img className="" src={DragonImage2} alt="" />
        <div className="mt-52 ">
          <div className=" absolute  animate-blob mix-blend-color-dodge blur-xl   bg-gray-700 w-72 h-72 rounded-full left-0 top-40 "></div>
          <div className=" absolute  animation-delay-2000 animate-blob mix-blend-color-dodge blur-xl  bg-gray-700 w-72 h-72 rounded-full top-60 right-10 "></div>
          <div className=" absolute animation-delay-4000  animate-blob mix-blend-color-dodge blur-xl  bg-gray-700 w-72 h-72 rounded-full top-0 right-0 "></div>
          <div className=" " id="myElement" ref={myElementRef}></div>
        </div>
      </div>
      <div className=" fixed top-[800px] left-0 text-white  bg-yellow-500">
        hello
      </div>
    </>
  );
}

export default RightBody;
