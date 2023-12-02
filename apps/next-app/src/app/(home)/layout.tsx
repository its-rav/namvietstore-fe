import { Metadata } from 'next';

import SectionWrapper from '@/components/sections/section-wrapper';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home description',
};

type HomeLayoutProps = {
  children: React.ReactNode;
  brandMarquee: React.ReactNode;
  statistics: React.ReactNode;
};

export default function HomeLayout(props: HomeLayoutProps) {
  const { children, brandMarquee, statistics } = props;
  return (
    <>
      <main>{children}</main>
      <SectionWrapper background='rgb(133 0 0)'>
        <>{statistics}</>
      </SectionWrapper>

      <SectionWrapper background='transparent' isFullWidth={true}>
        <>{brandMarquee}</>
      </SectionWrapper>
    </>
  );
}
