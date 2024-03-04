import Featured from '@/components/main/Featured';
import Hero from '@/components/main/Hero';

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Hero />
      <Featured />
    </div>
  );
}
