import React from 'react';
import { User } from 'lucide-react';

interface ProfileHeaderProps {
  debtorCode: string;
}

const ProfileHeader = ({ debtorCode }: ProfileHeaderProps) => (
  <div className="bg-gradient-to-r from-[#2173FF] to-[#123456] p-6">
    <div className="flex items-center space-x-4">
      <div className="bg-[#EFF9EF] p-3 rounded-full">
        <User className="w-8 h-8 text-[#2173FF]" />
      </div>
      <div className="text-[#EFF9EF]">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p className="text-[#EFF9EF]/80">Debtor ID: #{debtorCode}</p>
      </div>
    </div>
  </div>
);

export default ProfileHeader;