import React, { useState } from 'react';
import Link from 'next/link';
import OutlineButton from '../../components/OutlineButton';
import { BsTelephoneOutbound } from 'react-icons/bs'
import {
  Flex,
  Center,
  Text,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Portal
} from '@chakra-ui/react'

// Reveal animation on room pictures
import Fade from 'react-reveal/Fade';

// Parallax effect
import { Parallax } from 'react-parallax'

// Custom Header component
import Header from '../Header'


export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Rooms data
  const rooms = [
    {
      id: 1,
      title: 'Convenience',
      src: './lucky-hotel-2.jpg',
      description: 'Each room has a comfortable bed, air conditioning, refrigerator, TV. Everything you need to relax',
      link: ''
    },
    {
      id: 2,
      title: 'Bathroom',
      src: './lucky-hotel-3.jpg',
      description: 'The bathroom is spacious and comfortable, you will find all the cosmetics for bathing and hygiene',
      link: ''
    },
    {
      id: 3,
      title: 'Car and motorbike rental',
      src: './lucky-car.jpg',
      description: 'From the hotel you can go to the beach or go on a trip by car or motorbike',
      link: '/rent'
    },
  ]

  return (
    <>
      <Header h={[280, 260, 220]}>
        {{
          title: 'Rooms',
          heading: 'Here, you are the boss...',
          content: 'Spacious and elegantly decorated, discover rooms adorned with rich colors, conducive to relaxation. A refined balance of functionality and comfort, the rooms of Lucky Andaman Hotel are distinguished by the emphasis placed on the smallest detail, with the sole aim of enhancing your feeling of well-being.'
        }}
      </Header>
      <Flex
        mt={[16, 12, 10, 8, 6]}
        mb={[6, 8, 10, 12, 16]}
        direction='column'
        zIndex={1}
      >
        <Center
          mt={[12, 10, 8]}
          mb={[8, 12, 16]}
        >
          <Parallax
            bgImage='./brownRoom.jpg'
            bgImageAlt='Brown Room'
            strength={380}
          >
            <Center
              px={[12, 120, 160, 200, 220, 240]}
              py={[16, 160, 200, 260, 280, 280]}
              h={[200, 240, 260, 280, 320, 360]}
              w={[370, 500, 800, 1050, 1450, 1600]}
              opacity={0.67}
            >
              <Text
                as='i'
                bg='secondary'
                color='primary'
                fontSize='xl'
                align='center'
                px={[6, 8, 8, 8, 8]}
                py={[4, 6, 8, 8, 8]}
                w='100%'
              >
                Welcome to our rooms
              </Text>
            </Center>
          </Parallax>
        </Center>
        <Text
          as='i'
          noOfLines={3}
          color='primary'
          fontSize='2xl'
          align='center'
          mb={[8, 12, 16]}
          mx={6}
        >
          Stay in a room in Lucky Andaman Hotel
        </Text>
      </Flex>
      <Flex direction='column' bg='secondary'>
  {rooms.map((room) => (
    <>
      <Flex
        direction='row'
        display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}
      >
        <Center w='100%'>
          {room.id % 2 == 0 ?
            <Fade right>
              <Flex direction='column'>
                <Text color='primary' fontSize='xl' align='center' my={1}>
                  {room.title}
                </Text>
                <Text align='center' my={2}>
                  {room.description}
                </Text>
              
                {room.id !== 2 && ( 
                  <Button
                    as='a'
                    my={2}
                    mx={12}
                    bg='none'
                    border='2px'
                    borderRadius={0}
                    fontWeight='bold'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    _hover={{
                      bg: 'primary',
                      textColor: 'black',
                      fontWeight: 'extrabold'
                    }}
                    _active={{
                      bg: 'primary',
                      transform: 'scale(0.98)',
                    }}
                    _focus={{}}
                    onClick={onOpen}
                  >
                    Reserve
                  </Button>
                )}
              </Flex>
            </Fade>
            :
            <Fade left>
              <Image src={room.src} />
            </Fade>
          }
        </Center>
        <Center w='100%'>
          {room.id % 2 != 0 ?
            <Fade left>
              <Flex direction='column'>
                <Text color='primary' fontSize='xl' align='center' my={2}>
                  {room.title}
                </Text>
                <Text align='center' my={2}>
                  {room.description}
                </Text>
               
                {room.id !== 2 && ( 
                  <Button
                    as='a'
                    my={2}
                    mx={12}
                    bg='none'
                    border='2px'
                    borderRadius={0}
                    fontWeight='bold'
                    transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                    _hover={{
                      bg: 'primary',
                      textColor: 'black',
                      fontWeight: 'extrabold'
                    }}
                    _active={{
                      bg: 'primary',
                      transform: 'scale(0.98)',
                    }}
                    _focus={{}}
                    onClick={onOpen}
                  >
                    Reserve
                  </Button>
                )}
              </Flex>
            </Fade>
            :
            <Fade left>
              <Image src={room.src} />
            </Fade>
          }
        </Center>
      </Flex>
      <Flex
        direction='column-reverse'
        display={['flex', 'flex', 'none', 'none', 'none', 'none']}
      >
        <Fade left>
          <Flex direction='column' my={10}>
            <Text color='primary' fontSize='xl' align='center' my={1}>
              {room.title}
            </Text>
            <Text align='center' my={2}>
              {room.description}
            </Text>
           
            {room.id !== 2 && ( 
              <Button
                as='a'
                my={2}
                mx={12}
                bg='none'
                border='2px'
                borderRadius={0}
                fontWeight='bold'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                _hover={{
                  bg: 'primary',
                  textColor: 'black',
                  fontWeight: 'extrabold'
                }}
                _active={{
                  bg: 'primary',
                  transform: 'scale(0.98)',
                }}
                _focus={{}}
                onClick={onOpen}
              >
                Reserve
              </Button>
            )}
          </Flex>
        </Fade>
        <Fade right>
          <Image src={room.src} w='100%' />
        </Fade>
      </Flex>
    </>
  ))}
</Flex>

      <Portal>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay bg="rgba(0, 0, 0, 0.4)" zIndex={1400} />
          <ModalContent bg="white" zIndex={1500}>
            <ModalHeader>Contact and Reserve</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Button
                as="a"
                href="http://wa.me/66804033004"
                target="_blank"
                rel="noopener noreferrer"
                bg="transparent"
                _hover={{ bg: 'none' }}
                width="70px" // Szerokość przycisku
                height="120px" // Wysokość przycisku
                borderRadius="md" // Opcjonalne zaokrąglenie rogów
                p={2}
              >
                <Image src="/whatsapp.png" alt="WhatsApp" boxSize="50px" mx="auto" /> {/* Rozmiar obrazu */}
              </Button>


              <Button
                as="a"
                href="https://line.me/ti/p/tWJCrm0wfz"
                target="_blank"
                rel="noopener noreferrer"
                bg="transparent"
                _hover={{ bg: 'none' }}
                width="70px" // Szerokość przycisku
                height="120px" // Wysokość przycisku
                borderRadius="md" // Opcjonalne zaokrąglenie rogów
                p={2}
              >
                <Image src="/line.png" alt="Line" boxSize="50px" mx="auto" /> {/* Rozmiar obrazu */}
              </Button>
              <Button
                as="a"
                href="https://t.me/bar13patong"
                target="_blank"
                rel="noopener noreferrer"
                bg="transparent"
                _hover={{ bg: 'none' }}
                width="70px" // Szerokość przycisku
                height="120px" // Wysokość przycisku
                borderRadius="md" // Opcjonalne zaokrąglenie rogów
                p={2}
              >
                <Image src="/telegram.png" alt="telegram" boxSize="50px" mx="auto" /> {/* Rozmiar obrazu */}
              </Button>


              <Link
                href='tel: +66 804 033 004'
                passHref
                display={['flex', 'flex', 'none', 'none', 'none']}
              >
                <OutlineButton
                  display={['flex', 'flex', 'none', 'none', 'none']}
                  rightIcon=<BsTelephoneOutbound />
                >
                  Phone
                </OutlineButton>
              </Link>

            </ModalBody>
          </ModalContent>
        </Modal>
      </Portal>
    </>
  )
}
