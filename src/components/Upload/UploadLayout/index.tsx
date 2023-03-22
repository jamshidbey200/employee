import { Box } from "@chakra-ui/react"
import React from 'react'

type Props = {
    children?: React.ReactNode
}
const UploadLayout = ({ children }: Props) => {
    return (
        <Box p={3} display={'flex'} gap={4} flexWrap={'wrap'}>{children}</Box>
    )
}

export default UploadLayout