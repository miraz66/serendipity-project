import React from "react";

function text() {
  return (
    <p>
      Alternatively, you might have seen or heard about the box-shadow effect.
      This effect will not wrap around the edges of your PNG; instead, use the
      box it is in. You can see the box-shadow on the left and the drop shadow
      effect on the right in the image below.
    </p>
  );
}

function Home() {
  return (
    <>
      <div className=" p-10 bg-transparent bg-gradient-to-bl from-cyan-900 from-30% via-cyan-950 via-70% to-gray-950 to-90%">
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
        <div className="max-w-3xl p-2">{text()}</div>
      </div>

      <div className="stars"></div>
      <div className="twinkleMask"></div>
      <div className="twinkleMask2"></div>
    </>
  );
}

export default Home;
