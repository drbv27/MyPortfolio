const Experience = ({company,labour,time,Functions,key2}) => (
    <div className="py-3" key={key2}>

    <div className="container">
        <h5>{company}</h5>
        <p>{labour}</p>
    </div>
</div>
)
 
export default Experience;