import dynamic from 'next/dynamic';

import Spinner from 'src/components/Spinner';

const CodeBlock = dynamic(() => import('src/components/CodeBlock'), {
  loading: Spinner,
  ssr: false,
});

const CodeBlockDynamic = ({ key, ...props }) => <CodeBlock {...props} key={key} />;

export default CodeBlockDynamic;
