import NotesComponent from "../Components/NotesComponent";

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
      <div className=" flex p-10 bg-transparent bg-gradient-to-r from-cyan-950 to-cyan-900">
        <div className="mt-20 mb-60 border border-dotted border-x-2 border-gray-500 my-4"></div>
        <div className="rounded-xl py-10 pr-10">
          <NotesComponent />
          <NotesComponent />
          <NotesComponent />
          <NotesComponent />
          <NotesComponent />
        </div>
      </div>
    </>
  );
}

export default Home;
