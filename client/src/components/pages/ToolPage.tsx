export default function ToolPage() {
  return (
    <>
      <div className="border-slate-400">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <div>
                <p className="text-9xl inline-block bg-gradient-to-r from-red-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent ">Upload to AWS</p>{" "}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <form className="max-w-sm mx-auto bg-gray-100 p-20 rounded-lg">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Name of the file
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  htmlFor="file"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="_help"
                  id="file"
                  type="file"
                />
                <div
                  className="mt-1 text-sm text-gray-500 dark:text-gray-600"
                  id="_help"
                >
                  Please upload only one file at a time.
                </div>

                <button
                  type="submit"
                  className="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
