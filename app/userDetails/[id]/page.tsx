import { notFound } from "next/navigation";

type TodoDetails = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getTodoDetails(id: string): Promise<TodoDetails> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const todo = await getTodoDetails(id);

  return (
    <div className="p-6 border border-[#808000] max-w-xl">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>

      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>User ID:</strong> {todo.userId}</p>
      <p><strong>Title:</strong> {todo.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {todo.completed ? "Completed ✅" : "Pending ❌"}
      </p>
    </div>
  );
}