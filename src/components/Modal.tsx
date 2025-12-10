import "../styles/Modal.css"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    valediction?: string
    author?: string
    className?: string
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    valediction = "Cheers",
    author = "Richard",
    className = "",
}: ModalProps) {
    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className={`modal-content ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    <h2>{title}</h2>
                    {children}
                    <p className="signature">
                        {valediction},
                        <br />
                        <em>{author}</em>
                    </p>
                </div>
            </div>
        </div>
    )
}
