import { CodeBlock, Layout } from '@/components';

export default function Snippets() {
  return (
    <Layout>
      <CodeBlock
        code={`
<Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Button colorScheme='teal' variant='outline'>
    Button
  </Button>
  <Button colorScheme='teal' variant='ghost'>
    Button
  </Button>
  <Button colorScheme='teal' variant='link'>
    Button
  </Button>
</Stack>
`}
      />
    </Layout>
  );
}
