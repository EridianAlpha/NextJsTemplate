import { Box, Flex, HStack, Image } from "@chakra-ui/react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"

import ColorModeToggle from "./ColorModeToggle"
import Link from "next/link"

export default function Header({}) {
    const isSSR = typeof window === "undefined"

    function navigateHome() {
        if (!isSSR) {
            window.history.replaceState({}, "", `${window.location.pathname}`)
            window.location.reload()
        }
    }

    return (
        <Box width="100%" borderBottomWidth={1} className={"borderColorDivider"}>
            <Box width="100%" px={{ base: "10px", sm: "3rem" }} maxW="1780px">
                <Box className={"bgPage"}>
                    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                        <HStack spacing={3} alignItems={"center"} cursor={"pointer"} onClick={navigateHome}>
                            <Image maxW={10} objectFit={"cover"} src={"./images/EthLogo.svg"} alt={"Project Logo"} />
                            <Box pr={2} minW={80} fontWeight="extrabold" fontSize="xl">
                                Template Project
                            </Box>
                        </HStack>
                        <HStack spacing={5}>
                            <Link href={"https://twitter.com/EridianAlpha"} target="_blank">
                                <Box w="24px" cursor={"pointer"} aria-label={"Twitter Profile"}>
                                    <FontAwesomeIcon icon={faTwitter} size={"xl"} />
                                </Box>
                            </Link>
                            <Link href={"https://github.com/EridianAlpha"} target="_blank">
                                <Box w="24px" cursor={"pointer"} aria-label={"View GitHub Source"}>
                                    <FontAwesomeIcon icon={faGithub} size={"xl"} />
                                </Box>
                            </Link>
                            <Box borderLeftWidth={1} className={"borderColorDivider"} height={8} />
                            <ColorModeToggle />
                        </HStack>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
