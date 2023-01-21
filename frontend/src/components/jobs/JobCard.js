const JobCard = (
    {_id, companyName, jobPosition, 
        jobDescription, 
        company_logo_url }) => {
    return (
      <div>
        <h2>{companyName}</h2>
        <h3>{jobPosition}</h3>
        <p>{jobDescription}</p>
        <img src={company_logo_url} alt={`${companyName} logo`} />
      </div>
    )
}

export default JobCard