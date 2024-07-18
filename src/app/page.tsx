'use client';
import {Box, Button, Callout, Flex, IconButton, Select, Skeleton, Text, TextArea, TextField, Popover} from "@radix-ui/themes";
import { Colors } from "./utils/Colors";
import CalendarIcon from "./components/svg/calendar";
import { FaRegClock } from "react-icons/fa";
import React, {useEffect} from 'react';
import { CiCircleInfo } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import useThemeStore from "@/store/themeStore";
import Fileupload from "@/app/components/form/fileupload";
import timezones from '@/app/utils/timezones.json'
import {RxCross2} from "react-icons/rx";
import { IoIosLink } from "react-icons/io";

let refs = {
  eventName:null,
  date:null,
  timezone:null,
  startTime:null,
  endTime:null,
  description:null,
  video:null
}

const errorsList = [
    "Event name is required",
    "Date is required",
    "Timezone is required",
    "Start time is required",
    "End time is required",
  "Description is required",
  "A valid video link is required",
    "Banner image is required"
]
export default function Home() {

  const [value, setValue] = React.useState('light');
  const [video, setVideo] = React.useState(null)
  const [timezone, setTimezon] = React.useState(null);
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);
  const [name, setEventName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [preSelectedFile, setPreSelectedFile] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const appearance = useThemeStore((state) => state.appearance);
  const setAppearance = useThemeStore((state) => state.setAppearance);
  const [loading, setLoading] = React.useState(true);
  const [errors, setErros] = React.useState([])

  const [creating, setCreating] = React.useState(false)
  const [created, setCreated] = React.useState(false)

  const [editing, setEditing] = React.useState(false)
  const [eventDetails, setEventDetails] = React.useState(null)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)

    checkIfJustCreated()

  },[])




  const checkIfJustCreated =()=>{
    const justCreated = localStorage.getItem("justCreated")
    if(justCreated){
      setCreated(true)

      setTimeout(()=>{
        setCreated(false)
      },4000)
      localStorage.removeItem("justCreated")
    }
  }

  const [startDate, setStartDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
    console.log(date);
  };

  const validate = (trigger=false)=>{

    if(trigger)
      setErros([])

    let localErrors = []

    if(!name){
      // refs.eventName && refs.eventName.focus()
      refs.eventName.className =refs.eventName.className +  " red-alerted"
      if(trigger){
        localErrors.push(errorsList[0])
      }
    }else{
      refs.eventName.className =refs.eventName.className.replace("red-alerted","")
      setErros((list:string[])=>list.splice(0))
    }

    if(!date){
      // refs.date && refs.date.focus()
      refs.date.className =refs.date.className +  " red-alerted"
      if(trigger){
        localErrors.push(errorsList[2])
      }
    }else{
      refs.date.className =refs.date.className.replace("red-alerted","")
      setErros((list:string[])=>list.splice(1))
    }

    if(!timezone){
      // refs.timezone && refs.timezone.focus()
      refs.timezone.className =refs.timezone.className +  " red-alerted"
      if(trigger){
        localErrors.push(errorsList[2])
      }
    }else{
      refs.timezone.className =refs.timezone.className.replace("red-alerted","")
      setErros((list:string[])=>list.splice(2))
    }

    if(!startTime){
      // refs.startTime && refs.startTime.focus()
      refs.startTime.className =refs.startTime.className +  " red-alerted"
      if(trigger){
        localErrors.push(errorsList[3])
      }
    }else{
      refs.startTime.className =refs.startTime.className.replace("red-alerted","")
      setErros((list:string[])=>list.splice(3))
    }

    if(!endTime){
      // refs.endTime && refs.endTime.focus()
      refs.endTime.className =refs.endTime.className +  " red-alerted"
      if(trigger){
        localErrors.push(errorsList[4])
      }
    }else{
      refs.endTime.className =refs.endTime.className.replace("red-alerted","")
      setErros((list:string[])=>list.splice(4))
    }

    if(!description){
      // refs.description && refs.description.focus()
      refs.description.className =refs.description.className +  " red-alerted"
      if(trigger){
        localErrors.push(errorsList[5])
      }
    }else{
      refs.description.className =refs.description.className.replace("red-alerted","")
      setErros((list:string[])=>list.splice(5))
    }

    if(!video || !video.startsWith("http")){
      // refs.description && refs.description.focus()
      refs.video.className =refs.video.className +  " red-alerted"
      if(trigger){
        localErrors.push(errorsList[6])
      }
    }else{
      refs.video.className =refs.video.className.replace("red-alerted","")
      setErros((list:string[])=>list.splice(6))
    }


    if(!file){
      if(trigger){
        localErrors.push(errorsList[7])
      }
    }else{
      setErros((list:string[])=>list.splice(7))
    }

    setErros(localErrors)

    return localErrors.length


  }

  const invokeEdit =()=>{
    setEditing(true)
    const eventDetails = JSON.parse(localStorage.getItem("event"))

    setEventName(eventDetails.name)
    setDescription(eventDetails.description)
    setPreSelectedFile(eventDetails.file)
    setFile(eventDetails.file)
    setDate(eventDetails.date)
    setStartTime(eventDetails.startTime)
    setEndTime(eventDetails.endTime)
    setTimezon(eventDetails.timezone)

  }


  const createEvent =()=>{

    if(validate(true)==0){

      setCreating(true)

      setTimeout(()=>{

        let eventDetails = {
            name:name,
            date:date,
            timezone:timezone,
            startTime:startTime,
            endTime:endTime,
            description:description,
            file:file
        }
        localStorage.setItem("event", JSON.stringify(eventDetails))
        localStorage.setItem("justCreated", "true")

        window.location.reload()


        console.log("created")

      },2000)

    }else{
        console.log("errors")
    }
  }

  const getSubmitBtnText =()=>{
    if(editing){

      return creating?"Updaing...":"Update event"
    }
    return creating?"Creating...":"Create event"
  }




  return (
    <Box px={{sm:"6", xs:"20px", initial:"20px"}} py={{sm:"5", xs:"20px", initial:"20px"}} width={"100%"}>
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

          <>
          {
              created &&

                    <Box style={{position:"absolute", top:"10%", right:"40px",}}>
                      <Callout.Root style={{ background: appearance=="dark"?Colors.panel:Colors.white, marginBottom:"8px"}} size="1">
                        <Flex direction={"row"} justify={"between"} align={"center"} gap={"30px"}>
                          <Callout.Text size={"3"} weight={"medium"} style={{color:appearance=="dark"? Colors.white:Colors.black}}>
                            Event created successfully
                          </Callout.Text>

                          <Flex direction={"row"} align={"center"} justify={"end"} gap={"2"}>
                            <Button
                                onClick={()=>{
                                  invokeEdit()
                                }}
                                style={{cursor:"pointer"}} variant={"ghost"}>
                              <Text size={"3"} weight={"medium"} style={{color:Colors.darkColorGreen}}>Edit event</Text>
                            </Button>

                            <IconButton onClick={()=>{
                              setCreated(false)
                            }} style={{cursor:"pointer"}} variant={"ghost"}>
                              <RxCross2 style={{color:appearance=="dark"? Colors.white:Colors.black}}  />
                            </IconButton>
                          </Flex>
                        </Flex>
                      </Callout.Root>
                    </Box>
          }
          </>

          {errors.length>0 &&

          <>
            <Box mt={"64px"} />

            {

              errors.map((error,index)=>{
                return (

                    <Callout.Root style={{background:Colors.lightRed, marginBottom:"8px"}} size="1">
                      <Callout.Icon>
                        <CiCircleInfo  color={"red"} />
                      </Callout.Icon>
                      <Callout.Text size={"2"} weight={"regular"} color={"red"}>
                        {error}
                      </Callout.Text>
                    </Callout.Root>
                )
              })
            }
          </>
          }
          <Box mt={"64px"}></Box>

          <Skeleton loading={loading}>
            <Flex direction={"column"} gap={"2"}>
              <Text size={"3"} weight={"medium"}>Event Name</Text>

              <TextField.Root
                  state={"alert"}
                  ref={(ref)=>{
                    refs.eventName = ref
                  }}

                  onChange={(e)=>{
                    setEventName(e.target.value)
                    // validate()
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

                  <Box width={{xs:"280px",initial:"100%"}} pr={{md:"0px",xs:"1", initial:"1"}} style={{}}>
                    <Select.Root  size={"3"} value={date}>
                      <Select.Trigger ref={(ref)=>refs.date=ref}  variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
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

                  <Box width={{xs:"280px",initial:"100%"}} pl={{md:"0px",xs:"1", initial:"1"}} style={{}}>
                    <Select.Root size={"3"} value={timezone} onValueChange={setTimezon}>
                      <Select.Trigger ref={(ref)=>refs.timezone=ref} variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
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

                  <Box width={{xs:"280px",initial:"100%"}} pr={{md:"0px",xs:"1", initial:"1"}} style={{}}>
                    <Select.Root size={"3"} value={startTime}>
                      <Select.Trigger ref={(ref)=>refs.startTime=ref} variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
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

                <Box width={{xs:"280px",initial:"100%"}} pl={{md:"0px",xs:"1", initial:"1"}} style={{}}>
                  <Select.Root size={"3"} value={endTime}>
                      <Select.Trigger ref={(ref)=>refs.endTime=ref} variant="soft" style={{background:appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}}>
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
                  ref={(ref)=>refs.description=ref}
                  onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                  variant="soft" style={{background: appearance=="dark"?Colors.darkInputBg: Colors.iconsBg}} placeholder="Add event description..." />
            </Flex>
          </Skeleton>


          <Box mt={"64px"}></Box>

          <Skeleton loading={loading}>
            <Flex direction={"column"} gap={"2"}>
              <Text size={"3"} weight={"medium"}>Video</Text>

              <TextField.Root
                  ref={(ref)=>{
                    refs.video = ref
                  }}

                  onChange={(e)=>{
                    setVideo(e.target.value)
                    // validate()
                  }}

                  variant={"soft"}
                  style={{
                    backgroundColor: appearance=="dark"?Colors.darkInputBg:Colors.iconsBg
                  }} size="3" placeholder="Add video link..." >

                <TextField.Slot>
                  <IoIosLink  height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </Flex>
          </Skeleton>

          <Box mt={"4"}></Box>

          <Fileupload preSelectedFile={preSelectedFile} onFile={setFile} loading={loading} />

          <Box mt={"64px"}></Box>

          <Skeleton loading={loading}>
            <Flex direction={"row"} align={"center"} gap={"4"} >
              <Button onClick={()=>createEvent()} size={"3"} variant={"soft"} style={{background:appearance=="dark"?Colors.darkbuttonBgGreen:Colors.lightButtonBgGreen, cursor:"pointer"}}>
                <Text size={"3"} weight={"medium"} style={{color: Colors.darkColorGreen}}>{getSubmitBtnText()}</Text>
              </Button>
              <Button  size={"3"} variant={"ghost"} style={{cursor:"pointer"}}>
                <Text size={"3"}  style={{color:Colors.darkSoftText}}>Cancel</Text>
              </Button>
            </Flex>
          </Skeleton>


        </Flex>
      </Box>
    </Box>
  );
}
