import { error, json } from '@sveltejs/kit'
import axios from 'axios'
import * as cheerio from 'cheerio'

const URL = 'https://defillama.com/yields'

export async function GET() {
  try {
    const { data: html } = await axios.get(URL, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    })
    const $ = cheerio.load(html)
    const jsonContent = $('#__NEXT_DATA__').html()!
    const jsonData = JSON.parse(jsonContent) as { props: { pageProps: object } }
    const data = jsonData.props.pageProps
    // tokens is redundant
    // @ts-expect-error Types are not accurate
    delete data['tokens']
    return json(data)
  } catch (err) {
    console.error(err)
    error(404, 'Failed to fetch data')
  }
}
