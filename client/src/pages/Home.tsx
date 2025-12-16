import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import SDRForm from "@/components/SDRForm";
import Solution from "@/components/Solution";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <SDRForm />
      </main>
      <Footer />
    </div>
  );
}
