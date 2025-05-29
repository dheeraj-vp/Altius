import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown, TrendingUp, Building2, FileText, PieChart, DollarSign, Users, Calendar, MessageCircle, ChevronRight, Search, Menu, X } from 'lucide-react';


// Reusable Table Component
const FinancialTable = ({ title, data, years, className = "" }) => (
  <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
    <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 sticky left-0 bg-gray-100">Particulars</th>
            {years.map(year => (
              <th key={year} className="px-4 py-3 text-right text-sm font-medium text-gray-700 min-w-[100px]">
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className={row.isHighlight ? 'bg-blue-50' : ''}>
              <td className="px-4 py-3 text-sm font-medium text-gray-800 sticky left-0 bg-white">
                {row.label}
              </td>
              {row.values.map((value, idx) => (
                <td key={idx} className={`px-4 py-3 text-sm text-right ${row.isHighlight ? 'font-semibold text-blue-800' : 'text-gray-700'}`}>
                  {value !== null && value !== undefined ? 
                    (typeof value === 'number' ? 
                      (value < 0 ? `(${Math.abs(value).toFixed(2)})` : value.toFixed(2)) : 
                      value
                    ) : '-'
                  }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Reusable Section Header Component
const SectionHeader = ({ title, subtitle, gradient }) => (
  <div className={`bg-gradient-to-r ${gradient} rounded-xl p-6 mb-6`}>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </div>
);

// Reusable Metric Card Component
const MetricCard = ({ title, value, change, isPercentage = false }) => (
  <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
    <h5 className="text-sm font-medium text-gray-600 mb-1">{title}</h5>
    <p className="text-xl font-bold text-gray-800">{value}</p>
    {change && (
      <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change > 0 ? '↗' : '↘'} {Math.abs(change)}{isPercentage ? '%' : ''}
      </p>
    )}
  </div>
);
// Mock data for companies
const companiesData = {
  "mohan-meakin": {
    id: "mohan-meakin",
    name: "Mohan Meakin Ltd",
    symbol: "MOHANMEA",
    price: 45.75,
    change: 2.35,
    changePercent: 5.42,
    overview: {
      marketCap: "₹1,234 Cr",
      peRatio: 15.6,
      bookValue: 32.4,
      dividendYield: "2.1%",
      sector: "Consumer Goods",
      industry: "Beverages"
    },
    insights: [
      "Strong quarterly performance with 15% revenue growth",
      "Expanding market presence in premium segment",
      "Debt-to-equity ratio improved by 0.3 points"
    ]
  },
  "nse": {
    id: "nse",
    name: "National Stock Exchange Ltd",
    symbol: "NSE",
    price: 2150.80,
    change: -15.25,
    changePercent: -0.70,
    overview: {
      marketCap: "₹1,08,000 Cr",
      peRatio: 28.5,
      bookValue: 245.6,
      dividendYield: "1.8%",
      sector: "Financial Services",
      industry: "Stock Exchange"
    },
    insights: [
      "Record trading volumes in equity segment",
      "Technology infrastructure upgrades completed",
      "New derivative products launched successfully"
    ]
  },
  "sample-corp": {
    id: "sample-corp",
    name: "Sample Corporation Ltd",
    symbol: "SAMPLE",
    price: 156.40,
    change: 8.90,
    changePercent: 6.03,
    overview: {
      marketCap: "₹5,678 Cr",
      peRatio: 22.3,
      bookValue: 89.2,
      dividendYield: "3.2%",
      sector: "Technology",
      industry: "Software Services"
    },
    insights: [
      "AI and ML capabilities driving new client acquisitions",
      "International expansion showing promising results",
      "Strong cash flow generation with minimal debt"
    ]
  }
};



const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
const [activeBalanceSheetTab, setActiveBalanceSheetTab] = useState("overview"); // or whatever default tab you want

  const tabs = [
    { id: 'price', label: 'Price', icon: DollarSign },
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'insights', label: 'Insights', icon: FileText },
    { id: 'balance-sheet', label: 'Balance Sheet', icon: PieChart },
    { id: 'profit-loss', label: 'Profit & Loss', icon: TrendingUp },
    { id: 'shareholdings', label: 'Shareholdings', icon: Users },
    { id: 'ancillary', label: 'Ancillary', icon: Building2 },
    { id: 'press', label: 'Press', icon: FileText },
    { id: 'annual-report', label: 'Annual Report', icon: Calendar },
    { id: 'company-info', label: 'Company Info', icon: Building2 }
  ];

  const companies = Object.values(companiesData);

  const formatPrice = (price) => `₹${price.toFixed(2)}`;
  const formatChange = (change, changePercent) => {
    const isPositive = change >= 0;
    return (
      <span className={`flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
        {Math.abs(change).toFixed(2)} ({Math.abs(changePercent).toFixed(2)}%)
      </span>
    );
  };

  const CompanyCard = ({ company, onClick }) => (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
      onClick={() => onClick(company)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{company.name}</h3>
            <p className="text-sm text-gray-500">{company.symbol}</p>
          </div>
          <ChevronRight className="text-gray-400" size={20} />
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{formatPrice(company.price)}</p>
            {formatChange(company.change, company.changePercent)}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Market Cap</p>
            <p className="font-semibold text-gray-700">{company.overview.marketCap}</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Sector:</span>
            <span className="font-medium text-gray-700">{company.overview.sector}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    if (!selectedCompany) return null;

switch (activeTab) {
  case 'price':
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Price Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Price:</span>
                <span className="font-bold text-xl">{formatPrice(selectedCompany.price)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Day Change:</span>
                {formatChange(selectedCompany.change, selectedCompany.changePercent)}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Market Cap:</span>
                <span className="font-semibold">₹1,871.01 Cr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Industry PE:</span>
                <span className="font-semibold">70</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">Data as per 2023-24</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">P/E</p>
                <p className="font-bold text-lg">21.99</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">P/S</p>
                <p className="font-bold text-lg">0.97</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">P/B</p>
                <p className="font-bold text-lg">5.11</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">Dividend (/sh)</p>
                <p className="font-bold text-lg">₹1.00</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">Dividend Yield</p>
                <p className="font-bold text-lg">0.05%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">Face Value</p>
                <p className="font-bold text-lg">₹5.00</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">EPS</p>
                <p className="font-bold text-lg">₹100.00</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">PAT</p>
                <p className="font-bold text-lg">₹86.00 Cr</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">Share capital</p>
                <p className="font-bold text-lg">₹4.25 Cr</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-500 text-sm">Sales</p>
                <p className="font-bold text-lg">₹1,929.92 Cr</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">*Data is as per last available financials, corporate actions in the interim period might not be reflected here.</p>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4">Corporate Actions</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Financial Year</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Particulars</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Record Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Ratio/Rates/Amount</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm">2023-24</td>
                    <td className="px-4 py-3 text-sm">DIVIDEND</td>
                    <td className="px-4 py-3 text-sm">25-Sep-2024</td>
                    <td className="px-4 py-3 text-sm">1</td>
                    <td className="px-4 py-3 text-sm">Mohan Meakin Declared a Final Dividend of Rs 1/ Share( Record Date is Tentative)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm">2022-23</td>
                    <td className="px-4 py-3 text-sm">DIVIDEND</td>
                    <td className="px-4 py-3 text-sm">25-Sep-2023</td>
                    <td className="px-4 py-3 text-sm">1</td>
                    <td className="px-4 py-3 text-sm">Mohan Meakin Declared a Final Dividend of Rs 1/ Share</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">About the company</h4>
            <p className="text-gray-700">
              Mohan Meakin Limited (MML), as per its credit rating report, is engaged in the business of marketing its products under names such as 'Old Monk' in the rum segment and 'Meakin 10000', 'Asia 72', and 'Golden Eagle' in the beer segment. MML has two processing facilities for processing beer, spirit, and food products (largely grain flakes) at Mohan Nagar in UP and Kasauli/Solan in Himachal Pradesh. It also has bottling plants at Mohangram in Punjab and Solan. The company was incorporated in 1934 and has its registered office located in Himachal Pradesh.
            </p>
          </div>
        </div>
      </div>
    );
      
case 'overview':
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Overview</h3>
        
        {/* Company Description */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <p className="text-gray-700">
            Mohan Meakin Ltd, incorporated in 1934, boasts a rich brewing heritage from 1855 (founded as Dyer Breweries). 
            It's one of India's oldest and most renowned breweries. Originally named after founder Edward Dyer, it was renamed 
            to honor the Mohan brothers who took over. The company has diversified beyond brewing, encompassing distilling, 
            bottling, and other industries.
          </p>
          <p className="text-gray-700 mt-4">
            Popular brands include Old Monk Rum (iconic status), Golden Eagle Beer, and Solan No. 1 Whisky. Rich history 
            in alcoholic beverages, known for iconic brands like Old Monk Rum. Diversified into non-alcoholic beverages 
            (Mohan Meakin Fruit Power, Solan water) and food products (Charms breakfast cereals).
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-4">Timeline</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm font-medium mr-3">1855</span>
              <span>Founded as Dyer's Brewery, the first brewery in Asia.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm font-medium mr-3">1934</span>
              <span>Incorporated as Mohan Meakin Ltd. taking over the business of Dyer Meakin & Co. Ltd.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm font-medium mr-3">1966</span>
              <span>Renamed Mohan Meakin Breweries Ltd.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm font-medium mr-3">1980</span>
              <span>Became Mohan Meakin Ltd and listed on the Calcutta Stock Exchange.</span>
            </li>
          </ul>
        </div>

        {/* Management */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-4">Management</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-emerald-500 pl-4">
              <h5 className="font-medium text-gray-800">Hemant Mohan (Managing Director)</h5>
              <p className="text-sm text-gray-600">
                Holds a Bachelor's in Business Administration and a degree in International Business (London). 
                He has a vast experience in Brewing and Distillation Industry.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4">
              <h5 className="font-medium text-gray-800">Mr. Vinay Mohan (Non-Executive Non-Independent Director)</h5>
              <p className="text-sm text-gray-600">
                He is a graduate, specializing in Marketing.
              </p>
            </div>
            <div className="border-l-4 border-emerald-500 pl-4">
              <h5 className="font-medium text-gray-800">Mr. Masilamani Nandagopal (Independent Director)</h5>
              <p className="text-sm text-gray-600">
                Did B.Sc. (Agri) and has vast experience managing industries viz—Brewery, Distillery, Sugar, Power, Real Estate, etc.
              </p>
            </div>
          </div>
        </div>

        {/* Product Portfolio */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold mb-4">Product Portfolio</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-800 mb-2">Whisky</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Solan No. 1</li>
                <li>Black Knight</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-800 mb-2">Rum</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Old Monk White</li>
                <li>Gold</li>
                <li>Orange</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-800 mb-2">Brandy</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Triple Crown</li>
                <li>Doctor's Reserve No. 1</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-medium text-gray-800 mb-2">Beer</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Golden Beer</li>
                <li>Lion Beer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
      
case 'insights':
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Insights</h3>
        
        {/* Revenue Segmentation */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-4">Revenue Segmentation</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium text-gray-800 mb-3">Product Line</h5>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Old Monk Rum</span>
                  <span className="font-bold">80%</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">Beer (Golden Eagle, Lion, Black Knight)</span>
                  <span className="font-bold">8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Other Products</span>
                  <span className="font-bold">12%</span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full flex items-center justify-center">
                {/* Placeholder for pie chart visualization */}
                <div className="w-40 h-40 rounded-full border-8 border-blue-500 relative">
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-300 rounded-tr-full"></div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-300 rounded-br-full"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-300 rounded-bl-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financials */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-4">Financials (₹ in Crores)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Particulars</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">FY 24</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">FY 23</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">FY 22</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Revenue</td>
                  <td className="px-4 py-3 text-sm">1942</td>
                  <td className="px-4 py-3 text-sm">1781</td>
                  <td className="px-4 py-3 text-sm">1379</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">EBITDA</td>
                  <td className="px-4 py-3 text-sm">111</td>
                  <td className="px-4 py-3 text-sm">88</td>
                  <td className="px-4 py-3 text-sm">68</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">PBT</td>
                  <td className="px-4 py-3 text-sm">114</td>
                  <td className="px-4 py-3 text-sm">91</td>
                  <td className="px-4 py-3 text-sm">69</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">PAT</td>
                  <td className="px-4 py-3 text-sm">85</td>
                  <td className="px-4 py-3 text-sm">68</td>
                  <td className="px-4 py-3 text-sm">51</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">EPS</td>
                  <td className="px-4 py-3 text-sm">100</td>
                  <td className="px-4 py-3 text-sm">80</td>
                  <td className="px-4 py-3 text-sm">61</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-700">Revenue has increased 9% in FY 24 from FY 23 & 40% from FY 22.</p>
            <p className="text-sm text-gray-700">PAT has increased 25% in FY 24 from FY 23 & 67% from FY 22.</p>
            <p className="text-sm text-gray-700">5-year Revenue CAGR: 22%</p>
            <p className="text-sm text-gray-700">5-year PAT CAGR: 35%</p>
          </div>
        </div>

        {/* Quarterly Financials */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-4">Key Financial Highlights (Q3 - FY24)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Particulars</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Q3 FY24</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Q3 FY23</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">9M FY24</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">9M FY23</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Revenue from Operations</td>
                  <td className="px-4 py-3 text-sm">₹820.40</td>
                  <td className="px-4 py-3 text-sm">₹674.18</td>
                  <td className="px-4 py-3 text-sm">₹1,540.07</td>
                  <td className="px-4 py-3 text-sm">₹1,330.87</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Total Income</td>
                  <td className="px-4 py-3 text-sm">₹823.92</td>
                  <td className="px-4 py-3 text-sm">₹676.79</td>
                  <td className="px-4 py-3 text-sm">₹1,549.14</td>
                  <td className="px-4 py-3 text-sm">₹1,338.13</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Profit Before Tax (PBT)</td>
                  <td className="px-4 py-3 text-sm">₹54.86</td>
                  <td className="px-4 py-3 text-sm">₹24.52</td>
                  <td className="px-4 py-3 text-sm">₹71.41</td>
                  <td className="px-4 py-3 text-sm">₹55.73</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Net Profit</td>
                  <td className="px-4 py-3 text-sm">₹40.91</td>
                  <td className="px-4 py-3 text-sm">₹31.76</td>
                  <td className="px-4 py-3 text-sm">₹69.58</td>
                  <td className="px-4 py-3 text-sm">₹55.00</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Earnings Per Share (EPS)</td>
                  <td className="px-4 py-3 text-sm">₹48.09</td>
                  <td className="px-4 py-3 text-sm">₹37.33</td>
                  <td className="px-4 py-3 text-sm">₹81.78</td>
                  <td className="px-4 py-3 text-sm">₹64.65</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Expense Overview */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-4">Expense Overview (Q3 FY24)</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Excise Duty:</span>
              <span className="font-medium">₹296.49 crore (reflecting higher sales volumes)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Purchases of Stock-in-Trade:</span>
              <span className="font-medium">₹314.01 crore (up from ₹263.69 crore in previous quarter)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Employee Benefits Expense:</span>
              <span className="font-medium">₹13.34 crore (maintaining stability)</span>
            </div>
          </div>
        </div>

        {/* Industry Overview */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-4">Industry Overview</h4>
          <div className="space-y-4">
            <p className="text-gray-700">
              Mohan Meakin is a well-established brand in India, focusing on strengthening their domestic market position and leveraging growth opportunities within India.
            </p>
            <ul className="space-y-3 list-disc pl-5">
              <li>Mohan Meakin Limited had a 3.3% market share in the beer sector in India in 2020</li>
              <li>The company also has a 3.5% market share in the alcoholic beverage industry</li>
              <li>The Indian alcoholic beverage industry is expected to see continued growth, driven by increasing disposable income and urbanization</li>
              <li>Expected industry CAGR of around 5-7%</li>
              <li>The Indian beer market is expected to almost double to $10 Billion in a decade (CAGR: 8.76%)</li>
              <li>Indian beer market: ₹41,470 Crs. in 2023 | Forecasted growth: ₹78,120 Crs. (Growth rate: 7.1%)</li>
            </ul>
          </div>
        </div>

        {/* Peer Comparison */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold mb-4">Peer Comparison (₹ in Crores)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Particulars</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Mohan Meakin Ltd</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Tilaknagar Industries</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Som Distilleries</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Radico Khaitan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Revenue</td>
                  <td className="px-4 py-3 text-sm">1942</td>
                  <td className="px-4 py-3 text-sm">2972</td>
                  <td className="px-4 py-3 text-sm">1286</td>
                  <td className="px-4 py-3 text-sm">15493</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">PAT</td>
                  <td className="px-4 py-3 text-sm">85</td>
                  <td className="px-4 py-3 text-sm">138</td>
                  <td className="px-4 py-3 text-sm">85</td>
                  <td className="px-4 py-3 text-sm">256</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">CMP (₹)</td>
                  <td className="px-4 py-3 text-sm">1966</td>
                  <td className="px-4 py-3 text-sm">210.50</td>
                  <td className="px-4 py-3 text-sm">105</td>
                  <td className="px-4 py-3 text-sm">1728</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">MCAP</td>
                  <td className="px-4 py-3 text-sm">1672.77</td>
                  <td className="px-4 py-3 text-sm">4056.97</td>
                  <td className="px-4 py-3 text-sm">2049.33</td>
                  <td className="px-4 py-3 text-sm">23103.36</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">P/E</td>
                  <td className="px-4 py-3 text-sm">19.75</td>
                  <td className="px-4 py-3 text-sm">29.5</td>
                  <td className="px-4 py-3 text-sm">9.4</td>
                  <td className="px-4 py-3 text-sm">90.33</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">P/S</td>
                  <td className="px-4 py-3 text-sm">0.95</td>
                  <td className="px-4 py-3 text-sm">1.36</td>
                  <td className="px-4 py-3 text-sm">1.6</td>
                  <td className="px-4 py-3 text-sm">1.5</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">EBITDA</td>
                  <td className="px-4 py-3 text-sm">111</td>
                  <td className="px-4 py-3 text-sm">197</td>
                  <td className="px-4 py-3 text-sm">155</td>
                  <td className="px-4 py-3 text-sm">515</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

case 'balance-sheet':
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Balance Sheet</h3>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${activeBalanceSheetTab === 'standalone' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveBalanceSheetTab('standalone')}
          >
            Standalone
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${activeBalanceSheetTab === 'consolidated' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveBalanceSheetTab('consolidated')}
          >
            Consolidated
          </button>
        </div>

        {/* Tab Content */}
        {activeBalanceSheetTab === 'standalone' ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Particulars</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY24</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY23</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY22</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY21</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY20</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY19</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY18</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY17</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY16</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY15</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Equity</td>
                  <td className="px-4 py-3 text-sm">366.32</td>
                  <td className="px-4 py-3 text-sm">280.22</td>
                  <td className="px-4 py-3 text-sm">211.10</td>
                  <td className="px-4 py-3 text-sm">158.39</td>
                  <td className="px-4 py-3 text-sm">117.82</td>
                  <td className="px-4 py-3 text-sm">92.16</td>
                  <td className="px-4 py-3 text-sm">56.92</td>
                  <td className="px-4 py-3 text-sm">41.02</td>
                  <td className="px-4 py-3 text-sm">26.47</td>
                  <td className="px-4 py-3 text-sm">22.73</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Liabilities</td>
                  <td className="px-4 py-3 text-sm">168.41</td>
                  <td className="px-4 py-3 text-sm">154.06</td>
                  <td className="px-4 py-3 text-sm">137.58</td>
                  <td className="px-4 py-3 text-sm">131.60</td>
                  <td className="px-4 py-3 text-sm">137.12</td>
                  <td className="px-4 py-3 text-sm">137.95</td>
                  <td className="px-4 py-3 text-sm">147.67</td>
                  <td className="px-4 py-3 text-sm">157.19</td>
                  <td className="px-4 py-3 text-sm">169.98</td>
                  <td className="px-4 py-3 text-sm">170.08</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">NCL</td>
                  <td className="px-4 py-3 text-sm">15.77</td>
                  <td className="px-4 py-3 text-sm">16.44</td>
                  <td className="px-4 py-3 text-sm">16.03</td>
                  <td className="px-4 py-3 text-sm">16.05</td>
                  <td className="px-4 py-3 text-sm">20.03</td>
                  <td className="px-4 py-3 text-sm">21.73</td>
                  <td className="px-4 py-3 text-sm">19.31</td>
                  <td className="px-4 py-3 text-sm">17.26</td>
                  <td className="px-4 py-3 text-sm">21.25</td>
                  <td className="px-4 py-3 text-sm">17.83</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">CL</td>
                  <td className="px-4 py-3 text-sm">152.64</td>
                  <td className="px-4 py-3 text-sm">137.62</td>
                  <td className="px-4 py-3 text-sm">121.55</td>
                  <td className="px-4 py-3 text-sm">115.55</td>
                  <td className="px-4 py-3 text-sm">117.09</td>
                  <td className="px-4 py-3 text-sm">116.22</td>
                  <td className="px-4 py-3 text-sm">128.36</td>
                  <td className="px-4 py-3 text-sm">139.93</td>
                  <td className="px-4 py-3 text-sm">148.73</td>
                  <td className="px-4 py-3 text-sm">152.25</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Total Equity and Liability</td>
                  <td className="px-4 py-3 text-sm">534.74</td>
                  <td className="px-4 py-3 text-sm">434.27</td>
                  <td className="px-4 py-3 text-sm">348.68</td>
                  <td className="px-4 py-3 text-sm">289.99</td>
                  <td className="px-4 py-3 text-sm">254.94</td>
                  <td className="px-4 py-3 text-sm">230.11</td>
                  <td className="px-4 py-3 text-sm">204.59</td>
                  <td className="px-4 py-3 text-sm">198.22</td>
                  <td className="px-4 py-3 text-sm">196.45</td>
                  <td className="px-4 py-3 text-sm">192.82</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Net Fixed Assets</td>
                  <td className="px-4 py-3 text-sm">84.71</td>
                  <td className="px-4 py-3 text-sm">71.78</td>
                  <td className="px-4 py-3 text-sm">61.37</td>
                  <td className="px-4 py-3 text-sm">58.57</td>
                  <td className="px-4 py-3 text-sm">52.54</td>
                  <td className="px-4 py-3 text-sm">46.51</td>
                  <td className="px-4 py-3 text-sm">30.14</td>
                  <td className="px-4 py-3 text-sm">29.13</td>
                  <td className="px-4 py-3 text-sm">31.80</td>
                  <td className="px-4 py-3 text-sm">29.67</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Capital WIP</td>
                  <td className="px-4 py-3 text-sm">12.12</td>
                  <td className="px-4 py-3 text-sm">10.16</td>
                  <td className="px-4 py-3 text-sm">8.03</td>
                  <td className="px-4 py-3 text-sm">7.30</td>
                  <td className="px-4 py-3 text-sm">8.97</td>
                  <td className="px-4 py-3 text-sm">8.28</td>
                  <td className="px-4 py-3 text-sm">6.48</td>
                  <td className="px-4 py-3 text-sm">7.17</td>
                  <td className="px-4 py-3 text-sm">5.93</td>
                  <td className="px-4 py-3 text-sm">6.22</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Other NCA</td>
                  <td className="px-4 py-3 text-sm">104.65</td>
                  <td className="px-4 py-3 text-sm">28.02</td>
                  <td className="px-4 py-3 text-sm">25.29</td>
                  <td className="px-4 py-3 text-sm">20.35</td>
                  <td className="px-4 py-3 text-sm">21.14</td>
                  <td className="px-4 py-3 text-sm">27.37</td>
                  <td className="px-4 py-3 text-sm">32.54</td>
                  <td className="px-4 py-3 text-sm">37.04</td>
                  <td className="px-4 py-3 text-sm">23.58</td>
                  <td className="px-4 py-3 text-sm">20.61</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">CA</td>
                  <td className="px-4 py-3 text-sm">333.26</td>
                  <td className="px-4 py-3 text-sm">324.31</td>
                  <td className="px-4 py-3 text-sm">254.00</td>
                  <td className="px-4 py-3 text-sm">203.76</td>
                  <td className="px-4 py-3 text-sm">172.29</td>
                  <td className="px-4 py-3 text-sm">147.95</td>
                  <td className="px-4 py-3 text-sm">135.43</td>
                  <td className="px-4 py-3 text-sm">124.88</td>
                  <td className="px-4 py-3 text-sm">135.14</td>
                  <td className="px-4 py-3 text-sm">136.32</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Total Assets</td>
                  <td className="px-4 py-3 text-sm">534.74</td>
                  <td className="px-4 py-3 text-sm">434.27</td>
                  <td className="px-4 py-3 text-sm">348.68</td>
                  <td className="px-4 py-3 text-sm">289.99</td>
                  <td className="px-4 py-3 text-sm">254.94</td>
                  <td className="px-4 py-3 text-sm">230.11</td>
                  <td className="px-4 py-3 text-sm">204.59</td>
                  <td className="px-4 py-3 text-sm">198.22</td>
                  <td className="px-4 py-3 text-sm">196.45</td>
                  <td className="px-4 py-3 text-sm">192.82</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Particulars</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY20</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY19</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY18</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY17</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">FY16</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Equity</td>
                  <td className="px-4 py-3 text-sm">117.82</td>
                  <td className="px-4 py-3 text-sm">92.17</td>
                  <td className="px-4 py-3 text-sm">58.73</td>
                  <td className="px-4 py-3 text-sm">43.05</td>
                  <td className="px-4 py-3 text-sm">28.65</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Liabilities</td>
                  <td className="px-4 py-3 text-sm">137.12</td>
                  <td className="px-4 py-3 text-sm">137.95</td>
                  <td className="px-4 py-3 text-sm">147.67</td>
                  <td className="px-4 py-3 text-sm">157.19</td>
                  <td className="px-4 py-3 text-sm">169.98</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Total Equity and Liability</td>
                  <td className="px-4 py-3 text-sm">254.94</td>
                  <td className="px-4 py-3 text-sm">230.12</td>
                  <td className="px-4 py-3 text-sm">206.40</td>
                  <td className="px-4 py-3 text-sm">200.25</td>
                  <td className="px-4 py-3 text-sm">198.63</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Net Fixed Assets</td>
                  <td className="px-4 py-3 text-sm">52.54</td>
                  <td className="px-4 py-3 text-sm">46.51</td>
                  <td className="px-4 py-3 text-sm">30.14</td>
                  <td className="px-4 py-3 text-sm">29.13</td>
                  <td className="px-4 py-3 text-sm">31.80</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Capital WIP</td>
                  <td className="px-4 py-3 text-sm">8.97</td>
                  <td className="px-4 py-3 text-sm">8.28</td>
                  <td className="px-4 py-3 text-sm">6.48</td>
                  <td className="px-4 py-3 text-sm">7.17</td>
                  <td className="px-4 py-3 text-sm">5.93</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Other NCA</td>
                  <td className="px-4 py-3 text-sm">21.14</td>
                  <td className="px-4 py-3 text-sm">27.38</td>
                  <td className="px-4 py-3 text-sm">34.35</td>
                  <td className="px-4 py-3 text-sm">39.07</td>
                  <td className="px-4 py-3 text-sm">25.76</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">CA</td>
                  <td className="px-4 py-3 text-sm">172.29</td>
                  <td className="px-4 py-3 text-sm">147.95</td>
                  <td className="px-4 py-3 text-sm">135.43</td>
                  <td className="px-4 py-3 text-sm">124.88</td>
                  <td className="px-4 py-3 text-sm">135.14</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">Total Assets</td>
                  <td className="px-4 py-3 text-sm">254.94</td>
                  <td className="px-4 py-3 text-sm">230.12</td>
                  <td className="px-4 py-3 text-sm">206.40</td>
                  <td className="px-4 py-3 text-sm">200.25</td>
                  <td className="px-4 py-3 text-sm">198.63</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
  
case 'profit-loss':
  const standaloneYears = ['FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15'];
  const consolidatedYears = ['FY20', 'FY19', 'FY18', 'FY17', 'FY16'];

  const standaloneData = [
    {
      label: 'Net Revenue',
      values: [1929.92, 1771.21, 1370.42, 1099.01, 1020.94, 947.94, 655.77, 580.97, 442.94, 409.51],
      isHighlight: true
    },
    {
      label: 'Total Operating Cost',
      values: [1818.67, 1681.95, 1302.80, 1042.60, 978.24, 897.26, 637.24, 566.70, 432.70, 404.01]
    },
    {
      label: 'EBITDA',
      values: [111.25, 89.26, 67.62, 56.41, 42.70, 50.68, 18.53, 14.28, 10.23, 5.50],
      isHighlight: true
    },
    {
      label: 'Other Income',
      values: [11.85, 7.37, 8.96, 2.86, 6.84, 6.19, 4.59, 4.50, 8.98, 6.13]
    },
    {
      label: 'Depreciation',
      values: [8.38, 6.88, 6.05, 5.22, 4.76, 3.85, 2.55, 2.86, 3.01, 3.95]
    },
    {
      label: 'PBIT',
      values: [114.73, 89.74, 70.53, 54.05, 44.78, 53.02, 20.58, 15.91, 16.20, 7.68]
    },
    {
      label: 'Finance Costs',
      values: [0.79, 0.96, 1.56, 2.91, 2.67, 2.97, 6.65, 9.15, 10.99, 11.22]
    },
    {
      label: 'Profit Before Tax & Exception',
      values: [113.94, 88.79, 68.98, 51.13, 42.10, 50.05, 13.92, 6.77, 5.21, -3.53]
    },
    {
      label: 'Exceptional Items',
      values: [0.00, 3.01, 0.00, 3.01, 0.00, 1.28, 8.15, 0.00, 0.00, 9.39]
    },
    {
      label: 'Profit (Continuing Ops)',
      values: [113.94, 91.80, 68.98, 54.15, 42.10, 51.32, 22.08, 6.77, 5.21, 5.86]
    },
    {
      label: 'Income Tax',
      values: [29.24, 23.40, 17.52, 13.84, 15.69, 16.38, 6.54, 1.98, 1.47, 2.10]
    },
    {
      label: 'PAT from Continuing Operations',
      values: [84.70, 68.40, 51.45, 40.31, 26.41, 34.94, 15.54, 4.79, 3.74, 3.76],
      isHighlight: true
    },
    {
      label: 'PAT',
      values: [84.70, 68.40, 51.45, 40.31, 26.41, 34.94, 15.54, 4.79, 3.74, 3.76],
      isHighlight: true
    }
  ];

  const consolidatedData = [
    {
      label: 'Net Revenue',
      values: [1020.94, 947.94, 655.77, 580.97, 442.94],
      isHighlight: true
    },
    {
      label: 'Total Operating Cost',
      values: [978.24, 897.26, 637.24, 566.70, 432.70]
    },
    {
      label: 'EBITDA',
      values: [42.70, 50.68, 18.53, 14.28, 10.23],
      isHighlight: true
    },
    {
      label: 'Other Income',
      values: [6.84, 6.19, 4.59, 4.50, 8.98]
    },
    {
      label: 'Depreciation',
      values: [4.76, 3.85, 2.55, 2.86, 3.01]
    },
    {
      label: 'PBIT',
      values: [44.77, 53.02, 20.58, 15.91, 16.20]
    },
    {
      label: 'Finance Costs',
      values: [2.67, 2.97, 6.65, 9.15, 10.99]
    },
    {
      label: 'Profit Before Tax & Exception',
      values: [42.10, 50.05, 13.92, 6.77, 5.21]
    },
    {
      label: 'Exceptional Items',
      values: [0.00, -0.32, 8.15, 0.00, 0.00]
    },
    {
      label: 'Profit (Continuing Ops)',
      values: [42.10, 49.72, 22.08, 6.77, 5.21]
    },
    {
      label: 'Income Tax',
      values: [15.69, 16.38, 6.54, 1.98, 1.47]
    },
    {
      label: 'PAT from Continuing Operations',
      values: [26.41, 33.34, 15.54, 4.79, 3.74]
    },
    {
      label: 'Minority Interest, JV, Associates',
      values: [0.00, -0.19, -0.21, -0.14, -0.18]
    },
    {
      label: 'PAT',
      values: [26.40, 33.15, 15.33, 4.64, 3.55],
      isHighlight: true
    }
  ];

  // Calculate key metrics
  const revenueGrowthFY24 = ((1929.92 - 1771.21) / 1771.21 * 100);
  const patGrowthFY24 = ((84.70 - 68.40) / 68.40 * 100);
  const ebitdaMarginFY24 = (111.25 / 1929.92 * 100);
  const patMarginFY24 = (84.70 / 1929.92 * 100);

  return (
    <div className="space-y-6">
      <SectionHeader 
        title="Profit & Loss Statement" 
        subtitle="Comprehensive financial performance analysis (₹ in Crores)"
        gradient="from-indigo-50 to-purple-50"
      />
      
      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard 
          title="Revenue Growth (FY24)"
          value={`${revenueGrowthFY24.toFixed(1)}%`}
          change={revenueGrowthFY24}
          isPercentage={true}
        />
        <MetricCard 
          title="PAT Growth (FY24)"
          value={`${patGrowthFY24.toFixed(1)}%`}
          change={patGrowthFY24}
          isPercentage={true}
        />
        <MetricCard 
          title="EBITDA Margin (FY24)"
          value={`${ebitdaMarginFY24.toFixed(1)}%`}
        />
        <MetricCard 
          title="PAT Margin (FY24)"
          value={`${patMarginFY24.toFixed(1)}%`}
        />
      </div>

      {/* Standalone Financial Statement */}
      <FinancialTable 
        title="Standalone Financial Statement (10 Years)"
        data={standaloneData}
        years={standaloneYears}
        className="mb-6"
      />

      {/* Consolidated Financial Statement */}
      <FinancialTable 
        title="Consolidated Financial Statement (5 Years)"
        data={consolidatedData}
        years={consolidatedYears}
        className="mb-6"
      />

      {/* Key Observations */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Financial Observations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-medium text-gray-800 mb-2">Growth Trends</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Revenue CAGR (FY15-FY24): <strong>18.7%</strong>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                PAT CAGR (FY15-FY24): <strong>39.4%</strong>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                EBITDA has grown from ₹5.50 Cr to ₹111.25 Cr
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-medium text-gray-800 mb-2">Profitability Metrics</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                EBITDA Margin improved from 1.3% to 5.8%
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                PAT Margin improved from 0.9% to 4.4%
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Finance costs reduced significantly over the years
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );    
      default:
        return (
          <div className="text-center py-12">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
              <FileText className="mx-auto mb-4 text-gray-400" size={48} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">{tabs.find(t => t.id === activeTab)?.label}</h3>
              <p className="text-gray-500">This section will be populated with data from JSON files.</p>
              <p className="text-sm text-gray-400 mt-2">Integration coming soon...</p>
            </div>
          </div>
        );
    }
  };

  if (selectedCompany) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedCompany(null)}
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  ← Back to Companies
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <h1 className="text-2xl font-bold text-gray-800">{selectedCompany.name}</h1>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{formatPrice(selectedCompany.price)}</p>
                  {formatChange(selectedCompany.change, selectedCompany.changePercent)}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-fade-in">
            {renderTabContent()}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-blue-600" size={32} />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                InvestTech Analytics
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle size={16} />
                Chat Assistant
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Smart <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Investment</span> Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive stock analysis and real-time market intelligence for informed investment decisions
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <p className="text-sm text-gray-500">Total Companies</p>
              <p className="text-2xl font-bold text-blue-600">{companies.length}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <p className="text-sm text-gray-500">Live Data</p>
              <p className="text-2xl font-bold text-green-600">Real-time</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <p className="text-sm text-gray-500">AI Insights</p>
              <p className="text-2xl font-bold text-purple-600">Advanced</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800">Featured Companies</h3>
          <p className="text-gray-600">{companies.length} companies available</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies
            .filter(company => 
              company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              company.symbol.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((company) => (
              <CompanyCard 
                key={company.id} 
                company={company} 
                onClick={setSelectedCompany}
              />
            ))}
        </div>

        {companies.filter(company => 
          company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          company.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0 && (
          <div className="text-center py-12">
            <Search className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-500">No companies found matching your search.</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">© 2025 InvestTech Analytics. Advanced stock analysis platform.</p>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X size={24} />
            </button>
            <div className="mt-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="w-full flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle size={16} />
                Chat Assistant
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default App;