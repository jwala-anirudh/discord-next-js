import { UserButton } from '@clerk/nextjs';

// Components
import { ModeToggle } from '@/components/mode-toggle';

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <ModeToggle />
    </div>
  );
};

export default Home;
