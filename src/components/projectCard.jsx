import { Card, CardContent } from "./ui/card";

export default function ProjectCard({
  title,
  description,
  data,
  autor,
  isDestaque = false,
}) {
  return (
    <div
      className={`p-4 rounded-lg shadow ${
        isDestaque ? "bg-yellow-50 border-l-4 border-yellow-400" : "bg-white"
      }`}
    >
      {isDestaque && (
        <span className="text-yellow-700 font-semibold text-xs uppercase mb-2 block">
          🔥 Destaque
        </span>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      {isDestaque ? (
        <p className="text-sm text-gray-600">{description.slice(0, 50)}...</p>
      ) : (
        <p className="text-sm text-gray-600">{description}</p>
      )}
      <p className="text-xs text-gray-400 mt-1">
        Por {autor} — {data}
      </p>
    </div>
  );
}
