export function ReadingFeed() {
  // sementara hardcoded data
  const posts = [
    {
      id: 1,
      title: 'Dari Disrupsi Bisnis Sampai Dilema Program Hamil: 4 Buletin Minggu Ini',
      image: '/images/post1.png',
      date: 'May 15, 2025',
      publisher: 'Buletin.co',
    },
    {
      id: 2,
      title: 'Dari Tas Mewah Palsu ke QRIS Nasional: 12 Buletin Minggu Ini',
      image: '/images/post2.png',
      date: 'May 08, 2025',
      publisher: 'Buletin.co',
    },
  ];

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-black">Good to see you, Fulan!</h1>
      <p className="text-muted-foreground">Stay updated with the latest posts from your favorite bulletins.</p>

      {posts.map((post) => (
        <div key={post.id} className="flex items-start justify-between border-b pb-4">
          <div>
            <div className="text-sm font-semibold text-muted-foreground">{post.publisher}</div>
            <h2 className="text-lg font-bold mt-1">{post.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
          </div>
          <img src={post.image} alt={post.title} className="w-32 h-24 object-cover rounded-md ml-4" />
        </div>
      ))}
    </div>
  );
}