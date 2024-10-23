import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchDebtorProps {
  onSearch: (code: string) => void;
}

const SearchDebtor = ({ onSearch }: SearchDebtorProps) => {
  const [debtorCode, setDebtorCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debtorCode.trim()) {
      onSearch(debtorCode);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2173FF] to-[#123456] flex items-center justify-center p-4">
      <div className="bg-[#EFF9EF] rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#2D2D2F] mb-2">Debtor Search</h1>
          <p className="text-[#2D2D2F]/70">Enter a debtor code to view their information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={debtorCode}
              onChange={(e) => setDebtorCode(e.target.value)}
              placeholder="Enter debtor code (e.g., 123456)"
              className="w-full px-4 py-3 rounded-lg border border-[#2D2D2F]/20 focus:ring-2 focus:ring-[#2173FF] focus:border-[#2173FF] transition-colors pl-11 bg-white"
            />
            <Search className="w-5 h-5 text-[#2D2D2F]/40 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2173FF] text-white py-3 px-4 rounded-lg hover:bg-[#123456] transition-colors font-medium"
          >
            Search Debtor
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#2D2D2F]/70">
          <p>Example debtor code: 123456</p>
        </div>
      </div>
    </div>
  );
};

export default SearchDebtor;