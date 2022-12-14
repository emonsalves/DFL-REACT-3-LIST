function Navbar({ search, setSearch, setBtnSearch, arrayDb }) {
  const searchPersonal = (e) => {
    const filterArray = arrayDb.filter(
      (item) => item.name.toUpperCase() === search.toUpperCase()
    )
    filterArray[0] === undefined
      ? alert("Persona no encontrada")
      : setBtnSearch(true)
    document.getElementById("default-search").focus()
  }

  const captureSearch = (e) => {
    setSearch(e.target.value)
    setBtnSearch(false)
  }

  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>

      <input
        onChange={captureSearch}
        type="search"
        id="default-search"
        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Buscar Personal"
        required=""
        value={search}
      />
      <button
        // onClick={searchPersonal}
        onClick={searchPersonal}
        type="button"
        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Buscar
      </button>
    </div>
  )
}

export default Navbar
