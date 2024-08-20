import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Water America Web App",
      description: 
      "Developed a web app for consumers to change utility service to a new location using Flask, SQL, Python, and HTML"
      +"Enable users to create and login to their profile, pre-arrange a change in location of their service on a specified date, and update/cancel said change."+
      +"Collaborated with four team members to create data flow and use case diagrams based on requirements provided by the client, determined features to develop during each sprint, test the quality of the code against the predetermined test cases, and present a demo of the app to the client for feedback on areas of improvement for the following sprint."
      +"Created a move date validator to verify the user input as a valid future date and utilized USPS Address Validation API to verify the user entered a valid address."
      +"Performed QA testing to identify and patch bugs,Communicated with my team daily about project status and tracked project progress using collaboration tool, Basecamp.",

      link: "https://github.com/rbtgorman/"
    },

    {
      title: "Search Credentials App",
      description: 
      "Developed a web app that allows users to search for Rutgers Credentials. Created using PHP/PDO and MySQL"
      +"User will type in First and Last Name. Program will output the user's Full Name, userid, ID #, and email address.",

      link: "https://github.com/rbtgorman/search_credentials"
    },
    {
      title: "Portfolio Management Website",
      description: 
      "Developed a web app that allows users to add, delete, and modify projects they have worked on."
      + "This was created using React and Javascript mainly",
      link: "https://github.com/rbtgorman/portfolio-mgmt-site"
    },
    {
      title: "Resume Web App - This site",
      description: 
      "Devloped a web app where users can view my Resume, detailed with different components"
      + "The site includes; About , Contact , Education, Experience, Projects/Certifications, and Skills pages",
      link: "https://github.com/rbtgorman/portfolio-mgmt-site"
    },
    {
      title: "Sports Quiz",
      description: 
      "Developed a web app that allows users to test their sports knowledge. Created using PHP/PDO and MySQL"
      +"It starts with a prompt to enter an email, then once that is done you start the quiz."+
      +"Upon completion of the quiz, it provides your results, there is also an Admin Panel option",

      link: "https://github.com/rbtgorman/sports_quiz_rdg83"
    }
   
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
              {project.title !== "Water America Web App" && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                View Project
              </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;