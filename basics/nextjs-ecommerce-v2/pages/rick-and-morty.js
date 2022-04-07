import axios from 'axios'
import React, { useEffect } from 'react'

export async function getStaticProps(context) {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character')

  return {
    props: {
      characters: data.results
    }, // will be passed to the page component as props
  }
}

export default function ({ characters }) {
  useEffect(() => {
    console.log(characters)
  }, [])

  return (
    <>
      <div>API Integration</div>

      {
        characters.map((character, i) => (
          <div key={i}>
            {JSON.stringify(character)}
          </div>
        ))
      }
    </>
  )
}
