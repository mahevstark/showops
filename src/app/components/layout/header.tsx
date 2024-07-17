import { Avatar, Box, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardCommandKey } from "react-icons/md";
import BellIcon from "../svg/bell";
import { FaRegBell } from "react-icons/fa";

import { Colors } from "@/app/utils/Colors";



export default function Header() {
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
                <Box style={{background:Colors.iconsBg, padding:"11px 11px 5px 11px", borderRadius:"6px"}} >
                    <FaRegBell size={"18"}/>
                </Box>
                <Avatar
                    src={"/assets/profile.png"}
                    fallback={"JD"}
                />
            </Flex>
        </Flex>
    </Box>;
}
