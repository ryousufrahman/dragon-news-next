
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='p-5 space-y-3 text-center'>
         <Image src={logo} width={300} height={200} alt='logo' className='mx-auto'></Image>
         <h2>Journalism Without Fear or Favour</h2>
         <p>date</p>
        </div>
    );
};

export default Header;