import axios from 'axios'
import gql from 'graphql-tag'

// const gql = String.raw

// Example 1...
async function example1() {
  const CHARACTERS_QUERY = gql`
    query CHARACTERS_QUERY {
      characters {
        results {
          id
          name
        }
      }
    }
  `
  const res = await axios({
    url: 'https://rickandmortyapi.com/graphql',
    method: 'post',
    data: {
      query: CHARACTERS_QUERY.loc.source.body
    }
  })

  const characters = res.data.data.characters

  console.log(characters)
}

async function example2() {
  const CHARACTER_QUERY = gql`
    query CHARACTER_QUERY {
      character(id: 1) {
        id
        name
      }
    }
  `

  const res = await axios({
    url: 'https://rickandmortyapi.com/graphql',
    method: 'post',
    data: {
      query: CHARACTER_QUERY.loc.source.body
    }
  })

  const character = res.data.data.character

  console.log(character)
}


example2()
