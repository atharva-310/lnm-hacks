import React from 'react';
import { useTransform } from 'framer-motion';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export default function Body() {
  return <div>Body</div>;
}
