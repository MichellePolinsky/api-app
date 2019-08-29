import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NickTest = () => {
  const [countries, setCountries] = useState([])

  const getCountries = async () => {
    const resp = await axios.get(
      `https://api.allorigins.win/get?url=https://www.rijksmuseum.nl/api/en/collection?key=C6axJ3QU&format=json`
    )

    const data = JSON.parse(resp.data.contents)
    const art = data.artObjects
    console.log(art)
    setCountries(art)
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <>
      <header className="header">Art, Art</header>
      <p>Pieces from Rijksmuseum, Amsterdam</p>
      {countries.map((country, i) => {
        return (
          <section>
            <div className="image-cont">
              <img className="images" src={country.webImage.url} />
            </div>
            <div>
              <h3 key={i}>{country.longTitle}</h3>
            </div>
          </section>
        )
      })}
    </>
  )
}
export default NickTest
