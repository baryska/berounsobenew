import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { notFound: true };
};

const ProgrammePage = () => null;

export default ProgrammePage;
