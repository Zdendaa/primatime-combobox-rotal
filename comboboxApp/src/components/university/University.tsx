import { University as UniversityType } from "../../types"

type UniversityProps = {
    university: UniversityType,
    handleSelectUniversity: (university: UniversityType) => void
}

const University = ({university, handleSelectUniversity}: UniversityProps) => {
  return (
    <div className="universityItemMain">
      <div onClick={() => handleSelectUniversity(university)} className="universityItem">
        <span>{university.name}</span>
      </div>
      {university?.web_pages !== undefined && university?.web_pages?.length > 0 ? <div className="goToPageWrapper"><a className="goToPage" href={university.web_pages[0]} target="_blank" >jít na stránku</a></div> : null}
    </div>
  )
}

export default University