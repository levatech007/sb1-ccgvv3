import React from 'react';

interface Asset {
  id: string;
  title: string;
  details: string;
  value: string;
}

interface AssetCardProps {
  asset: Asset;
}

const AssetCard = ({ asset }: AssetCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-[#EFF9EF] hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-medium text-[#2D2D2F]">{asset.title}</h3>
        <p className="text-sm text-[#2D2D2F]/60">{asset.details}</p>
      </div>
      <span className="text-[#29E132] font-semibold">{asset.value}</span>
    </div>
  </div>
);

export default AssetCard;