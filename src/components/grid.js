const { styled: { default: styled } } = window

const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, 1fr);
`
Grid.displayName = 'Grid'
export default Grid
