import { BellIcon } from "@heroicons/react/20/solid";

export default function ButtonNotification() {
  return (
    <button
    type="button"
    className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    <span className="sr-only">View notifications</span>
    <BellIcon className="h-6 w-6" aria-hidden="true" />
  </button>
  );
}