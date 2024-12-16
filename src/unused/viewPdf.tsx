import dynamic from 'next/dynamic';

/**
 * Critical: prevents "TypeError: url.replace is not a function" error
 */
const Sample = dynamic(() => import('@/src/unused/pdf'), {
  ssr: false,
});

export default function viewPdf() {
  return <Sample />;
}