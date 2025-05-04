export default function QuoteCard() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <p className="text-lg italic text-gray-700">
        “This is a placeholder quote that will eventually be replaced with
        something meaningful.”
      </p>
      <div className="mt-4 text-right">
        <span className="text-sm text-gray-500">— Placeholder Author</span>
      </div>
    </div>
  );
}
