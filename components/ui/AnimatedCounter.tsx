'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp end={amount} decimal="," prefix="Rs. " duration={2.32} />
    </div>
  );
};

export default AnimatedCounter;
