export default function QuoteCard({
  quote,
  author,
}: {
  quote: string;
  author: string;
}) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <p className="text-lg italic text-gray-700">“{quote}”</p>
      <div className="mt-4 text-right">
        <span className="text-sm text-gray-500">— {author}</span>
      </div>
    </div>
  );
}
