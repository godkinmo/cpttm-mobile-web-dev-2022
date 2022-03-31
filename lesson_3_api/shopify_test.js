import axios from 'axios'
import fetch from "node-fetch";
// import gql from 'graphql-tag'

const gql = String.raw

const query = gql`
  query PRODUCTS_QUERY {
    products(first: 5) {
      edges {
        node {
          id
          handle
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`

async function go1() {
  const response = await fetch('https://xxx.myshopify.com/admin/api/2022-01/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': '',
    },
    body: JSON.stringify({ query, variables: {} })
  });

  const data = await response.json()
  console.log(data.data)
}


async function go2 () {
  const res = await axios({
    url: 'https://xxx.myshopify.com/admin/api/2022-01/graphql.json',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': '',
    },
    data: { query, variables: {}}
  })

  console.log(res.data)
}

go1()
go2()
