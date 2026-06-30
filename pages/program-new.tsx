import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filtr = context.query.filtr;
  const destination = typeof filtr === 'string' && filtr.length > 0
    ? `/program?filtr=${encodeURIComponent(filtr)}`
    : '/program';
  return {
    redirect: { destination, permanent: true },
  };
};

const ProgramNewRedirect = () => null;

export default ProgramNewRedirect;
