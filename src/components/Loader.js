import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Box, Heading, Image } from '@chakra-ui/react';
import logoW from '../assets/logo-white-dates.png';

// Loader using the GSAP library
export default function Loader() {
  const [right, setRight] = useState();
  const bar = useRef();
  const root = useRef();
  const title = useRef();
  const items = ['Build', 'Learn', 'Network', 'Grow'];

  useEffect(() => {
    setRight(`${title.current.offsetLeft}px`);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      var tLine = gsap.timeline();
      tLine.delay(1);
      tLine.from(bar.current, {
        opacity: 0,
        rotate: '100',
        x: '100',
      });
      tLine.fromTo(
        '#images',
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
        }
      );

      for (let i = 0; i < items.length; i++) {
        tLine.fromTo(
          `#t${i}`,
          {
            opacity: 0,
            y: -10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
          }
        );
        tLine.to(`#t${i}`, {
          opacity: 0,
          y: 10,
          duration: 0.3,
        });
      }
      tLine.fromTo(
        '#tlast',
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
        }
      );
      // tLine.fromTo(
      //   '#dates',
      //   {
      //     opacity: 0,

      //     y: 60,
      //   },
      //   {
      //     opacity: 1,
      //     y: 60,
      //   }
      // );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      style={{
        // width: '100vw',
        maxWidth: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'Center',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
    >
      <Image
        id="images"
        alt="LNM Hacks"
        width={['40%', '40%', '40%', '40%']}
        maxWidth="400px"
        src={logoW}
        // filter={'invert(100%)'}
      />
      <Box
        ref={bar}
        width="3px"
        height={['100px', '120px', '130px', '140px', '160px']}
        margin="20px"
        backgroundColor="white"
      ></Box>
      <Heading
        ref={title}
        width={['30%', 'auto']}
        fontSize={['20px', '30px', '30px', '30px', '50px']}
        visibility="hidden"
      >
        Comming
      </Heading>
      {items.map((item, index) => {
        return (
          <Heading
            id={`t${index}`}
            left={right}
            position="absolute"
            fontWeight="500"
            fontSize={['20px', '30px', '30px', '50px']}
          >
            {item}
          </Heading>
        );
      })}
      <Heading
        id={`tlast`}
        left={right}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        // bgClip="text"
        px="10px"
        position="absolute"
        fontWeight="500"
        fontStyle="italic"
        fontSize={['20px', '50px']}
        // overflow="hidden"
      >
        Let's hack..
      </Heading>
    </div>
  );
}
