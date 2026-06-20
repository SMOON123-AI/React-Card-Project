import React from 'react'
import Card from './components/Card'

/*const App = () => {
  const arr=[10,20,30]
  return(
    <div className='parent'>
      {arr.map(elem=>elem)}
    </div>
  )
}
*/

const App = () => {
  
  const jobs = [
    {
      id: 1,
      brandLogo: "../public/logos/google.png",
      company: "Google",
      postedAt: "3 days ago",
      position: "Frontend Developer",
      employmentType: "Full Time",
      experienceLevel: "Junior Level",
      salary: "$120,000/year",
      location: "Bangalore, India"
    },
    {
      id: 2,
      brandLogo: "../public/logos/microsoft.png",
      company: "Microsoft",
      postedAt: "1 week ago",
      position: "Software Engineer",
      employmentType: "Full Time",
      experienceLevel: "Entry Level",
      salary: "$115,000/year",
      location: "Hyderabad, India"
    },
    {
      id: 3,
      brandLogo: "../public/logos/amazon.png",
      company: "Amazon",
      postedAt: "5 days ago",
      position: "Backend Engineer",
      employmentType: "Full Time",
      experienceLevel: "Junior Level",
      salary: "$42/hour",
      location: "Chennai, India"
    },
    {
      id: 4,
      brandLogo: "../public/logos/meta.png",
      company: "Meta",
      postedAt: "2 weeks ago",
      position: "React Developer",
      employmentType: "Part Time",
      experienceLevel: "Mid Level",
      salary: "$55/hour",
      location: "Mumbai, India"
    },
    {
      id: 5,
      brandLogo: "../public/logos/apple.png",
      company: "Apple",
      postedAt: "4 days ago",
      position: "iOS Developer",
      employmentType: "Full Time",
      experienceLevel: "Senior Level",
      salary: "$165,000/year",
      location: "Pune, India"
    },
    {
      id: 6,
      brandLogo: "../public/logos/netflix.png",
      company: "Netflix",
      postedAt: "3 weeks ago",
      position: "Full Stack Engineer",
      employmentType: "Full Time",
      experienceLevel: "Senior Level",
      salary: "$180,000/year",
      location: "Remote"
    },
    {
      id: 7,
      brandLogo: "../public/logos/nvidia.png",
      company: "NVIDIA",
      postedAt: "6 days ago",
      position: "AI/ML Engineer",
      employmentType: "Full Time",
      experienceLevel: "Mid Level",
      salary: "$150,000/year",
      location: "Bangalore, India"
    },
    {
      id: 8,
      brandLogo: "../public/logos/adobe.png",
      company: "Adobe",
      postedAt: "4 weeks ago",
      position: "Java Developer",
      employmentType: "Full Time",
      experienceLevel: "Junior Level",
      salary: "$110,000/year",
      location: "Noida, India"
    },
    {
      id: 9,
      brandLogo: "../public/logos/uber.png",
      company: "Uber",
      postedAt: "2 days ago",
      position: "Data Engineer",
      employmentType: "Full Time",
      experienceLevel: "Mid Level",
      salary: "$145,000/year",
      location: "Hyderabad, India"
    },
    {
      id: 10,
      brandLogo: "../public/logos/openai.png",
      company: "OpenAI",
      postedAt: "1 week ago",
      position: "Software Engineer Intern",
      employmentType: "Part Time",
      experienceLevel: "Internship",
      salary: "$35/hour",
      location: "Remote"
    }
  ];

  return(
    <div className='parent'>
      {jobs.map((elem)=>{
        return <Card key={elem.id} data={elem}/>;
      })}
  </div>
  )
}

export default App