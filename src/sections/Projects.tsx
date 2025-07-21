const projects = [
  {
    title: "fyKit UI",
    description:
      "A minimal UI kit with reusable components for modern websites.",
  },
  {
    title: "fyKite",
    description:
      "Ecommerce & cultural platform about Indonesian kite heritage.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-10">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((projects, index) => (
          <div
            key={index}
            className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h4 className="text-lg font-semibold mb-2">{projects.title}</h4>
            <p className="text-white/60 text-sm">{projects.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
