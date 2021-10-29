import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { NFT } from '../components/NFT.js';

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
        Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
      </Text>
      <NFT
        imgUrl="https://i.ibb.co/p3jgJQt/Avatar.png"
        name="Chakra NFT"
        ticker="CNFT"
        nftCount="2.00"
        trade="20"
        liquidity="2.00"
        floorPrice="3.00"
        weeklyChange="1.00"
        chartUrl="https://www.coingecko.com/coins/1/sparkline"
      />
      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://chakra-ui.com"
            flexGrow={1}
            mr={2}
          >
            Chakra UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
            Next.js <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
