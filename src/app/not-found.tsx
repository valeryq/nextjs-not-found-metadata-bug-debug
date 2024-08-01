import { Metadata } from 'next';

export const metadata: Metadata = ({
  title: '404 | Not found',
});

const NotFound = () => {
  return (
      <section>
        <h1>Page not found</h1>
      </section>
  );
};

export default NotFound;
