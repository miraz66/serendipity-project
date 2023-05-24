import { useState } from "react";

function SingUp() {
  const [display, setDisplay] = useState(false);
  function handleSingUp() {
    setDisplay(!display);
  }
  console.log(display);
  return (
    <div>
      <button
        onClick={handleSingUp}
        className="bg-white bg-transparent px-5 py-1 rounded-md text-gray-100 bg-gradient-to-bl from-violet-500 to-yellow-500"
      >
        SingUp
      </button>

      {display && (
        <div className="fixed left-1/3 p-20 bg-gray-300">
          <button onClick={handleSingUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          hello
        </div>
      )}
    </div>
  );
}

export default SingUp;
