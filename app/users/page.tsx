import Link from "next/link";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  const todos = await getTodos();

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>

      <table className="w-full border border-[#808000] border-collapse">
        <thead className="bg-[#808000] text-white">
          <tr>
            <th className="border border-[#808000] p-2">ID</th>
            <th className="border border-[#808000] p-2">User ID</th>
            <th className="border border-[#808000] p-2">Title</th>
            <th className="border border-[#808000] p-2">Completed</th>
          </tr>
        </thead>

        <tbody>
          {todos.slice(0, 10).map((todo) => (
            <tr key={todo.id} className="text-center">
              <td className="border border-[#808000] p-2">{todo.id}</td>
              <td className="border border-[#808000] p-2">{todo.userId}</td>
              <td className="border p-2 text-left text-blue-600 underline">
                <Link href={`/userDetails/${todo.id}`}>
                  {todo.title}
                </Link>
              </td>
              <td className="border border-[#808000] p-2">
                {todo.completed ? "✅ Yes" : "❌ No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}