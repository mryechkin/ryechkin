import { CodeBlock, Layout } from '@/components';

export default function Snippets() {
  return (
    <Layout>
      <CodeBlock
        code={`
() => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center bg-indigo-600">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="p-2 m-4 border-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </motion.button>
    </div>
  );
};
`}
      />
    </Layout>
  );
}
