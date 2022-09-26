import Fuse from 'fuse.js'
import { useEffect, useState } from 'react'

export const useSearch = (data = [], keys = []) => {
  const options = {
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true,
    // Search in `author` and in `tags` array
    keys: Array.isArray(keys) && keys.length ? keys : ['name', 'description'],
  }
  const [list, setList] = useState([])
  const [term, setTerm] = useState('')
  const s = new Fuse(data, options)
  const slist = s.search(term)

  useEffect(() => {
    setList(slist)
  }, [term])

  const good = list.filter(({ score }) => score < 0.4) || []
  const matchIdList = good.map(({ refIndex }) => refIndex)

  const restOfData = data
    // refIndex comes from the array order, not the id property value
    .filter((_, id) => !matchIdList.includes(id))
    .map((item) => ({ ...item, match: 1 }))

  const goodList = good
    .map(({ item }) => ({ ...item, match: 0 }))
    .concat(restOfData)

  return [term ? goodList : [], setTerm, term]
}
