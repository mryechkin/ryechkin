import { CodeBlock, Layout } from '@/components';

const BoxExample = `
() => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        p: "4",
      }}
    >
      <KyloRen />
    </Box>
  );
};
`;

export default function Snippets() {
  return (
    <Layout>
      <CodeBlock code={BoxExample} />
    </Layout>
  );
}
