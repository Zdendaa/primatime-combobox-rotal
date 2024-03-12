import { University as UniversityType } from "../../types"
import University from "./University"

type UniversitiesViewProps = {
    universities: UniversityType[],
    isFocused: boolean,
    isLoading: boolean,
    handleSelectUniversity: (university: UniversityType) => void
}

const UniversitiesView = ({universities, isFocused, isLoading, handleSelectUniversity}: UniversitiesViewProps) => {
  return (
    <>
      {(isLoading && isFocused) && <div>Loading...</div>}
      {(universities && isFocused) && (
          <div className="universitiesView">
            {universities.map((university: UniversityType, index: number) => (
                <University key={index} university={university} handleSelectUniversity={handleSelectUniversity}/>
            ))}
          </div>
      )}
    </>
  )
}

export default UniversitiesView