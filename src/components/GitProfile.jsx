import React, { useState } from "react";
function GitProfile() {
  const [name, setName] = useState(null);

  return (
<div className="pb-5 h-auto my-20" id="experience">
  {/* Title Section */}
  <div className="text-center font-bold flex justify-between items-center">
    <h1 className="text-6xl max-md:text-4xl">Github Calendar</h1>
    <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
  </div>


  {/* Experience Section */}
  <div className="flex flex-col mt-14 gap-10">
  </div>
</div>

  );
}

export default GitProfile;