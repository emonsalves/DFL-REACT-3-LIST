function Footer({ arrayDb, search, btnSearch}) {

  const filterArray = arrayDb.filter((item) => item.name.toUpperCase() === search.toUpperCase())

  return (
    <>
      <div className="mt-6 overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-blue-700 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6">
                Id
              </th>
              <th scope="col" className="py-2 px-2">
                Nombre
              </th>
              <th scope="col" className="py-2 px-2">
                Correo
              </th>
            </tr>
          </thead>
          <tbody>
            {btnSearch === false
              ? arrayDb.map((slot) => (
                  <tr
                    key={slot.name}
                    className="bg-white border-b dark:bg-gray-400 dark:border-gray-500
                          text-black"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium whitespace-nowrap
                            text-black"
                    >
                      {slot.id}
                    </th>
                    <td className="py-2 px-2">{slot.name}</td>
                    <td className="py-2 px-2">{slot.mail}</td>
                  </tr>
                ))
              : filterArray.map((slot) => (
                <tr
                  key={slot.name}
                  className="bg-white border-b dark:bg-gray-400 dark:border-gray-500
                        text-black"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium whitespace-nowrap
                          text-black"
                  >
                    {slot.id}
                  </th>
                  <td className="py-2 px-2">{slot.name}</td>
                  <td className="py-2 px-2">{slot.mail}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default Footer
