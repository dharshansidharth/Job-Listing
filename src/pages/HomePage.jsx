import React from 'react'
import Hero from '../components/Hero.jsx'
import HomeCard from '../components/HomeCard.jsx'
import JobListings from '../components/JobListings.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'

const HomePage = () => {
  return (
    <>
        <Hero title = 'Become a React Dev' subtitle = 'Find the react job that fits your skill set'/>
        <HomeCard />
        <JobListings isHome = {true}/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage