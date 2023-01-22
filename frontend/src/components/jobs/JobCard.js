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
       <p> Company:</p><h2>{companyName}</h2>
        <p>Job Position:</p><h3>{jobPosition}</h3>
        <p>Job Description:<br></br>{jobDescription}</p>
        <p>Salary:</p><h3>{salary} €</h3>
        <img src={company_logo_url} alt={`${companyName} logo`} />
      </div>
      </>

    )
}

export default JobCard