import { useState, useMemo } from 'react'
import photos from '../assets/photos.json'
import '../styles/CardStack.css'

// List of all available photos
const allPhotos = photos

// Function to randomly select 10 photos
const getRandomPhotos = (count: number = 10) => {
    const shuffled = [...allPhotos].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count).map((photo, index) => ({
        id: index,
        image: `images/${photo}`
    }))
}

const CardStack = () => {
    // Use useMemo to ensure photos are only selected once on mount
    const initialQueue = useMemo(() => getRandomPhotos(10), [])
    const [queue, setQueue] = useState(initialQueue)

    const handleCardClick = (clickedIndex: number) => {
        // Only allow clicking on visible cards (indices 0, 1, 2)
        if (clickedIndex > 2) return

        // If clicking the front card (index 2), do nothing
        if (clickedIndex === 2) return

        // Calculate how many positions to rotate
        const rotations = 2 - clickedIndex

        setQueue(prevQueue => {
            const newQueue = [...prevQueue]
            // Move cards from front to back, 'rotations' times
            for (let i = 0; i < rotations; i++) {
                const frontCard = newQueue.pop()!
                newQueue.unshift(frontCard)
            }
            return newQueue
        })
    }

    // Only show the last 3 cards as visible
    const visibleCards = queue.slice(-3)

    return (
        <div className="card-stack-container">
            {visibleCards.map((card, index) => {
                let position = ''

                if (index === 2) {
                    position = 'front'
                } else if (index === 1) {
                    position = 'back-middle'
                } else {
                    position = 'back-far'
                }

                return (
                    <div
                        key={card.id}
                        className={`card ${position}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <img
                            src={card.image}
                            alt={`Photo ${card.id + 1}`}
                            className="card-image"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default CardStack
