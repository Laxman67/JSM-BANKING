import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';
import '../globals.css';
import RightSideBar from '@/components/RightSideBar';

const Home = () => {
  const loggedIn = {
    firstName: 'Laksh',
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {/* HeaderBox */}
          <HeaderBox
            title="Welcome"
            type="greeting"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your accounts and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={100000.98}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[]} />
    </section>
  );
};

export default Home;
