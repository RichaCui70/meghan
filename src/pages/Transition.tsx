import { useEffect, useRef, useState, useMemo } from "react"
import "../styles/Transition.css"
import photos from "../../src/assets/photos.json"

// Shuffle array function
const shuffleArray = (array: Array<string>) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ]
    }
    return shuffledArray
}

export default function Transition() {
    const [scrollOffset, setScrollOffset] = useState(0)
    const transitionRef = useRef<HTMLDivElement>(null)

    // Shuffle photos once on mount and split into 3 rows of 10
    const { row1Photos, row2Photos, row3Photos } = useMemo(() => {
        const shuffled = shuffleArray(photos)
        return {
            row1Photos: shuffled.slice(0, 10),
            row2Photos: shuffled.slice(10, 20),
            row3Photos: shuffled.slice(20, 30),
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (!transitionRef.current) return
            setScrollOffset(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Calculate conveyor belt offset based on scroll
    const getConveyorOffset = (baseSpeed: number) => {
        return scrollOffset * baseSpeed
    }

    return (
        <>
            <section className="pin-wrapper" ref={transitionRef}>
                <div className="conveyor-container">
                    {/* Row 1 - moves right when scrolling down */}
                    <div className="conveyor-row">
                        <div
                            className="conveyor-belt"
                            style={{
                                transform: `translateX(-${getConveyorOffset(
                                    0.5
                                )}px)`,
                            }}
                        >
                            {[...row1Photos, ...row1Photos, ...row1Photos].map(
                                (photo, index) => (
                                    <div
                                        key={`row1-${photo}-${index}`}
                                        className="photocard"
                                    >
                                        <img
                                            src={`images/${photo}`}
                                            alt={`Photo ${index + 1}`}
                                            className="photocard-image"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Row 2 - moves left when scrolling down (opposite direction) */}
                    <div className="conveyor-row">
                        <div
                            className="conveyor-belt"
                            style={{
                                transform: `translateX(${getConveyorOffset(
                                    0.4
                                )}px)`,
                            }}
                        >
                            {[...row2Photos, ...row2Photos, ...row2Photos].map(
                                (photo, index) => (
                                    <div
                                        key={`row2-${photo}-${index}`}
                                        className="photocard"
                                    >
                                        <img
                                            src={`images/${photo}`}
                                            alt={`Photo ${index + 1}`}
                                            className="photocard-image"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Row 3 - moves right when scrolling down */}
                    <div className="conveyor-row">
                        <div
                            className="conveyor-belt"
                            style={{
                                transform: `translateX(-${getConveyorOffset(
                                    0.6
                                )}px)`,
                            }}
                        >
                            {[...row3Photos, ...row3Photos, ...row3Photos].map(
                                (photo, index) => (
                                    <div
                                        key={`row3-${photo}-${index}`}
                                        className="photocard"
                                    >
                                        <img
                                            src={`images/${photo}`}
                                            alt={`Photo ${index + 1}`}
                                            className="photocard-image"
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
