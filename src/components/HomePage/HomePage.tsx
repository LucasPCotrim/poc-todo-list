import { HomePageContainer } from './HomePage.style';

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

export default function HomePage({ children }: Props) {
  return (
    <HomePageContainer>
      <div className='top-logo'>To Do List</div>
      {children}
    </HomePageContainer>
  );
}
