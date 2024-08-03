import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import JobsPage from './pages/JobsPage.jsx'
import MainLayout from './layout/MainLayout.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import JobPage, { jobLoader } from './pages/JobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx'
import EditJobPage from './pages/EditJobPage.jsx'

async function addJob(newJob) {
  const res = await fetch('http://localhost:8000/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  }
  )

  return
}

async function deleteJob(id) {
  const res = await fetch(`http://localhost:8000/jobs/${id}`, {
    method: 'DELETE'
  }
  )
}

async function updateJob(job){
  const res = await fetch(`http://localhost:8000/jobs/${job.id}` , {
    method : 'PUT',
    headers :{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(job)
  })
}


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJob={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJob = {updateJob}/>} loader = {jobLoader}/>
        <Route path='*' element={<NotFoundPage />} />
      </Route>

    )
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App