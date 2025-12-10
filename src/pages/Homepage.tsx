import "../styles/Homepage.css"
import CardStack from "../components/CardStack"
import HamburgerMenu from "../components/HamburgerMenu"
import BouncingArrow from "../components/BouncingArrow"

export default function Homepage({setIsArchive}: {setIsArchive: (arg0: boolean) => void}) {
    const handleArrowClick = () => {
        console.log("Arrow clicked!")
    }

    return (
        <section>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        padding: "64px 128px 0px 128px",
                        boxSizing: "border-box",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <CardStack />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            width: "100%",
                        }}
                    >
                        <h2>That's so</h2>
                        <h2>US!!!!</h2>
                    </div>
                </div>
                <div
                    style={{
                        padding: "0px 128px 64px 128px",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "32px",
                    }}
                >
                    <span />
                    <BouncingArrow
                        text="Explore more!"
                        onClick={handleArrowClick}
                    />
                    <HamburgerMenu setIsArchive={setIsArchive}/>
                </div>
            </div>
        </section>
    )
}
