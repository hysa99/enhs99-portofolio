import { Button, Card, Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from 'flowbite-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4 md:p-24 bg-gray-900 text-white">
      <header className="w-full flex justify-center inline">
        <Navbar fluid={true} rounded={true}>
          <NavbarBrand href="/">
            <img
              src="https://i1.sndcdn.com/avatars-000972071749-qhy5yq-t500x500.jpg"
              className="mr-3 h-6 sm:h-9 rounded-full"
              alt="Profile"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Enea Hysa
            </span>
          </NavbarBrand>
          <NavbarCollapse className="flex justify-between">
      <NavbarLink href="mailto:eneahysa4@gmail.com">
        Email
      </NavbarLink>
      <NavbarLink href="tel:+355693857457">
        Phone
      </NavbarLink>
      <NavbarLink href="https://www.linkedin.com/in/enea-hysa-320527181/">
        LinkedIn
      </NavbarLink>
      <NavbarLink href="https://github.com/hysa99">
        GitHub
      </NavbarLink>
    </NavbarCollapse>

        </Navbar>

        <div className="mt-4 flex justify-center">
          <Button href="/EneaCV.pdf" target="_blank">
            Download my CV
          </Button>
        </div>
      </header>

      <hr className="my-8 border-gray-700" />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        <Card>
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>Django</li>
            <li>React js</li>
            <li>Automation Testing (Python + Selenium)</li>
            <li>Web Design/Development</li>
            <li>Figma</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">My Experiences</h2>
          <div>
            <h3 className="text-xl">Eder Studio</h3>
            <p>Web Designer (Internship) - Nov 2020 to Jan 2021</p>
            <p>Description: Learning React js, creating frontends from scratch.</p>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-xl">Freelance</h3>
            <p>Web Development - Nov 2019 to Present</p>
            <p>Description: Building websites, CRUD functions, using React js, Django, etc.</p>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-xl">MP (Revelop)</h3>
            <p>QA Automation Tester - Oct 2021 to Present</p>
            <p>Description: Automation scripts, root cause analysis, implementing solutions.</p>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-bold mb-4">My Interests</h2>
          <ul className="list-disc list-inside">
            <li>Python</li>
            <li>Django</li>
            <li>React js</li>
            <li>Automation Testing</li>
            <li>Web Design/Development</li>
            <li>Figma</li>
          </ul>
        </Card>
      </section>

      <hr className="my-8 border-gray-700" />

      <section className="w-full">
        <h2 className="text-2xl font-bold mb-4">My Works on Video Editing</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/y_ENpW96POM"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <iframe
            width="300"
            height="200"
            src="https://www.youtube.com/embed/44pDdoOKzHI"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <hr className="my-8 border-gray-700" />

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
      </section>
    </main>
  );
}
