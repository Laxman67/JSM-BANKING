import Image from 'next/image';
import '../app/globals.css';
import Link from 'next/link';
import BankCard from './ui/BankCard';
const RightSideBar = ({ user, transactions, banks }) => {
  return (
    <aside className="sidebar">
      <div>
        <section className="flex flex-col">
          <div className="h-32 m-0 w-[260px] bg-cover  rounded-e-md overflow-hidden bg-center bg-gradient-to-t from-pink-400 to-red-500 bg-no-repeat relative">
            <div className="profile  top-16 right-10">
              <div className="profile-img ">
                <span className="text-5xl font-bold text-blue-500  top-3">
                  {user.firstName[0]}
                </span>
              </div>
              <div className="profile-detaile">
                <div className="profile-name">
                  <p className="profile-email">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="banks">
          <div className="flex w-full justify-between">
            <h2 className="header-2">My Banks</h2>
            <Link href="/" className="gap-2 flex">
              <Image src="/icons/plus.svg" width={20} height={20} alt="" />
              <h2 className="text-14 font-semibold">Add Bank</h2>
            </Link>
          </div>

          {banks?.length > 0 && (
            <div className="flex relative flex-1 flex-col items-center justify-center gap-5">
              <div className="relative z-10">
                <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>

              {banks[1] && (
                <div className="absolute right-0 top-8 z-0 w-[90%]">
                  <BankCard
                    key={banks[1].$id}
                    account={banks[1]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </aside>
  );
};

export default RightSideBar;
