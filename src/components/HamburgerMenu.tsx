import { useState } from "react"
import "../styles/HamburgerMenu.css"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const HamburgerMenu = ({setIsArchive}: {setIsArchive: (arg0: boolean) => void}) => {
    const [isOpen, setIsOpen] = useState(false)

    function nut() {
        console.log("nut")
    }

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <button
                    className={`hamburger ${isOpen ? "open" : ""}`}
                    aria-label="Toggle menu"
                >
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        onSelect={() => nut()}
                        style={{ justifyContent: "end" }}
                    >
                        Year #3
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={() => nut()}
                        disabled
                        style={{ justifyContent: "end" }}
                    >
                        Designs
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onSelect={() => setIsArchive(true)}
                        style={{ justifyContent: "end" }}
                    >
                        Archives
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default HamburgerMenu
