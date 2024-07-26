'use client'


import { Button, Card, Navbar, NavbarBrand, NavbarLink } from 'flowbite-react';
import { useState } from 'react';
import { CarouselsGlobetrotterHub, CarouselsTraveblo } from '../components/component/carousels';
// import eneacv from "public/EneaCV.pdf";



type CarouselType = null | 'traveblo' | 'globetrotter' | 'videoediting';


export default function Home() {
  const [activeCarousel, setActiveCarousel] = useState<CarouselType>(null);


  
  return (
    <main className="flex flex-col items-center inline justify-center p-4 md:p-24 bg-gray-900 text-white">
      <header className="w-full flex justify-center inline">
        <Navbar fluid={true} rounded={true}>
          <NavbarBrand href="/">
            <img
              src="https://i1.sndcdn.com/avatars-000972071749-qhy5yq-t500x500.jpg"
              className="mr-6 h-9 sm:h-9 rounded-full"
              alt="Profile"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Enea Hysa
            </span>
          </NavbarBrand>
        </Navbar>

        <Navbar style={{ listStyleType: 'none'}} className="flex inline p-6">
      <NavbarLink style={{ textDecoration: 'none' }} className="flex inline p-4" href="mailto:eneahysa4@gmail.com">
      <img width="26" height="26" src="https://img.icons8.com/color/26/new-post.png" alt="new-post"/>
        email
      </NavbarLink>
      &emsp;
      <NavbarLink style={{ textDecoration: 'none' }} className="flex inline" href="tel:+355693857457">
      <img width="26" height="26" src="https://img.icons8.com/color/26/phone.png" alt="phone"/>
        phone
      </NavbarLink>
      &emsp;
      <NavbarLink style={{ textDecoration: 'none' }} className="flex inline" href="https://www.linkedin.com/in/enea-hysa-320527181/">
      <img width="26" height="26" src="https://img.icons8.com/color/26/linkedin.png" alt="linkedin"/>
        linkedIn
      </NavbarLink>
      &emsp;
      <NavbarLink style={{ textDecoration: 'none' }} className="flex inline" href="https://github.com/hysa99">
      <img width="26" height="26" src="https://img.icons8.com/ios-filled/26/github.png" alt="github"/>
        gitHub
      </NavbarLink>
    </Navbar>


        <div className="flex justify-center">
        <a href="/puvlic/EneaCV.pdf" download="EneaCV.pdf">
        <Button>
          Download my CV
        </Button>
      </a>
        </div>
      </header>

      <hr className="my-8 border-gray-700" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        <Card>
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <ul className="list-disc list-inside">
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color/26/python--v1.png" alt="python--v1"/>Python</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color/26/django.png" alt="django"/>Django</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/office/26/react.png" alt="react"/>React js</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/ios-glyphs/26/selenium-test-automation.png" alt="selenium-test-automation"/>Automation Testing (Python + Selenium)</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color-glass/26/google-code.png" alt="google-code"/>Web Design/Development</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color/26/figma--v1.png" alt="figma--v1"/>Figma</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">My Experiences</h2>
          <div>
            <h3 className="text-xl">Eder Studio</h3>
            <p>Web Designer (Internship) - Nov 2020 to Jan 2021</p>
            <p>Description:
              Learning React js, creating frontends from scratch.</p>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-xl">Freelancer | Self Employed</h3>
            <p>Video Editing - Nov 2020 </p>
            <p>Description:
              Edited and produced engaging video content for a travel YouTube channel, utilizing tools such as Canva, Adobe
            Premiere Pro, and DaVinci Resolve.</p>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-xl">Freelance</h3>
            <p>Web Development - Nov 2019 to Present</p>
            <p>Description:
              Building websites, CRUD functions, using React js, Django, etc.</p>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-xl">MP (Revelop)</h3>
            <p>QA Automation Tester - Oct 2021 to Present</p>
            <p>Description:
              Automation scripts, root cause analysis, implementing solutions.</p>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">My Interests</h2>
          <ul className="list-disc list-inside">
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color/26/python--v1.png" alt="python--v1"/>Python</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color/26/django.png" alt="django"/>Django</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/office/26/react.png" alt="react"/>React js</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/ios-glyphs/26/selenium-test-automation.png" alt="selenium-test-automation"/>Automation Testing (Python + Selenium)</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color-glass/26/google-code.png" alt="google-code"/>Web Design/Development</li>
            <li className='inline flex'><img width="26" height="26" src="https://img.icons8.com/color/26/figma--v1.png" alt="figma--v1"/>Figma</li>
          </ul>
        </Card>
      </section>

      <hr className="my-8 border-gray-700" />
      <hr className="my-8 border-gray-700" />
      &emsp;

      <section>
      <h1 className='flex text-4xl font-weight-500 text-center'>My Projects!</h1>
      &emsp;
      <div className='flex inline'>
      <a href="#!" onClick={() => setActiveCarousel('traveblo')}>
      <img width="40" height="40" src="https://img.icons8.com/ios/40/travel-agency.png" alt="travel-agency"/>
        Traveblo Project
      </a>
      <br />
      &emsp;
      <a href="#!" onClick={() => setActiveCarousel('globetrotter')}>
      <img width="40" height="40" src="https://img.icons8.com/wired/40/social-network.png" alt="social-network"/>
        GlobetrutterHub Project 
      </a>
      <br />
      &emsp;
      <a href="#!" onClick={() => setActiveCarousel('videoediting')}>
      <img width="40" height="40" src="https://img.icons8.com/dotty/40/video-editing.png" alt="video-editing"/>
        Video Editing Projects 
      </a>
      </div>

      {/* Conditional rendering based on state */}
      {activeCarousel === 'traveblo' && <CarouselsTraveblo />}
      {activeCarousel === 'globetrotter' && <CarouselsGlobetrotterHub />}
      {activeCarousel === 'videoediting' && <VideoEditing />}
    </section>

&emsp;
{/* 
    <section className="w-full">
        <h2 className="text-2xl font-bold mb-4">Blog</h2>
        <div className="flex flex-wrap gap-4">
          <Card>
            <h3 className="text-xl font-bold">Blog Post 1</h3>
            <p>Snippet of blog post content...</p>
            <Button>Read More</Button>
          </Card>
          <Card>
            <h3 className="text-xl font-bold">Blog Post 2</h3>
            <p>Snippet of blog post content...</p>
            <Button>Read More</Button>
          </Card>
        </div>
      </section> */}

      &emsp;

    </main>
  );
}



function VideoEditing(){
  return (
    <div className='container'>
      <h1>Video Editing Projects</h1>
      <section className="w-full">
        <h2 className="text-2xl font-bold mb-4">My Works on Video Editing</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <iframe
          title='Top Destinations to Visit for Solo Travelers'
            width="300"
            height="200"
            src="https://www.youtube.com/embed/y_ENpW96POM"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <iframe
          title='Top Destinations you should visit to Barcelona'
            width="300"
            height="200"
            src="https://www.youtube.com/embed/44pDdoOKzHI"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <iframe
            title='3 best places to visit in Europe'
            width="300"
            height="200"
            // embeded this  src="https://youtu.be/BudLQQ6sRxY?si=h869E0hvVtkeJFoT"
            src="https://www.youtube.com/embed/BudLQQ6sRxY"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          </div>
          </section>
    </div>
  )
}

