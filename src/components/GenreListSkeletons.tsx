import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react'


const GenreListSkeletons = () => {
  return (
    <ListItem paddingY='5px'>
        <HStack>
            <Skeleton boxSize='32px'  borderRadius={8}/>
            <SkeletonText noOfLines={1} skeletonHeight='2' />    
        </HStack>
    </ListItem>
  )
}

export default GenreListSkeletons