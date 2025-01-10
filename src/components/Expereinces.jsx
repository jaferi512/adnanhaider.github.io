import React, { useState } from "react";

function Experiences() {
  const [name, setName] = useState(null);

  return (
<div className="pb-5 h-auto my-20" id="experience">
  {/* Title Section */}
  <div className="text-center font-bold flex justify-between items-center">
    <h1 className="text-6xl max-md:text-4xl">Work Experience</h1>
    <div className="text-[#7e9199] text-6xl max-md:text-4xl">{name}</div>
  </div>

  {/* Experience Section */}
  <div className="flex flex-col mt-14 gap-10">

{/* Experience Item 1 */}
<div className="flex max-sm:flex-col items-start sm:items-center justify-between gap-5 p-5 border-b border-gray-300">
  <div className="text-left">
    <h2 className="text-3xl font-semibold">Full Stack Mobile Engineer - Upwork <a href="https://www.upwork.com/freelancers/~01e023530d43f9a1b6" class="styled-link" target="_blank">(Link)</a></h2>
    <p className="text-xl text-[#7e9199]">Jan 2020 - Present</p>
    <ul className="list-disc ml-5 mt-2 text-lg">
    <li>Designed and developed cross-platform mobile applications using React Native, delivering high-performance and user-friendly experiences.</li>
<li>Built and integrated RESTful APIs and managed backend services using cloud platforms like AWS and Firebase.</li>
<li>Created responsive and dynamic UI/UX designs, ensuring compatibility across multiple devices and screen sizes.</li>
<li>Deployed mobile applications to the Apple App Store and Google Play Store, ensuring compliance with platform guidelines.</li>
<li>Collaborated with clients to understand requirements, deliver customized solutions, and provide ongoing support for app improvements.</li>

    </ul>
  </div>
</div>

{/* Experience Item 2 */}
<div className="flex max-sm:flex-col items-start sm:items-center justify-between gap-5 p-5 border-b border-gray-300">
  <div className="text-left">
    <h2 className="text-3xl font-semibold">Product Development Engineer - Buzznog LLC <a href="https://www.buzznog.com" class="styled-link" target="_blank">(Link)</a></h2>
    <p className="text-xl text-[#7e9199]">Dec 2023 - Present</p>
    <ul className="list-disc ml-5 mt-2 text-lg">
    <li>Developing and maintaining cross-platform mobile applications using React Native, ensuring seamless functionality and user experience.</li>
<li>Integrating APIs and third-party services to enable real-time data synchronization, push notifications, and enhanced app features.</li>
<li>Collaborating with cross-functional teams to define, design, and implement new features while maintaining code quality and performance optimization.</li>
<li>Deploying and managing mobile applications on the Apple App Store and Google Play Store, ensuring compliance with platform standards.</li>
<li>Troubleshooting and resolving critical issues by debugging, enhancing app stability, and addressing user feedback to improve overall performance.</li>

    </ul>
  </div>
</div>

{/* Experience Item 3 */}
{/* <div className="flex max-sm:flex-col items-start sm:items-center justify-between gap-5 p-5 border-b border-gray-300">
  <div className="text-left">
    <h2 className="text-3xl font-semibold">Senior Mobile Application Developer - SportsLive Web3 <a href="https://sportslive.software" class="styled-link" target="_blank">(Link)</a></h2>
    <p className="text-xl text-[#7e9199]">Nov 2023 - Jan 2024</p>
    <ul className="list-disc ml-5 mt-2 text-lg">
      <li>Developing and maintaining React Native apps with a focus on optimizing performance and implementing new features.</li>
      <li>Leading the mobile development team and mentoring junior developers.</li>
      <li>Integrating Web3 technologies and blockchain-based features into the mobile app.</li>
    </ul>
  </div>
</div> */}


    {/* Experience Item 2 */}
    <div className="flex max-sm:flex-col items-start sm:items-center justify-between gap-5 p-5 border-b border-gray-300">
  <div className="text-left">
    <h2 className="text-3xl font-semibold">Ropstam Solutions <a href="https://www.ropstam.com" class="styled-link" target="_blank">(Link)</a></h2> {/* Company Name */}
    
    {/* Second Role */}
    <div className="mt-5">
      <h3 className="text-2xl font-medium">Team Lead - App Team Lead</h3>
      <p className="text-xl text-[#7e9199]">Jun 2023 - Nov 2023</p>
      <ul className="list-disc mt-2 text-lg pl-5">
        <li>Tech lead role </li>
        <li>Participate in each phase of SDLC</li>
        <li>Mentorship and support</li>
        <li>Propeer documentation including projecte specs, tech details and team progress</li>
      </ul>
    </div>

    {/* First Role */}
    <div className="mt-3">
      <h3 className="text-2xl font-medium">React Native Developer</h3>
      <p className="text-xl text-[#7e9199]">Oct 2021 - Jun 2023</p>
      <ul className="list-disc mt-2 text-lg pl-5">
        <li>Developed, Tested, Deployed, and Maintained Mobile Applications and Adding New Application Features.</li>
        <li>Provided effective TroubleShooting, Debugging and Remediation For Mobile Applications.</li>
        <li>Successfully Communicated With the Client to Gather More In-Depth Information About the Assignment Requirements.</li>
        <li>Managing One Source For More Than 20 Clients along with Their Admin Panels and Complete Deployment For Admin, Android and IOS.</li>
        <li>Managing Whole Project and Keeping It Updated To Make it Compatible With Latest Android and IOS Updates.</li>
        <li>Participated in code reviews and contributed to the overall improvement of the codebase.</li>
      </ul>
    </div>
    
  </div>
</div>



    {/* Experience Item 3 */}
    <div className="flex max-sm:flex-col items-start sm:items-center justify-between gap-5 p-5">
  <div className="text-left">
    <h2 className="text-3xl font-semibold">React Native Developer - Pearl Solutions <a href="https://pearlsol.com" class="styled-link" target="_blank">(Link)</a></h2>
    <p className="text-xl text-[#7e9199]">Jan 2020 - Oct 2021</p>
    <ul className="list-disc mt-2 text-lg pl-5">
      <li>Developed, Tested, Deployed, and Maintained Smaller Mobile Applications and
      Adding New Application Features</li>
      <li>Developed Multiple Role Base Mobile Application and Dynamically Handling Their Views/Screens/Activities.</li>
    </ul>
  </div>
</div>

  </div>
</div>

  );
}

export default Experiences;