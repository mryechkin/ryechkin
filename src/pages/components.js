import Card from 'src/components/Card';
import HeroContainer from 'src/components/HeroContainer';

export default function Components() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-indigo-950">
      <Card>This is a test.</Card>
      <HeroContainer title="I'm a `title`">This is a test.</HeroContainer>
    </div>
  );
}
