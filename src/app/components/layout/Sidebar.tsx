import { Colors } from "@/app/utils/Colors";
import useThemeStore from "@/store/themeStore";
import {Avatar, Box, Button, Flex, IconButton, Switch, Text, TextField} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import Logo from "../svg/logo";
import DashboardIcon from "../svg/dashboard";
import EventsIcon from "../svg/events";
import CalendarIcon from "../svg/calendar";
import OffersIcon from "../svg/offers";
import SettingsIcon from "../svg/settings";
import { IoIosArrowBack } from "react-icons/io";
import {FaRegBell} from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";

import React from "react";
import { RxCross2 } from "react-icons/rx";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {MdKeyboardCommandKey} from "react-icons/md";

export default function Sidebar() {
    // const active = window.location.pathname;
    // console.log(active);

    const setAppearance = useThemeStore((state) => state.setAppearance);
    const appearance = useThemeStore((state) => state.appearance);

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    const fullSidebar = ()=>{
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
    const mobileSideBar = ()=>{

        return <Box style={{position:"fixed", top:"0", left:"0", right:"0", bottom:"0", background:appearance=="dark"?"#111113":"white", zIndex:99999}}>
            {/* sidebar */}
            <Box py={"10px"} px={"20px"}>
                <Flex direction={"column"}>


                    <Flex direction={"row"} justify={"between"} align={"center"}>
                        <Link className="logo-style" style={{}} href="/">
                            <Logo color={appearance=="dark"?Colors.white:Colors.black} />
                        </Link>


                        <IconButton size={"3"} variant={"soft"} style={{background:Colors.lightRed,cursor:"pointer"}} onClick={()=>{
                            setMobileMenuOpen(false)
                        }}>
                            <RxCross2 color={"red"} />
                        </IconButton>
                    </Flex>


                    <Box mt={"6"} width={"100%"} style={{width:"100%"}}>
                        <TextField.Root placeholder="Search ShowOps" size="2">
                            <TextField.Slot>
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

                    <Box mt={"6"}></Box>

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
            </Box>
        </Box>;



    }

    const mobileHeader = ()=>{
        return <Box px={"20px"} py={"20px"}>

            <Flex direction={"row"} align={"center"} justify={"between"}>
                <IconButton variant={"soft"} size={"3"}>
                    <IconButton variant={"soft"} size={"3"}  style={{cursor:"pointer", background: appearance=="dark"?Colors.darkInputBg: Colors.iconsBg, padding:"11px",  borderRadius:"6px"}} >
                        <IoIosArrowBack style={{color:Colors.darkSoftText}}/>
                    </IconButton>
                </IconButton>


                <IconButton variant={"soft"} size={"3"}>
                    <IconButton
                        onClick={()=>{
                            setMobileMenuOpen(!mobileMenuOpen)
                        }}
                        variant={"soft"} size={"3"}  style={{cursor:"pointer",background: appearance=="dark"?"#1B2B1D":Colors.lightButtonBgGreen, padding:"11px",  borderRadius:"6px"}} >
                        <HiMiniBars3  style={{color: Colors.darkColorGreen}}/>
                    </IconButton>
                </IconButton>



            </Flex>
        </Box>
    }

    const mobileToggler=()=>{

    }
    return <Box>
        <Box display={{sm:"block", xs:"none", initial:"none"}}>
            {fullSidebar()}
        </Box>

        <Box display={{sm:"none", xs:"block", initial:"block"}}>
            {mobileHeader()}
        </Box>

        {
            mobileMenuOpen && mobileSideBar()
        }


    </Box>;
}
