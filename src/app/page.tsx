'use client';
import Image from "next/image";
import styles from "./page.module.css";
import {Box, Button, Flex, Select, Skeleton, Text, TextArea, TextField} from "@radix-ui/themes";
import { Colors } from "./utils/Colors";
import CalendarIcon from "./components/svg/calendar";
import { SiGunicorn } from "react-icons/si";
import { FaRegClock } from "react-icons/fa";
import React, {useEffect} from 'react';

import { DatePicker } from '@mantine/dates';
import {  MantineProvider } from '@mantine/core';

import { CiGlobe } from "react-icons/ci";
import useThemeStore from "@/store/themeStore";
import Fileupload from "@/app/components/form/fileupload";
import timezones from '@/app/utils/timezones.json'

export default function Home() {

  const [value, setValue] = React.useState('light');
  const [timezone, setTimezon] = React.useState(null);
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);
  const [name, setEventName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const appearance = useThemeStore((state) => state.appearance);
  const setAppearance = useThemeStore((state) => state.setAppearance);
  const [loading, setLoading] = React.useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)

  },[])

  const [startDate, setStartDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    console.log(date);
  };




  return (
      <MantineProvider>
    <Box px="6" py="5">
      <Box maxWidth={"570px"}>

        <Flex direction="column">


          <Flex direction={"column"} gap={"4"}>
            <Skeleton loading={loading}>
              <Text size={"6"} weight={"medium"}>
                Create an event
              </Text>
            </Skeleton>

            <Skeleton loading={loading}>
              <Text size={"2"} weight={"light"} style={{ color:appearance=="dark"?Colors.darkSoftText: Colors.lightText }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text>
            </Skeleton>
          </Flex>

          <Box mt={"64px"}></Box>

          <Skeleton loading={loading}>
            <Flex direction={"column"} gap={"2"}>
              <Text size={"3"} weight={"medium"}>Event Name</Text>

              <TextField.Root

                  onChange={(e)=>{
                    setEventName(e.target.value)
                  }}

                variant={"soft"}
                style={{
                  backgroundColor: appearance=="dark"?Colors.darkInputBg:Colors.iconsBg
                }} size="3" placeholder="Your event name" />
            </Flex>
          </Skeleton>

          <Box mt={"64px"}></Box>

          <Skeleton loading={loading}>
            <Flex direction={"column"} gap={"2"}>
              <Text size={"3"} weight={"medium"}>Date & Time</Text>

              <Flex direction={"row"} align={"center"} justify={"between"}>

                  <Box width={"280px"} style={{}}>
                    <Select.Root size={"3"} value={date}>
                      <Select.Trigger  variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
                        <Flex as="span" align="center" gap="2">
                          <CalendarIcon color={appearance=="dark"?Colors.white:Colors.black} />
                          {!date && <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>Select date(s)...</Text>}
                          {date && <Text size={"3"} >{date}</Text>}
                        </Flex>
                      </Select.Trigger>
                      <Select.Content position="popper">
                          <input type={"date"} onChange={(d)=>{
                            setDate(d.target.value)
                            console.log(d.target.value)
                          }} />

                      </Select.Content>
                    </Select.Root>
                  </Box>

                  <Box width={"280px"} style={{}}>
                    <Select.Root size={"3"} value={timezone} onValueChange={setTimezon}>
                      <Select.Trigger variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
                        <Flex as="span" align="center" gap="2">
                          <CiGlobe color={appearance=="dark"?Colors.white:Colors.black}  />
                          {!timezone && <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>Time Zone</Text>}
                          {timezone && <Text size={"3"} >{timezone}</Text>}
                        </Flex>
                      </Select.Trigger>
                      <Select.Content position="popper">
                        {timezones.map((zone,index)=>{
                            return (
                                <Select.Item value={zone.zone} key={`key-zone-${index}`}>{zone.zone}</Select.Item>
                            )
                        })}
                      </Select.Content>
                    </Select.Root>
                  </Box>
              </Flex>

              <Flex direction={"row"} align={"center"} justify={"between"}>

                  <Box width={"280px"} style={{}}>
                    <Select.Root size={"3"} value={startTime}>
                      <Select.Trigger variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
                        <Flex as="span" align="center" gap="2">
                          <FaRegClock color={appearance=="dark"?Colors.white:Colors.black}  />
                          {!startTime && <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>Start Time</Text>}
                          {startTime && <Text size={"3"} >{startTime}</Text>}
                        </Flex>
                      </Select.Trigger>
                      <Select.Content position="popper">
                        <input type={"time"} onChange={(d) => {
                          setStartTime(d.target.value)
                          console.log(d.target.value)
                        }}/>
                      </Select.Content>
                    </Select.Root>
                  </Box>

                <Box width={"280px"}>
                  <Select.Root size={"3"} value={endTime}>
                      <Select.Trigger variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
                        <Flex as="span" align="center" gap="2">
                          <FaRegClock color={appearance=="dark"?Colors.white:Colors.black}  />
                          {!endTime && <Text size={"3"} style={{color:appearance=="dark"?Colors.darkPlaceholder:Colors.lightText}}>End Time</Text>}
                          {endTime && <Text size={"3"} >{endTime}</Text>}
                        </Flex>
                      </Select.Trigger>
                    <Select.Content position="popper">
                      <input type={"time"} onChange={(d) => {
                        setEndTime(d.target.value)
                        console.log(d.target.value)
                      }}/>
                    </Select.Content>
                  </Select.Root>
                </Box>
              </Flex>
            </Flex>
          </Skeleton>

          <Box mt={"64px"}></Box>

          <Skeleton loading={loading}>
            <Flex direction={"column"} gap={"2"}>
              <Text size={"3"} weight={"medium"}>Description</Text>
              <TextArea
                  onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                  variant="soft" style={{background: appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}} placeholder="Add event description..." />
            </Flex>
          </Skeleton>

          <Box mt={"4"}></Box>

          <Fileupload onFile={setFile} loading={loading} />

          <Box mt={"64px"}></Box>

          <Skeleton loading={loading}>
            <Flex direction={"row"} align={"center"} gap={"4"}>
              <Button size={"3"} variant={"soft"} style={{background:appearance=="dark"?Colors.darkbuttonBgGreen:Colors.lightButtonBgGreen}}>
                <Text size={"3"} weight={"medium"} style={{color: Colors.darkColorGreen}}>Create Event</Text>
              </Button>
              <Button  size={"3"} variant={"ghost"}>
                <Text size={"3"}  style={{color:Colors.darkSoftText}}>Cancel</Text>
              </Button>
            </Flex>
          </Skeleton>


        </Flex>
      </Box>
    </Box>
        </MantineProvider>
  );
}
