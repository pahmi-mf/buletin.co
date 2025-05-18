export function ReadingView() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Good to see you, Test!</h2>
      <p className="text-gray-500 mt-1">Stay updated with the latest posts from your favorite bulletins.</p>

      <div className="flex items-center gap-2 mt-6">
        <button className="p-2 border rounded-md">
          <span className="text-lg">🔲</span>
        </button>
        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md font-medium">
          For You
        </button>
        <button className="p-2 border rounded-md ml-auto">
          🔍
        </button>
      </div>

      <div className="mt-6 space-y-6">
        {/* Card 1 */}
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <p className="text-sm text-gray-500">📰 Buletin.co</p>
            <h3 className="text-lg font-semibold leading-tight mt-1">
              Dari Disrupsi Bisnis Sampai Dilema Program Hamil: 4 Buletin Minggu Ini
            </h3>
            <p className="text-sm text-gray-500 mt-1">May 15, 2025 • Buletin</p>
          </div>
          <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=160&q=80" alt="chip" className="w-24 h-24 rounded-md object-cover" />
        </div>

        {/* Card 2 */}
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <p className="text-sm text-gray-500">📰 Buletin.co</p>
            <h3 className="text-lg font-semibold leading-tight mt-1">
              Dari Tas Mewah Palsu ke QRIS Nasional: 12 Buletin Minggu Ini
            </h3>
            <p className="text-sm text-gray-500 mt-1">May 8, 2025 • Buletin</p>
          </div>
          {/* <img src="/img/poster.jpg" alt="poster" className="w-24 h-24 rounded-md object-cover" /> */}
        </div>

        {/* Card 3 */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">📰 WeekendLabs Studio</p>
            <h3 className="text-lg font-semibold leading-tight mt-1">
              Bukan Soal AI-nya, Tapi Soal Masalah Siapa yang Kamu Selesaikan
            </h3>
            <p className="text-sm text-gray-500 mt-1">May 1, 2025 • Tech</p>
          </div>
          {/* <img src="/img/ai.jpg" alt="ai" className="w-24 h-24 rounded-md object-cover" /> */}
        </div>
      </div>
    </div>
  );
}