import {
    Box,
    Text,
    HStack,
    VStack,
    Image,
    IconButton,
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useColorMode,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { HamburgerIcon } from "@chakra-ui/icons"
import Link from "next/link"

function HeaderButtons({ displayZone }) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            {displayZone == "drawer" && (
                <Text fontWeight={"bold"} pl={1} pt={1} fontSize={"lg"}>
                    Links
                </Text>
            )}
            <Link href={"https://x.com/EridianAlpha"} target="_blank">
                <Button aria-label={"View X.com"} borderRadius={"full"} p={2}>
                    <HStack gap={3}>
                        <FontAwesomeIcon icon={faXTwitter} size={"xl"} />
                        {displayZone == "drawer" && <Text>x.com</Text>}
                    </HStack>
                </Button>
            </Link>
            <Link href={"https://github.com/EridianAlpha"} target="_blank">
                <Button aria-label={"View GitHub Source"} borderRadius={"full"} p={2}>
                    <HStack gap={3}>
                        <FontAwesomeIcon icon={faGithub} size={"xl"} />
                        {displayZone == "drawer" && <Text>GitHub</Text>}
                    </HStack>
                </Button>
            </Link>
            {displayZone == "header" && <Box borderLeftWidth={1} className={"borderColorDivider"} height={8} />}
            {displayZone == "drawer" && (
                <Text fontWeight={"bold"} pl={1} pt={3} fontSize={"lg"}>
                    Settings
                </Text>
            )}
            <Button
                px={2}
                aria-label="Toggle Color Mode"
                onClick={() => {
                    toggleColorMode()
                }}
                borderRadius={"full"}
            >
                <HStack gap={3}>
                    {colorMode === "light" ? <FontAwesomeIcon icon={faMoon} size={"xl"} /> : <FontAwesomeIcon icon={faSun} size={"xl"} />}
                    {displayZone == "drawer" && <Text>Toggle color mode</Text>}
                </HStack>
            </Button>
        </>
    )
}

export default function Header({}) {
    const isSSR = typeof window === "undefined"
    const { isOpen, onOpen, onClose } = useDisclosure()

    function navigateHome() {
        if (!isSSR) {
            window.history.replaceState({}, "", `${window.location.pathname}`)
            window.location.reload()
        }
    }

    return (
        <HStack width="100%" borderBottomWidth={1} className={"borderColorDivider"} justifyContent={"center"}>
            <Box width="100%" px={{ base: "10px", md: "3rem" }} maxW="1780px">
                <Box className={"bgPage"}>
                    <HStack h={16} alignItems={"center"} justifyContent={"space-between"}>
                        <HStack spacing={3} alignItems={"center"} cursor={"pointer"} onClick={navigateHome}>
                            <Image maxW={10} objectFit={"cover"} src={"./images/EthLogo.svg"} alt={"Project Logo"} />
                            <Box pr={2} minW={"fit-content"} fontWeight="extrabold" fontSize="xl" whiteSpace="nowrap" overflow="hidden">
                                Template Project
                            </Box>
                        </HStack>
                        <HStack display={{ base: "none", sm: "flex" }} spacing={5}>
                            <HeaderButtons displayZone={"header"} />
                        </HStack>
                        <IconButton
                            size="md"
                            icon={<HamburgerIcon />}
                            aria-label="Open Menu"
                            display={{ base: "flex", sm: "none" }}
                            onClick={onOpen}
                        />
                    </HStack>
                </Box>
            </Box>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack spacing={5} alignItems={"start"}>
                            <HeaderButtons displayZone={"drawer"} />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </HStack>
    )
}
