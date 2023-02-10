import { Card } from '@/interfaces/Interfaces'
import React from 'react'
import LinkCard from './LinkCard'

const HomeContainer = () => {

  const allCards : Card [] = [
    {"title" : "Landscape", "imagePath" : "/images/home/landscape_background.jpeg", "linkPath" : "/landscapes"},
    {"title" : "Portrait", "imagePath" : "/images/home/portrait_background.jpeg", "linkPath" : "/portraits"},
    {"title" : "Still Life", "imagePath" : "/images/home/still_life_background.jpeg", "linkPath" : "/still_life"},
    {"title" : "Portrait", "imagePath" : "/images/home/projects_background.jpeg", "linkPath" : "/projects"}
  ]


  return (
    <main className='home__main'>
      {allCards.map(card => (
        <LinkCard details={card} key={card.title} />
      ))}
    </main>
  )
}

export default HomeContainer