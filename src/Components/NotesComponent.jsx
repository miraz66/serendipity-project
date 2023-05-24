function NotsComponent() {
  return (
    <div className="flex flex-row bg-transparent rounded-r-xl  bg-gradient-to-r from-cyan-950 to-gray-700 mb-10 py-10 pr-10">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" -ml-[27px] bg-gradient-to-bl from-violet-500 to-yellow-500 w-10 h-10 p-2 rounded-full shadow-xl shadow-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>
      </div>
      <div className="ml-10">
        <h1 className="text-xl">Feature</h1>
        <p className="uppercase text-base">
          <span className="text-emerald-600">/Describe </span>Released-april 21,
          2023
        </p>
        <ul className="text-sm">
          <li>
            Our system has been updated to ensure that it soes not return
            results with banned words.
          </li>
          <li>
            We have added an NSFW image filter detector that works similarly to
            the image prompt filter.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotsComponent;
