import { useState, useEffect } from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing.jsx'
import Spinner from './Spinner.jsx'

const JobListings = ({ isHome }) => {
    const [jobs, setJobs] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = isHome ? '?_limit=3' : ''
            try {
                const res = await fetch(`http://localhost:8000/jobs${apiUrl}`)
                const data = await res.json();
                setJobs(data)

            }

            catch (err) {
                console.log('Error fetching data:', err)
            }

            finally {
                setLoader(false)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                    </h2>
                    {loader ? (
                        <Spinner loading={loader} />
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {jobs.map((job) => (
                                <JobListing key={job.id} job={job} />
                            ))}
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}

export default JobListings