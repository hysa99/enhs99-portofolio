export default function Home() {
  return (
    <main className="flex flex-col items-center md:p-24">
      
      <header>
        <div className="container flex justify-center items-center">
          <img className="rounded-full h-24 w-24 md:h-32 md:w-32" src="https://media.licdn.com/dms/image/D4D03AQG4STMtYTSY9w/profile-displayphoto-shrink_800_800/0/1695494328964?e=1717632000&v=beta&t=XYvDvTfygY1t2d6SjJ40nwsCPmgzkcs3rZkEUjUZ6nw" alt="profile picture"/>
          <h1 className="text-2xl md:text-4xl font-bold ml-4">Enea Hysa</h1>
        </div>
        <div className="flex justify-center mt-4 grid grid-cols-2">
          <a href="mailto:eneahysa4@gmail.com" type="email" id="email" className="flex items-center"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/new-post.png" alt="new-post"/> eneahysa4@gmail.com</a>
          <span className="mx-2">|</span>
          <a href="tel:+355693857457" type="phone" id="phone" className="flex items-center"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/flat-round/32/phone.png" alt="phone"/> (+355)/(0) 693857457</a>
          <span className="mx-2">|</span>
          <p className="flex items-center"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/place-marker--v1.png" alt="place-marker--v1"/> Tirane, Albania</p>
          <span className="mx-2">|</span>
          <a href="https://www.linkedin.com/in/enea-hysa-320527181/" type="linkedin"  id="linkedin" className="flex items-center"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/> Enea Hysa Linkedin Profile</a>
          <span className="mx-2">|</span>
          <a type="github" id="github" className="flex items-center"><img className="h-6 w-6 mr-2 rounded-full bg-white" src="https://img.icons8.com/windows/32/github.png" alt="github"/> hysa99 Github Profile</a>
          <span className="mx-2">|</span>
        </div>
      </header>

      <hr className="my-8"/>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
        
        <div className="bg-gray-800 rounded-lg p-4 text-white">
          <h1 className="text-2xl font-bold mb-4">My Skills</h1>
          <ul>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/python--v1.png" alt="python--v1"/>Python</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/ios-filled/32/django.png" alt="django"/> Django</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/plasticine/32/react.png" alt="react"/> React js</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/settings-3--v1.png" alt="settings-3--v1"/> Automation Tester / QA (Python + Selenium)</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/nolan/32/web-design.png" alt="web-design"/> Web Design / Development</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/figma--v1.png" alt="figma--v1"/> Figma</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 text-white">
          <h1 className="text-2xl font-bold mb-4">My Experiences</h1>
          <div className="">
            <h2 className="text-2xl">Eder Studio</h2>
            <br></br>
            <p>Web Designer (Internship) - From Nov 2020 to Jan 2021</p>
            <p className="bold text-2xl"><strong>Description of Job:</strong></p>
            <p>Learning About React js</p>
            <p>Creating from scratch the frontend of a Websites</p>
          </div>
          <br></br>
          <hr className="bg-blue-700 text-blue-700"></hr>
          <br></br>
          <div>
            <h2 className="text-2xl">Freelance | Self Employed (Working on personal projects)</h2>
            <br></br>
            <p>Web Development - From Nov 2019 to Present</p>
            <p className="bold text-2xl"><strong>Description of Job:</strong></p>
            <p>Create Websites for different purposes with all the important features such as CRUD functions</p>
            <p>React js | Django | HTML+CSS | Nextjs</p>
            <p>Learning New Things | Improving Skills</p>
          </div>
          <br></br>
          <hr className="bg-blue-700 text-blue-700"></hr>
          <br></br>
          <div>
            <h2 className="text-2xl">MP (Revelop)</h2>
            <br></br>
            <p>Automation Tester | QA Automation Tester - From Oct 2021 to Present</p>
            <p>First Line Support | Integrations - From Dec 2022 to Present</p>
            <p className="bold text-2xl"><strong>Description of Job:</strong></p>
            <p>Create Scripts for Automation</p>
            <p>Root Causes Analysis</p>
            <p>Implementing / Modifying New Solutions</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 text-white">
          <h1 className="text-2xl font-bold mb-4">My Interests</h1>
          <ul>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/python--v1.png" alt="python--v1"/>Python</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/ios-filled/32/django.png" alt="django"/> Django</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/plasticine/32/react.png" alt="react"/> React js</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/settings-3--v1.png" alt="settings-3--v1"/> Automation Tester / QA (Python + Selenium)</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/nolan/32/web-design.png" alt="web-design"/> Web Design / Development</li>
            <li className="flex items-center mb-2"><img className="h-6 w-6 mr-2" src="https://img.icons8.com/color/32/figma--v1.png" alt="figma--v1"/> Figma</li>
          </ul>
        </div>

      </section>

      <hr className="my-8"/>

      <section>
        <div>
          <h1 className="text-2xl">My Projects</h1>
          <code className="bg-red-700 text-white">
            404 Error Page / Coming Soon
          </code>
        </div>
      </section>

    </main>
  );
}
