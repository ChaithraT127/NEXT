export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 border-4 border-[#ff8c00] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-lg">Loading Users table list...</span>
      </div>
    </div>
  );
}