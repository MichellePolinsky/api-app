import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ArtPage = () => {
  const [displayArt, setDisplayArt] = useState([])
  // const [allArt, setAllArt] = useState([])

  const fetchData = async () => {
    const resp = await axios.get(
      'https://api.allorigins.win/get?url=https://www.rijksmuseum.nl/api/en/collection?key=C6axJ3QU&format=json'
    )
    // console.log(resp.data)
    const data = JSON.parse(resp.data.contents)
    console.log(data.artObjects)
    console.log(data.artObjects[0].links.web)
    setDisplayArt(data.artObjects)
  }
  // const RandomArt = () => {

  // }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <header>
        <h1>Art Collection</h1>
      </header>
      <main>
        <section>
          {/* <p>{displayArt[0].links.web}</p> */}
          {displayArt.map((artObject, i) => {
            return (
              <p key={i}>
                {artObject.links.web}
                {artObjects.longTitle}
              </p>
            )
          })}
        </section>
        <section>
          <h3>LongTitle</h3>
        </section>
        <footer>
          {/* <button className="new-button" onClick={RandomArt}>
            New Piece
          </button> */}
        </footer>
      </main>
    </>
  )
}

export default ArtPage
