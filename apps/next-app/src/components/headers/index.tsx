import MobileHeader from './MobileHeader';
import WebHeader from './WebHeader';

export default async function Header() {
  return (
    <header className='md:mt-[60px]'>
      <div className='hidden md:block w-full'>
        <WebHeader />
      </div>
      <div className='md:hidden block w-full'>
        <MobileHeader />
      </div>
    </header>
  );
}
