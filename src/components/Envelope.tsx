import "../styles/Envelope.css"

interface EnvelopeProps {
    size?: "small" | "large"
    animate?: boolean
    onClick?: () => void
    className?: string
    children?: React.ReactNode
}

export default function Envelope({
    size = "large",
    animate = false,
    onClick,
    className = "",
    children,
}: EnvelopeProps) {
    const envelopeClass = `envelope ${size === "small" ? "envelope-small" : "envelope-large"} ${animate ? "envelope-animate" : ""} ${className}`

    return (
        <div className={envelopeClass} onClick={onClick}>
            <div className="envelope-flap"></div>
            <div className="envelope-body">{children}</div>
        </div>
    )
}
