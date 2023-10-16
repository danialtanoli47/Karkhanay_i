import Link from "next/link";

const MNewsBar = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/*News Section */}
      <>
        <div className="flex flex-col w-full ">
          <div className="text-md flex justify-between w-full py-1.5 px-3 bg-lime-50 items-center">
            <div className="text-gray-700">
              News & Highlights Section in the b2b marketplace that buyers and
              suppliers might be interested in.
            </div>
            <div className="text-gray-700  pl-4">
              {/**!! make all news inline when compact */}
              <Link className="font-bold underline whitespace-nowrap" href="/">
                All News
              </Link>
            </div>
          </div>
          <div className="w-full bg-lime-200 h-[2px] "></div>
        </div>
      </>
    </section>
  );
};

export default MNewsBar;
