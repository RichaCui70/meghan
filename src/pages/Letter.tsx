import { useState } from "react"
import "../styles/Letter.css"
import Envelope from "../components/Envelope"
import Modal from "../components/Modal"
import letters from "../assets/letters.json"

export default function Letter({
    setIsArchive,
}: {
    setIsArchive: (arg0: boolean) => void
}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDeclineHovered, setIsDeclineHovered] = useState(false)
    const [isArchiving, setIsArchiving] = useState(false)
    const [isArchived, setIsArchived] = useState(false)
    const [showArchiveBox, setShowArchiveBox] = useState(false)

    const handleAnswer = () => {
        setIsModalOpen(true)
    }

    const handleDecline = () => {
        console.log("Call declined")
    }

    const handleCloseModal = () => {
        setShowArchiveBox(true)
        setIsArchiving(true)

        setTimeout(() => {
            setIsModalOpen(false)
            setIsArchiving(false)
            setIsArchived(true)
        }, 1000)
    }

    const handleReplay = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        setIsArchived(false)
        setShowArchiveBox(false)
    }

    return (
        <section className="letter-section">
            {/* Archive Box Icon */}
            {showArchiveBox && (
                <button
                    className={`archive-box ${isArchiving ? "absorb" : ""}`}
                    onClick={() => setIsArchive(true)}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                                opacity="0.5"
                                d="M18 10L13 10"
                                stroke="#f0f0f0"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            ></path>{" "}
                            <path
                                opacity="0.5"
                                d="M10 3H16.5C16.9644 3 17.1966 3 17.3916 3.02567C18.7378 3.2029 19.7971 4.26222 19.9743 5.60842C20 5.80337 20 6.03558 20 6.5"
                                stroke="#f0f0f0"
                                stroke-width="1.5"
                            ></path>{" "}
                            <path
                                d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                                stroke="#f0f0f0"
                                stroke-width="1.5"
                            ></path>{" "}
                        </g>
                    </svg>
                </button>
            )}

            {!isArchived ? (
                // Letter Page
                <div className="letter-wrapper">
                    {/* Envelope */}
                    <Envelope size="large" animate>
                        <p>Incoming call...</p>
                    </Envelope>
                    {/* Call buttons */}
                    <div className="call-buttons">
                        <button
                            className="call-button decline"
                            onClick={handleDecline}
                            onMouseEnter={() => setIsDeclineHovered(true)}
                            onMouseLeave={() => setIsDeclineHovered(false)}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                            </svg>
                        </button>

                        <button
                            className="call-button answer"
                            onClick={handleAnswer}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                            </svg>
                        </button>
                    </div>
                    <div style={{ position: "relative" }}>
                        {isDeclineHovered && (
                            <div className="hover-text">Answer the call.</div>
                        )}
                    </div>
                </div>
            ) : (
                // Conclusion Page
                <div className="final-message">
                    <h1>I want you.</h1>
                    <button className="replay-button" onClick={handleReplay}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                        </svg>
                    </button>
                    <p className="replay-text">Wanna see it again?</p>
                </div>
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={letters[letters.length - 1].title}
                valediction={letters[letters.length - 1].valediction}
                className={isArchiving ? "fly-to-archive" : ""}
            >
                {letters[letters.length - 1].body.map((paragraph) => (
                    <p id={paragraph.id}>{paragraph.text}</p>
                ))}
            </Modal>
        </section>
    )
}
