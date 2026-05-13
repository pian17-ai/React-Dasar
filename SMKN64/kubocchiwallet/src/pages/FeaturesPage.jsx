export default function FeaturesPage() {
  return (
    <section className="px-8 py-14">
      <div className="max-w-7xl mx-auto">
        <span className="bg-purple-500 text-white px-5 py-2 rounded-xl text-sm">
          Your Wallet
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-[#4b2c66] rounded-3xl p-6 text-white">
            <h2 className="text-2xl font-semibold mb-10">
              Multiple chains, one wallet. No more switching
            </h2>

            <div className="bg-black rounded-2xl p-5">
              <h3 className="text-3xl font-bold mb-2">$ 3,124.3</h3>

              <div className="flex gap-4 text-sm">
                <span className="text-green-400">$ 4,124.3</span>
                <span className="text-red-400">$ 1,325.3</span>
              </div>
            </div>
          </div>

          <div className="bg-[#4b2c66] rounded-3xl p-6 text-white">
            <h2 className="text-2xl font-semibold mb-10">
              Secure crypto transactions anytime
            </h2>

            <div className="bg-black rounded-2xl p-5">
              <h3 className="text-3xl font-bold mb-2">$ 8,421.9</h3>

              <div className="flex gap-4 text-sm">
                <span className="text-green-400">$ 2,412.8</span>
                <span className="text-red-400">$ 921.5</span>
              </div>
            </div>
          </div>

          <div className="bg-[#4b2c66] rounded-3xl p-6 text-white">
            <h2 className="text-2xl font-semibold mb-10">
              Fast and simple digital payments
            </h2>

            <div className="bg-black rounded-2xl p-5">
              <h3 className="text-3xl font-bold mb-2">$ 1,784.2</h3>

              <div className="flex gap-4 text-sm">
                <span className="text-green-400">$ 824.1</span>
                <span className="text-red-400">$ 211.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
