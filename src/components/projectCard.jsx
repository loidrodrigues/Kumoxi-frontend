import { Card, CardContent } from "./ui/card";

export default function ProjectCard({ title, description, data, autor }) {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold"> {title}</h2>
        <p className="text-sm text-muted-foreground">
          Por {autor} - data {data}
        </p>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
