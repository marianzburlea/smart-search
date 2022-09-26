import { fileList, largeFileList } from './search.data'
import { File } from '..'
import { useSearch } from '../../util'
import * as S from './search.style'

const Search = () => {
  const [list, setTerm, term] = useSearch(fileList, ['name', 'description'])
  const [secondList, setSecondTerm, secondTerm] = useSearch(largeFileList, [
    'name',
    'description',
  ])

  const change = (e) => {
    const { value } = e.target
    setTerm(value)
  }

  const secondChange = (e) => {
    const { value } = e.target
    setSecondTerm(value)
  }

  return (
    <div>
      <h2>First search</h2>
      <div>
        <S.Input autoFocus type="search" value={term} onChange={change} />
      </div>

      <h2>Results:</h2>
      <S.Search>
        {list.map(({ description, id, name, match }) => (
          <File key={id} name={name} description={description} match={match} />
        ))}
      </S.Search>

      <h2>Large search</h2>
      <div>
        <S.Input
          autoFocus
          type="search"
          value={secondTerm}
          onChange={secondChange}
        />
      </div>

      <h2>More Results:</h2>
      <S.Search>
        {secondList.map(({ description, id, name, match }) => (
          <File key={id} name={name} description={description} match={match} />
        ))}
      </S.Search>
    </div>
  )
}

export default Search
