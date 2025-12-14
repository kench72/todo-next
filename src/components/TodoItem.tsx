import { Todo } from "@/app/page";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <label className="flex items-center gap-3 py-4 cursor-pointer group">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 rounded border-2 border-gray-300 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer"
      />
      <span
        className={`flex-grow text-gray-700 ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>
    </label>
  );
}
