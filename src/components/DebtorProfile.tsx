import React from 'react';
import { User, Phone, Car, Home, LineChart, Mail, MapPin } from 'lucide-react';
import ProfileHeader from './ProfileHeader';
import TabNavigation from './TabNavigation';
import AssetCard from './AssetCard';

interface DebtorProfileProps {
  debtorCode: string;
}

const DebtorProfile = ({ debtorCode }: DebtorProfileProps) => {
  const [activeTab, setActiveTab] = React.useState('personal');
  
  const contacts = [
    { type: 'Phone', value: '(555) 123-4567' },
    { type: 'Email', value: 'john.doe@email.com' },
    { type: 'Address', value: '123 Main St, City, State 12345' },
  ];

  const assets = {
    vehicles: [
      { id: '1', title: 'Tesla Model S', details: 'Year: 2022, Color: Black', value: '$89,990' },
      { id: '2', title: 'BMW X5', details: 'Year: 2021, Color: White', value: '$62,500' },
    ],
    realEstate: [
      { id: '1', title: 'Primary Residence', details: '4 bed, 3 bath, 2,500 sqft', value: '$750,000' },
      { id: '2', title: 'Vacation Home', details: '2 bed, 2 bath, Beach Property', value: '$450,000' },
    ],
    investments: [
      { id: '1', title: 'Stock Portfolio', details: 'Tech-heavy NASDAQ stocks', value: '$245,000' },
      { id: '2', title: '401(k)', details: 'Retirement Account', value: '$380,000' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#EFF9EF]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <ProfileHeader debtorCode={debtorCode} />
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="p-6">
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#EFF9EF] p-4 rounded-lg">
                    <h3 className="font-medium text-[#2D2D2F] mb-2">Basic Information</h3>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="text-[#2D2D2F]/60">Date of Birth:</span> January 15, 1980</p>
                      <p className="text-sm"><span className="text-[#2D2D2F]/60">SSN:</span> XXX-XX-1234</p>
                      <p className="text-sm"><span className="text-[#2D2D2F]/60">Nationality:</span> American</p>
                    </div>
                  </div>
                  <div className="bg-[#EFF9EF] p-4 rounded-lg">
                    <h3 className="font-medium text-[#2D2D2F] mb-2">Employment</h3>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="text-[#2D2D2F]/60">Employer:</span> Tech Corp Inc.</p>
                      <p className="text-sm"><span className="text-[#2D2D2F]/60">Position:</span> Senior Developer</p>
                      <p className="text-sm"><span className="text-[#2D2D2F]/60">Annual Income:</span> $120,000</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center p-4 bg-[#EFF9EF] rounded-lg">
                    {contact.type === 'Phone' && <Phone className="w-5 h-5 text-[#2173FF] mr-3" />}
                    {contact.type === 'Email' && <Mail className="w-5 h-5 text-[#2173FF] mr-3" />}
                    {contact.type === 'Address' && <MapPin className="w-5 h-5 text-[#2173FF] mr-3" />}
                    <div>
                      <p className="text-sm font-medium text-[#2D2D2F]">{contact.type}</p>
                      <p className="text-sm text-[#2D2D2F]/60">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'vehicles' && (
              <div className="space-y-4">
                {assets.vehicles.map((vehicle) => (
                  <AssetCard key={vehicle.id} asset={vehicle} />
                ))}
              </div>
            )}

            {activeTab === 'realEstate' && (
              <div className="space-y-4">
                {assets.realEstate.map((property) => (
                  <AssetCard key={property.id} asset={property} />
                ))}
              </div>
            )}

            {activeTab === 'investments' && (
              <div className="space-y-4">
                {assets.investments.map((investment) => (
                  <AssetCard key={investment.id} asset={investment} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtorProfile;