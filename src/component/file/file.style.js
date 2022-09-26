import styled from 'styled-components'

export const Wrap = styled.div`
  background-color: lavender;
`

export const Name = styled.div`
  font-size: 20px;
  padding: 8px 16px;
  font-weight: bold;
  background-color: lightblue;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const Description = styled.div`
  padding: 8px 16px;
  font-size: 16px;
  font-style: italic;
`

export const File = styled.div`
  border-radius: 20px;
  gap: 8px;
  background-color: lightcoral;
  transition: 250ms;
  order: ${({ match }) => match};
  opacity: ${({ match }) => (match ? 0.5 : 1)};
`
