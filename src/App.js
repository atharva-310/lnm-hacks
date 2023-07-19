import { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, theme, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import './styles/main.css';

import Loader from './components/Loader';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import AboutUs from './components/AboutUs';
import ScrollerBanner from './components/ScrollerBanner';
import Schedule from './components/schedule/Schedule';
import TracksBounty from './components/tracks/TracksBounty';
import Register from './components/Register';
import Sponsor from './components/sponsor/Sponsor';
import Faq from './components/faq/Faq';
import Venue from './components/venue';
import Footer from './components/Footer';

// import PastSponsor from './components/pastSponsor/PastSponsor';

function App() {
  const body = useRef(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Disable the loader after 5.5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box ref={body}>
        <Box maxW={'100vw'} overflowX="hidden" bg="black">
          {isLoading ? (
            <Loader />
          ) : (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <>
                <Navbar />
                <Home />
                <AboutUs />
                <ScrollerBanner />
                <Schedule />
                <TracksBounty />
                <Register />
                <Sponsor />
                <Faq />
                <Venue />
                {/* <PastSponsor />  */}
                <Divider />
                <Footer />
              </>
            </motion.div>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
