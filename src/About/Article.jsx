
import { CheckCircle2 } from "lucide-react";

function Article() {
  const points = [
    "Modern and responsive interface",
    "Simple navigation between pages",
    "Designed for casual entertainment",
    "Mobile-friendly layout",
    "Fast and lightweight frontend",
    "Clean visual experience",
  ];

  return (
    <section className="bg-gray-200">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <h2 className="text-3xl font-black text-slate-900">
          A modern entertainment platform
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-slate-600">
          <p>
            Luckywheel777 is designed as a modern entertainment experience
            where users can explore an attractive interface and interact with
            game-focused content in a simple way.
          </p>

          <p>
            The website is built with React and Tailwind CSS, allowing the
            interface to remain responsive across desktop, tablet and mobile
            screens. Each section has been separated into reusable components
            so that the project can be expanded easily later.
          </p>

          <p>
            Our goal with this interface is to keep navigation straightforward
            while giving the platform a distinctive visual identity. The final
            version can include richer animations, improved graphics,
            additional content sections and a more polished game interface.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-xl border border-gray-300 bg-white p-4"
            >
              <CheckCircle2
                className="shrink-0 text-yellow-500"
                size={20}
              />
              <span className="text-slate-700">{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-300">
          <table className="w-full text-left">
            <thead className="bg-yellow-400 text-slate-950">
              <tr>
                <th className="px-5 py-4">Feature</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Version</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300 bg-white">
              <tr>
                <td className="px-5 py-4 text-slate-800">Responsive UI</td>
                <td className="px-5 py-4 text-green-600">Ready</td>
                <td className="px-5 py-4 text-slate-500">1.0</td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-slate-800">Navigation</td>
                <td className="px-5 py-4 text-green-600">Ready</td>
                <td className="px-5 py-4 text-slate-500">1.0</td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-slate-800">Final Graphics</td>
                <td className="px-5 py-4 text-yellow-600">Coming Soon</td>
                <td className="px-5 py-4 text-slate-500">2.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Article;

