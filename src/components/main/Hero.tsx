'use client';

import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import { cn } from '@/utils/style';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Background from '../ui/background';
import { Button } from '../ui/moving-border';

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn('relative overflow-hidden bg-hero-pattern bg-cover py-20')}
    >
      <Background />
      <div className="container flex items-center justify-between">
        <motion.div variants={slideInFromLeft(0.8)}>
          <h2
            className={cn('text-5xl font-semibold text-slate-700 md:text-6xl')}
          >
            Create Your Dreams
            <span className="mt-3 block md:mt-4">with Code</span>
          </h2>
          <p
            className={cn('mb-5 mt-10 text-xl text-slate-800 lg:mb-10 lg:mt-6')}
          >
            상상했던 모든 것을 현실로 만들어보세요. 당신의 여정을 지금
            시작하세요.
          </p>
          <Button>Project Request</Button>
        </motion.div>
        <motion.div variants={slideInFromRight(0.8)}>
          <Image
            src={'/images/MainHamster.png'}
            alt="MainHamster"
            width={400}
            height={0}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Hero;
