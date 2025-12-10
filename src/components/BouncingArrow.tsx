import { useState } from 'react'
import '../styles/BouncingArrow.css'

interface BouncingArrowProps {
    text?: string
    onClick?: () => void
}

const BouncingArrow = ({ text = "Click me!", onClick }: BouncingArrowProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="bouncing-arrow-container">
            {isHovered && <div className="hover-text">{text}</div>}
            <button
                className="arrow-button"
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={text}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 5L12 19M12 19L19 12M12 19L5 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    )
}

export default BouncingArrow
