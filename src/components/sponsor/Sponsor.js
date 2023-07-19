import H1Gradient from '../Basic/H1Gradient';
import MakePage from '../Basic/MakePage';

import SponsorSection from './SponserSection';

import { platinum, gold, other, community } from '../../api/sponsors';

// Array will store all the section data and styling of cards for sponsor sections
const sponserSections = [
  {
    title: 'Platinum',
    data: platinum,
    style: {
      mx: '3px',
      width: {
        mob: '80vw',
        desk: '290px',
      },
      height: {
        mob: '120px',
        desk: '200px',
      },
    },
    headBackgroud:
      'linear-gradient(0deg, #C95C5C, #C95C5C), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);',
  },
  {
    title: 'Gold',
    data: gold,
    style: {
      mx: '3px',
      width: {
        mob: '40vw',
        desk: '280px',
      },
      height: {
        mob: '150px',
        desk: '150px',
      },
    },
    headBackgroud:
      '  linear-gradient(0deg, #D09742, #D09742), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);',
  },
  {
    title: 'Other Sponsors',
    data: other,
    style: {
      mx: '3px',
      width: {
        mob: '40vw',
        desk: '250px',
      },
      height: {
        mob: '100px',
        desk: '130px',
      },
    },
    headBackgroud:
      'linear-gradient(0deg, #59CAFA, #59CAFA), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);',
  },
  {
    title: 'Community Partners',
    data: community,
    style: {
      mx: '3px',
      width: {
        mob: '40vw',
        desk: '250px',
      },
      height: {
        mob: '100px',
        desk: '130px',
      },
    },
    headBackgroud:
      ' linear-gradient(0deg, #7F42AF, #7F42AF), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);',
  },
];

const SponsorPage = () => {
  return (
    <>
      <H1Gradient content={'Sponsors'} mb="30px" />
      {sponserSections.map((item, index) => (
        <SponsorSection
          key={index}
          style={item.style}
          title={item.title}
          headBackgroud={item.headBackgroud}
          data={item.data}
        />
      ))}
    </>
  );
};

const Sponsor = () => {
  return <MakePage children={<SponsorPage />} id="sponsor" pb="50px" />;
};
export default Sponsor;
