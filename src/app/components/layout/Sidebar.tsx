import { Colors } from "@/app/utils/Colors";
import useThemeStore from "@/store/themeStore";
import { Box, Flex, Switch, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import Logo from "../svg/logo";
import DashboardIcon from "../svg/dashboard";
import EventsIcon from "../svg/events";
import CalendarIcon from "../svg/calendar";
import OffersIcon from "../svg/offers";
import SettingsIcon from "../svg/settings";

export default function Sidebar() {
    // const active = window.location.pathname;
    // console.log(active);

    const setAppearance = useThemeStore((state) => state.setAppearance);
    const appearance = useThemeStore((state) => state.appearance);
    return <Box>
        {/* sidebar */}
        <Box py={"4"} px={"5"}>
            <Flex direction={"column"}>
                <Link className="logo-style" style={{}} href="/">
                    <Logo color={appearance=="dark"?Colors.white:Colors.black} />
                </Link>

                <Flex direction={"column"} mt={"6"} style={{maxWidth:"202px"}}>
                    
                    <Box px={"4"} py={"3"} style={{backgroundColor: appearance=="dark"?Colors.darkLightGreen: Colors.lightGreen, borderRadius:"6px", cursor:"pointer"}}>
                        <Flex direction={"row"} align={"center"} gap={"2"}>
                            <DashboardIcon color={appearance=="dark"?Colors.white: Colors.colorGreen} />
                            <Text weight={"medium"} size={"3"} style={{color:appearance=="dark"?Colors.darkColorGreen: Colors.colorGreen,}}>Dashboard</Text>
                        </Flex>
                    </Box>

                    <Box px={"4"} py={"3"} style={{ borderRadius:"6px", cursor:"pointer"}}>
                        <Flex direction={"row"} align={"center"} gap={"2"}>
                            <CalendarIcon color={appearance=="dark"?Colors.white: Colors.black} />
                            <Text weight={"medium"} size={"3"} style={{color:Colors.menuColor}}>Calendar</Text>
                        </Flex>
                    </Box>

                    <Box px={"4"} py={"3"} style={{ borderRadius:"6px", cursor:"pointer"}}>
                        <Flex direction={"row"} align={"center"} gap={"2"}>
                            <EventsIcon color={appearance=="dark"?Colors.white: Colors.black} />
                            <Text weight={"medium"} size={"3"} style={{color:Colors.menuColor}}>Events</Text>
                        </Flex>
                    </Box>

                    <Box px={"4"} py={"3"} style={{ borderRadius:"6px", cursor:"pointer"}}>
                        <Flex direction={"row"} align={"center"} gap={"2"}>
                            <OffersIcon color={appearance=="dark"?Colors.white: Colors.black} />
                            <Text weight={"medium"} size={"3"} style={{color:Colors.menuColor}}>Offers & Deals</Text>
                        </Flex>
                    </Box>

                    <Box px={"4"} py={"3"} style={{ borderRadius:"6px"}}>
                        <Flex direction={"row"} align={"center"} gap={"2"}>
                            <SettingsIcon color={appearance=="dark"?Colors.white: Colors.black} />
                            <Text weight={"medium"} size={"3"} style={{color:Colors.menuColor}}>Settings</Text>
                        </Flex>
                    </Box>

                    
                </Flex>

                <Flex direction={"column"} mt={"6"} style={{maxWidth:"202px"}}>
                    <Box px={"4"} mb={"2"}>
                        <Text size={"1"} weight={"bold"} style={{color:Colors.menuColorLight}}>Today's Events</Text>
                    </Box>


                    {[1,2,3].map((v,index)=>{
                        return (
                            <Box key={`event-${index}`} px={"4"} py={"3"} style={{cursor:"pointer"}}>
                                <Flex direction={"row"} align={"center"} gap={"2"}>
                                    <Box >
                                        <Image alt="event 1" src={"/assets/event_1.png"} width={40} height={40} />
                                    </Box>
                                    <Flex direction={"column"}>
                                        <Text size={"1"} weight={"light"}>Tourist</Text>
                                        <Text size={"2"} weight={"medium"}>The Viper Room</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                        )
                    })}
                    
                </Flex>

                <Flex direction={"column"} >

                    <Box onClick={()=>{
                        setAppearance(appearance=="dark"?"light":"dark");
                    }} py={"3"} style={{ borderRadius:"6px"}}>
                        <Flex direction={"row"} align={"center"} gap={"4"}>
                            {/* <Toggle */}
                            <Switch checked={appearance=="dark"} />
                            <Text weight={"medium"} size={"3"}>Dark Mode</Text>
                        </Flex>
                    </Box>

                    <Box mt={"1"} style={{cursor:"pointer"}}>
                        <Text size={"1"} style={{color:appearance=="dark"?Colors.darkColorGreen: Colors.colorGreen}}>Terms of Use</Text>
                    </Box>
                    <Box style={{cursor:"pointer"}}>
                        <Text size={"1"} style={{color:appearance=="dark"?Colors.darkColorGreen: Colors.colorGreen}}>Privacy Policy</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    </Box>;
}
