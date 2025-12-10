import "./styles/App.css"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { useState, useEffect } from "react"
import Homepage from "./pages/Homepage"
import Transition from "./pages/Transition"
import Letter from "./pages/Letter"
import Archives from "./pages/Archives"

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [isArchive, setIsArchive] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            {isLoading ? (
                <section
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h2>
                        Loading<span className="dots"></span>
                    </h2>
                    <DotLottieReact
                        src="https://lottie.host/7968bdce-857d-4fe6-8e01-808f6ea0e444/9VsKAjbv9N.lottie"
                        loop
                        autoplay
                        style={{ width: 300, height: 300 }}
                    />
                </section>
            ) : (
                <>
                    {isArchive ? (
                        <Archives setIsArchive={setIsArchive} />
                    ) : (
                        <>
                            <Homepage setIsArchive={setIsArchive} />
                            <Transition />
                            <Letter setIsArchive={setIsArchive} />
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default App
