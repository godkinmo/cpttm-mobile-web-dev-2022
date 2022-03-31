import axios from 'axios'

export async function getStaticProps(context) {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character')

  return {
    props: {
      characters: data.results
    }, // will be passed to the page component as props
  }
}

export default function RickAndMorty({ characters }) {
  return (
    <>
      <div>API Integration</div>

      {
        characters.map((character) => (
          <div>
            {JSON.stringify(character)}
          </div>
        ))
      }
    </>
  )
}
