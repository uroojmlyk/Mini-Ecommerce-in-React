function App() {
  const urooj = [
    { name: "Urooj", worth: 25, work: "developer" },
    { name: "Ali", worth: 50, work: "developer" },
    { name: "Rida", worth: 100, work: "developer" },
    { name: "Zainab", worth: 300, work: "developer" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Forbes List
      </h1>

      {urooj.map((item, index) => (
        <div key={index} className="border p-4 mb-3">
          <p>Name: {item.name}</p>
          <p>Worth: {item.worth} Billion</p>
          <p>Work: {item.work}</p>

          {/* CONDITIONAL RENDER */}
          {item.worth >= 100 && (
            <p className="text-green-600 font-semibold">
              Top Billionaire
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
