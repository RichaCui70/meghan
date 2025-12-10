import { useState } from "react"
import "../styles/Archives.css"
import Envelope from "../components/Envelope"
import Modal from "../components/Modal"
import lettersData from "../assets/letters.json"

interface LetterBody {
    id: string
    text: string
}

interface Letter {
    id: number
    title: string
    date: string
    body: LetterBody[]
    valediction: string
    author: string
}

export default function Archives({
    setIsArchive,
}: {
    setIsArchive: (arg0: boolean) => void
}) {
    const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null)
    const letters = lettersData as Letter[]

    const handleEnvelopeClick = (letter: Letter) => {
        setSelectedLetter(letter)
    }

    const handleCloseModal = () => {
        setSelectedLetter(null)
    }

    const handleBackClick = () => {
        setIsArchive(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <section className="archives-section">
            <button className="back-button" onClick={handleBackClick}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Back
            </button>
            <h1 className="archives-title">Letters Archive</h1>

            <div className="envelopes-grid">
                {letters.map((letter) => (
                    <button
                        key={letter.id}
                        className="envelope-item"
                        onClick={() => handleEnvelopeClick(letter)}
                    >
                        <Envelope size="small">
                            <p className="letter-number">{letter.title}</p>
                        </Envelope>
                    </button>
                ))}
            </div>

            <Modal
                isOpen={!!selectedLetter}
                onClose={handleCloseModal}
                title={selectedLetter?.title || ""}
                valediction={selectedLetter?.valediction}
                author={selectedLetter?.author}
            >
                {selectedLetter?.body.map((paragraph) => (
                    <p key={paragraph.id}>{paragraph.text}</p>
                ))}
            </Modal>
        </section>
    )
}
