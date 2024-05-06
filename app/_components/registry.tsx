import dynamic from 'next/dynamic';


export const RSComponent = dynamic(() => import('./RSComponent'), {
  loading: () => <p>loading...</p>,
});
export const ClientComponent = dynamic(() => import('./ClientComponent'));