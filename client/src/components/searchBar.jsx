import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";

function searchBar() {
const [value, setValue] = useState();
  return (
    <>  
       <div className=" rounded-lg flex bg-white h-8 justify-center items-center">
          <div className="h-8 rounded-lg bg-white flex items-center pl-2">
            <SearchIcon className="text-gray-600" />
            <input
              className="rounded-lg h-full nav-src border-white outline-none pl-2"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
    </>
  )
}

export default searchBar