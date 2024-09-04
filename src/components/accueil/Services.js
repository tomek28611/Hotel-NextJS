import {
  Center,
  Text,
  Stack,
  Box,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react'

// Icons
import { FaCocktail,
  FaFan,
  FaUserFriends,
  FaMapMarkedAlt,
  FaBirthdayCake,
  FaBiking 
} from 'react-icons/fa'
import { GiHorseHead } from 'react-icons/gi'
import { DiCoda } from 'react-icons/di'

// Custom Header component
import Header from '../../components/Header'


export default function Services() {
  // Services data
  const services = [
    {
      index: 1,
      icon: <FaFan/>,
      title: 'Air conditioning',
      info: 'Air conditioning is in every room'
    }, 
    {
      index: 2,
      icon: <FaBiking/>,
      title: 'Motorbike rental',
      type: 'out',
      info: 'At the hotel you can rent a motorbike or car.'
    },
    {   
      index: 3,
      icon: <FaCocktail/>,
      title: 'Bar',
      type: 'in',
      info: 'Downstairs there is a spacious bar with a pool table. Here you will relax and have a great time...'
    },
    {
      index: 4,
      icon: <FaUserFriends/>,
      title: 'Friendly staff',
      type: 'in',
      info: 'Friendly staff are located in the bar and in the hotel, Whatever you need, we are at your disposal'
    },
    {
      index: 5,
      icon: <FaMapMarkedAlt/>,
      title: 'Great location',
      type: 'out',
      info: 'Patong Beach - 1.2 km. In the area there are interesting places such as: Phuket Simon Cabaret (less than a kilometer), Jungceylon Shopping Center (1.7 km), Patong Boxing Stadium (2.5 km). Each accommodation option offers free WiFi and a balcony with a mountain view'
    },
    {
      index: 6,
      icon: <FaBirthdayCake/>,
      title: 'Occasional events',
      type: 'out',
      info: 'If during your stay you need to organize a birthday, engagement or other party, we will help you with that.'
    }
  ]

  return (
    <>
      <Header
        h={[420, 400, 300, 300, 280, 260]}
        py={[2, 4, 8, 10]}
      >
        {{
           title: 'Services',
           heading: 'Comfort, Elegance, Experience and emotions...',
           content: 'Welcome to our hotel'
        }}
      </Header>
      <Center>           
        <Grid
          mr={10} 
          ml={10}
          mt={[16, 12, 0]} 
          templateRows={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(2, 1fr)']}
          templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(6, 1fr)']}
          gap={5}
        >
        {services.map((service, index) => (
          <GridItem key={index} colSpan={2} h='100%'>
            <Box
              maxW='sm'
              overflow='hidden'
              borderRadius='sm' 
              bgColor='secondary' 
            >
              <Center mt={7} mb={2}>   
                <Text fontSize='5xl' color='primary'>
                  {service.icon}
                </Text>
              </Center>
              <Box p={6}>
                <Center>
                  <Box
                    as='h4'
                    mb={2}
                    fontWeight='bold'
                    lineHeight='tight'
                    isTruncated
                    _hover={{
                      textColor: 'primary',
                      fontWeight: 'extrabold'
                    }}
                  >
                  {service.title}
                  </Box>
                </Center>
                <Box display='flex' mt={2} alignItems='center'>
                  <Box
                    as='h4'
                    mt={2}
                    mb={2}
                    fontWeight='light'
                    textColor='gray.600'
                  >
                  {service.info}
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))} 
        </Grid>
      </Center>
    </>
  )
}
