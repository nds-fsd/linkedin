import "./JobCard.css"

const JobCard = (
    {_id, companyName, jobPosition, 
        jobDescription, salary,
        company_logo_url }) => {
    return (
        <>       
        
      <div className="container__post">
      {/* <div className="header__post">
        <img src="./img/vector.png" alt="ops" />
            <h1> New Job Offers:</h1>
            </div> */}
        <p className="job_heading"> Company:</p>
        <h2>{companyName}</h2>
        <p className="job_heading">Job Position:</p>
        <h2>{jobPosition}</h2>
        <p className="job_heading">Job Description:</p>
        <p>{jobDescription}</p>
        <p className="job_heading">Salary:</p>
        <h2>{salary} €</h2>

        {company_logo_url ? <img width="75" height="75" src={company_logo_url} alt="" /> :null 
        
      }

      
      </div>
      </>

    )
}

export default JobCard