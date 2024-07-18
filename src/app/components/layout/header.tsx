import { Avatar, Box, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardCommandKey } from "react-icons/md";
import BellIcon from "../svg/bell";
import { FaRegBell } from "react-icons/fa";

import { Colors } from "@/app/utils/Colors";
import useThemeStore from "@/store/themeStore";



export default function Header() {
    const appearance = useThemeStore((state) => state.appearance);
    return <Box px={"6"} py={"5"}>
        <Flex direction={"row"} align={"center"} justify={"between"}>


            <Box maxWidth="394px" width={"100%"} style={{width:"100%"}}>
                <TextField.Root placeholder="Search ShowOps" size="2">
                    <TextField.Slot>
                        <FaMagnifyingGlass height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Slot>
                        <Box >
                            <Flex direction={"row"} align={"center"}>
                                <MdKeyboardCommandKey />
                                <Text>S</Text>
                            </Flex>
                        </Box>
                    </TextField.Slot>
                </TextField.Root>
            </Box>

            <Flex direction={"row"} align={"end"} gap={"4"}>
                <IconButton variant={"soft"} size={"3"}  style={{background: appearance=="dark"?Colors.darkInputBg: Colors.iconsBg, padding:"11px",  borderRadius:"6px"}} >
                    <FaRegBell style={{color:Colors.darkSoftText}} width={"100px"}/>
                </IconButton>
                <Avatar
                    src={"/assets/profile.png"}
                    fallback={"JD"}
                />
            </Flex>
        </Flex>
    </Box>;
}
