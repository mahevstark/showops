import { Avatar, Box, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardCommandKey } from "react-icons/md";
import BellIcon from "../svg/bell";
import { FaRegBell } from "react-icons/fa";

import { Colors } from "@/app/utils/Colors";
import useThemeStore from "@/store/themeStore";
import React from "react";



export default function Header() {

    const appearance = useThemeStore((state) => state.appearance);

    const searchInputRef = React.useRef(null);

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 's') {
                event.preventDefault();
                searchInputRef.current?.focus();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return <Box px={"6"} py={"5"}>
        <Flex direction={"row"} align={"center"} justify={"between"}>


            <Box maxWidth="394px" width={"100%"} style={{width:"100%"}}>
                <TextField.Root ref={searchInputRef} placeholder="Search ShowOps" size="2">
                    <TextField.Slot >
                        <FaMagnifyingGlass height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Slot>
                        <Box >
                            <Flex direction={"row"} align={"center"}>
                                <MdKeyboardCommandKey />
                                <Text style={{marginTop:"1px", marginLeft:"1px"}}>S</Text>
                            </Flex>
                        </Box>
                    </TextField.Slot>
                </TextField.Root>
            </Box>

            <Flex direction={"row"} align={"end"} gap={"4"}>
                <IconButton variant={"soft"} size={"3"}  style={{background: appearance=="dark"?Colors.darkInputBg: Colors.iconsBg, padding:"11px",  borderRadius:"6px"}} >
                    <FaRegBell style={{color:Colors.darkSoftText}}/>
                </IconButton>
                <Avatar
                    src={"/assets/profile.png"}
                    fallback={"JD"}
                />
            </Flex>
        </Flex>
    </Box>;
}
