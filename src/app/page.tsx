'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Flex, Select, Text, TextArea, TextField } from "@radix-ui/themes";
import { Colors } from "./utils/Colors";
import CalendarIcon from "./components/svg/calendar";
import { SiGunicorn } from "react-icons/si";
import React from "react";
import { FaRegClock } from "react-icons/fa";


import { CiGlobe } from "react-icons/ci";
import useThemeStore from "@/store/themeStore";

export default function Home() {

  const [value, setValue] = React.useState('light');
  const appearance = useThemeStore((state) => state.appearance);
  return (
    <Box px="6" py="5">
      <Box maxWidth={"570px"}>

        <Flex direction="column">


          <Flex direction={"column"} gap={"4"}>
            <Text size={"6"} weight={"medium"}>
              Create an event
            </Text>

            <Text size={"2"} weight={"light"} style={{ color: Colors.lightText }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
          </Flex>

          <Box mt={"64px"}></Box>


          <Flex direction={"column"} gap={"2"}>
            <Text size={"3"} weight={"medium"}>Event Name</Text>

            <TextField.Root

              variant={"soft"}
              style={{
                backgroundColor: Colors.iconsBg
              }} size="3" placeholder="Your event name" />
          </Flex>

          <Box mt={"64px"}></Box>

          <Flex direction={"column"} gap={"2"}>
            <Text size={"3"} weight={"medium"}>Date & Time</Text>

            <Flex direction={"row"} align={"center"} justify={"between"}>

                <Box width={"280px"} style={{}}>
                  <Select.Root size={"3"} value={value} onValueChange={setValue}>
                    <Select.Trigger variant="soft">
                      <Flex as="span" align="center" gap="2">
                        <CalendarIcon color={appearance=="dark"?Colors.white:Colors.black} />
                        <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>Select date(s)...</Text>
                      </Flex>
                    </Select.Trigger>
                    <Select.Content position="popper">
                      
                    </Select.Content>
                  </Select.Root>
                </Box>

                <Box width={"280px"} style={{}}>
                  <Select.Root size={"3"} value={value} onValueChange={setValue}>
                    <Select.Trigger variant="soft">
                      <Flex as="span" align="center" gap="2">
                        <CiGlobe color={appearance=="dark"?Colors.white:Colors.black}  />
                        <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>Time Zone</Text>
                      </Flex>
                    </Select.Trigger>
                    <Select.Content position="popper">
                      
                    </Select.Content>
                  </Select.Root>
                </Box>
            </Flex>

            <Flex direction={"row"} align={"center"} justify={"between"}>

                <Box width={"280px"} style={{}}>
                  <Select.Root size={"3"} value={value} onValueChange={setValue}>
                    <Select.Trigger variant="soft">
                      <Flex as="span" align="center" gap="2">
                        <FaRegClock color={appearance=="dark"?Colors.white:Colors.black}  />
                        <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>Start Time</Text>
                      </Flex>
                    </Select.Trigger>
                    <Select.Content position="popper">
                      
                    </Select.Content>
                  </Select.Root>
                </Box>

                <Box width={"280px"} >
                  <Select.Root size={"3"} value={value} onValueChange={setValue}>
                    <Select.Trigger variant="soft">
                      <Flex as="span" align="center" gap="2">
                        <FaRegClock color={appearance=="dark"?Colors.white:Colors.black}  />
                        <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>End Time</Text>
                      </Flex>
                    </Select.Trigger>
                    <Select.Content position="popper">
                      
                    </Select.Content>
                  </Select.Root>
                </Box>
            </Flex>
          </Flex>

          <Box mt={"64px"}></Box>

          <Flex direction={"column"} gap={"2"}>
            <Text size={"3"} weight={"medium"}>Description</Text>
            <TextArea variant="soft" style={{background:Colors.iconsBg}} placeholder="Add event description..." />
          </Flex>


        </Flex>
      </Box>
    </Box>
  );
}
