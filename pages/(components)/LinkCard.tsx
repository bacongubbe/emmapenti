/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CardProps } from '@/interfaces/Interfaces'
import Link from 'next/link'



const LinkCard = ({ details }: CardProps) => {
    return (
        <article className='card'>
            <img className='card__image' alt='landscape' src={details.imagePath} />
            <div className='card__overlay'>
                <Link href={details.linkPath}>
                    <h2 className='card__overlay__text'>{details.title}</h2>
                </Link>
            </div>
        </article>
    )
}

export default LinkCard