import {Avatar, Box, Flex, IconButton, Skeleton, Text, TextField} from "@radix-ui/themes";
import { Colors } from "@/app/utils/Colors";
import React, {useCallback, useState} from "react";
import {useDropzone} from "react-dropzone";
import useThemeStore from "@/store/themeStore";
import { FiTrash } from "react-icons/fi";
import Image from "next/image";
import {formatBytes} from "@/app/utils/Helpers";



export default function Fileupload(props) {

    const appearance = useThemeStore((state) => state.appearance);

    const [uploadedImage, setUploadedImage] = useState(null);
    const [filename, setFilename] = useState(null);
    const [filesize, setFilesize] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            setUploadedImage(reader.result);

            setFilename(file.name)
            setFilesize(file.size)

            props.onFile({
                file: file,
                filename: file.name,
                filesize: file.size,
                filetype: file.type
            })
        };
        reader.readAsDataURL(file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    return <Skeleton loading={props?.loading}>
        <Flex direction={"column"} gap={"2"}>

            <Text size={"3"} weight={"medium"}>Banner image</Text>
            <Box
                {...getRootProps()}
                style={{
                    background: appearance == "dark" ? Colors.darkInputBg : Colors.iconsBg,
                    height: "120px",
                    width: "100%",
                    borderRadius: "6px",
                    cursor: "pointer"
                }}>
                <input {...getInputProps()} />
                <Flex align={"center"} justify={"center"} direction={"column"} width={"100%"} wrap={"wrap"}
                      height={"100%"}>
                    <Text align={"center"} style={{color: Colors.lightSoftText, textDecoration: "underline"}}
                          weight={"bold"} size={"2"}>Click to upload <Text size={"2"} weight={"regular"}
                                                                           style={{textDecoration: "none"}}>or drag and drop
                    </Text></Text>
                    <Text align={"center"} style={{color: Colors.lightSoftText,}} size={"2"}>SVG, PNG, JPG or GIF
                        (recommended size 1024x1024px) </Text>
                </Flex>
            </Box>
            {uploadedImage && (
                <Box
                    style={{
                        height: "120px",
                        width: "100%",
                        borderRadius: "6px",
                        overflow:"hidden"
                    }}
                    mt={4} style={{ textAlign: 'center' }}>
                    <Flex direction={"row"} align={"center"}>
                        <Box>
                            <img src={uploadedImage} alt="Uploaded" style={{height:"120px",borderRadius:"6px" }}/>
                        </Box>
                        <Box ml={"6"}>
                            <Flex direction={"column"} align={"start"} >
                                <IconButton variant={"soft"} style={{background:Colors.lightRed,cursor:"pointer"}} onClick={()=>{
                                    setUploadedImage(null);
                                }}>
                                    <FiTrash color={"red"} />
                                </IconButton>
                                <Box mt={"2"}></Box>
                                <Text  size={"1"} weight={"medium"} style={{color:Colors.anotherLightSoft}}>{filename}</Text>
                                <Text  size={"1"} weight={"light"} style={{color:Colors.anotherLightSoft}}>{formatBytes(filesize || 0)}</Text>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            )}
        </Flex>
    </Skeleton>
}
