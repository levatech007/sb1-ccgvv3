import React, { useState } from 'react';
import SearchDebtor from './components/SearchDebtor';
import DebtorProfile from './components/DebtorProfile';

function App() {
  const [selectedDebtorCode, setSelectedDebtorCode] = useState<string | null>(null);

  const handleSearch = (code: string) => {
    setSelectedDebtorCode(code);
  };

  const handleBack = () => {
    setSelectedDebtorCode(null);
  };

  return selectedDebtorCode ? (
    <div>
      <button
        onClick={handleBack}
        className="fixed top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors text-gray-700 font-medium z-10"
      >
        ← Back to Search
      </button>
      <DebtorProfile debtorCode={selectedDebtorCode} />
    </div>
  ) : (
    <SearchDebtor onSearch={handleSearch} />
  );
}

export default App;