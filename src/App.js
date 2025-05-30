// App.js
import React, { useState } from 'react';
import { ArrowUp, ArrowDown, TrendingUp, Building2, FileText, PieChart, DollarSign, Users, Calendar, MessageCircle, ChevronRight, Search, Menu, X } from 'lucide-react';
import { companiesData } from './companiesData';

// Reusable Components
const SectionHeader = ({ title, subtitle, gradient }) => (
  <div className={`bg-gradient-to-r ${gradient} rounded-xl p-6 mb-6`}>
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </div>
);

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

const RatioCard = ({ title, data, years, unit = "", colorScheme = "blue", trend = null }) => {
  const getColorClasses = (scheme) => {
    const colors = {
      blue: { 
        bg: 'bg-blue-50', 
        border: 'border-blue-500', 
        text: 'text-blue-800', 
        header: 'bg-blue-100',
        accent: 'text-blue-600'
      },
      green: { 
        bg: 'bg-green-50', 
        border: 'border-green-500', 
        text: 'text-green-800', 
        header: 'bg-green-100',
        accent: 'text-green-600'
      },
      purple: { 
        bg: 'bg-purple-50', 
        border: 'border-purple-500', 
        text: 'text-purple-800', 
        header: 'bg-purple-100',
        accent: 'text-purple-600'
      },
      orange: { 
        bg: 'bg-orange-50', 
        border: 'border-orange-500', 
        text: 'text-orange-800', 
        header: 'bg-orange-100',
        accent: 'text-orange-600'
      },
      red: { 
        bg: 'bg-red-50', 
        border: 'border-red-500', 
        text: 'text-red-800', 
        header: 'bg-red-100',
        accent: 'text-red-600'
      }
    };
    return colors[scheme] || colors.blue;
  };

  const colors = getColorClasses(colorScheme);
  
  return (
    <div className={`${colors.bg} rounded-xl p-5 border-l-4 ${colors.border} shadow-sm`}>
      <div className="flex justify-between items-center mb-4">
        <h5 className={`font-semibold text-lg ${colors.text}`}>{title}</h5>
        {trend !== null && (
          <span className={`text-xs px-3 py-1 rounded-full ${colors.header} ${colors.text} font-medium`}>
            {trend > 0 ? '↗' : trend < 0 ? '↘' : '→'} 
            {trend !== 0 ? ` ${Math.abs(trend)}%` : ' Stable'}
          </span>
        )}
      </div>
      <div className="grid grid-cols-5 gap-3">
        {years.map((year, index) => {
          const containerHeight = 140; // px
          const barHeight = data[index] > 0
            ? Math.max((data[index] / Math.max(...data, 1)) * containerHeight, 8)
            : data[index] < 0
              ? 8
              : 0;
          
          return (
            <div key={year} className="text-center">
              <div className="text-xs text-gray-500 mb-2 font-medium">
                {year.toString().replace('31-Mar-', '\'').replace('20', '')}
              </div>
              <div className={`text-base font-semibold ${colors.accent} bg-white rounded-lg py-2 px-1 shadow-sm`}>
                {data[index] !== undefined ? data[index] : 'N/A'}{unit}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RatioChart = ({ title, ratios, years }) => {
    if (!ratios || !years || ratios.length === 0) {
      return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h4 className="text-xl font-semibold mb-6 text-gray-900">{title}</h4>
          <div className="text-center text-gray-500 py-8">No data available</div>
        </div>
      );
    }
  
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h4 className="text-xl font-semibold mb-6 text-gray-900">{title}</h4>
        <div className="space-y-8">
          {ratios.map((ratio, index) => {
            if (!ratio.data || ratio.data.length === 0) return null;
            
            // Use parseFloat to correctly parse numbers, handling potential "%" suffixes
            const numericData = ratio.data.map(val => parseFloat(String(val)) || 0);
            
            const validData = numericData.filter(val => val !== null && val !== undefined && !isNaN(val));
            const maxValue = Math.max(...validData, 1); // Ensure maxValue is at least 1 to prevent division by zero
            const latestValue = numericData.length > 0 ? numericData[numericData.length - 1] : 0;
            
            return (
              <div key={index} className="space-y-3 mb-4">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-base font-semibold text-gray-800">{ratio.name}</span>
                  <span className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                    {latestValue !== undefined ? `${latestValue}${ratio.unit || ''}` : 'N/A'}
                    <span className="text-xs ml-1 text-gray-500">(Latest)</span>
                  </span>
                </div>
                <div className="relative">
                  <div className="flex items-end justify-between space-x-2 h-40 px-3 py-2 bg-gray-50 rounded-lg">
                    {numericData.map((value, idx) => {
                      // Calculate height in pixels based on the container height (160px = h-40)
                      const containerHeight = 140; // Accounting for padding
                      let barHeight = 0;
                      
                      if (value > 0 && maxValue > 0) {
                        barHeight = (value / maxValue) * containerHeight;
                      } else if (value < 0) {
                        // Handle negative values - show them as small bars
                        barHeight = 8;
                      }
                      
                      // Ensure minimum height for non-zero values
                      if (value !== 0 && barHeight < 8) {
                        barHeight = 8;
                      }
  
                      const colorClass = ratio.color || 'bg-blue-500';
                      
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center group relative min-w-0">
                          <div className="relative w-full flex justify-center">
                            <div
                              className={`w-8 ${colorClass} rounded-t-md transition-all duration-300 hover:opacity-80 cursor-pointer`}
                              style={{
                                height: `${barHeight}px`,
                              }}
                              title={`${years[idx]?.toString().replace('31-Mar-', '') || idx}: ${value || 'N/A'}${ratio.unit || ''}`}
                            />
                          </div>
                          <div className="text-xs text-gray-500 mt-2 text-center font-medium">
                            {years[idx]?.toString().replace('31-Mar-', '\'').replace('20', '') || idx}
                          </div>
                          <div className="text-xs text-gray-600 font-medium">
                            {value !== undefined && value !== null ? `${value}${ratio.unit || ''}` : 'N/A'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

const PeerTable = ({ title, data, className = "" }) => (
  <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
    <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Company Name</th>
            <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Revenue (₹ Cr)</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">City</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">CIN</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((company, index) => (
            <tr key={index} className={company.isHighlight ? 'bg-blue-50' : 'hover:bg-gray-50'}>
              <td className="px-4 py-3 text-sm font-medium text-gray-800">
                {company.name}
                {company.isHighlight && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    Current Company
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-sm text-right font-medium text-gray-700">
                {company.revenue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">{company.city}</td>
              <td className="px-4 py-3 text-sm text-gray-600 font-mono">{company.cin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


const PressCard = ({ title, excerpt, date, link }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200">
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800 line-clamp-2">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{date}</span>
        <a 
          href={link} 
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Read More →
        </a>
      </div>
    </div>
  </div>
);

const CompanyCard = ({ company, onClick }) => {
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

  return (
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
            <p className="font-semibold text-gray-700">{company.overview?.marketCap || 'N/A'}</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Sector:</span>
            <span className="font-medium text-gray-700">{company.overview?.sector || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tab Components
const OverviewTab = ({ company }) => (
  <div className="space-y-6">
    <SectionHeader 
      title="Company Overview" 
      gradient="from-green-50 to-emerald-50"
    />
    
    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
      <p className="text-gray-700">
        {company.overview.description}
      </p>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
      <h4 className="text-lg font-semibold mb-4">Timeline</h4>
      <ul className="space-y-3">
        {company.overview.timeline.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm font-medium mr-3">
              {item.year}
            </span>
            <span>{item.event}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
      <h4 className="text-lg font-semibold mb-4">Management</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {company.overview.management.map((person, idx) => (
          <div key={idx} className="border-l-4 border-emerald-500 pl-4">
            <h5 className="font-medium text-gray-800">{person.name}</h5>
            <p className="text-sm text-gray-600">{person.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h4 className="text-lg font-semibold mb-4">Product Portfolio</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(company.overview.products).map(([category, products], idx) => (
          <div key={idx} className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-medium text-gray-800 mb-2">{category}</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {products.map((product, i) => (
                <li key={i}>{product}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InsightsTab = ({ company }) => {
  if (!company.insights) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Insights</h3>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600">Insights data is not available for this company.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Insights</h3>
        
        {company.insights.revenueSegmentation && company.insights.revenueSegmentation.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h4 className="text-lg font-semibold mb-4">Revenue Segmentation</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-800 mb-3">Product Line</h5>
                <div className="space-y-3">
                  {company.insights.revenueSegmentation.map((segment, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">{segment.product}</span>
                      <span className="font-bold">{segment.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border-8 border-blue-500 relative">
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-300 rounded-tr-full"></div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green-300 rounded-br-full"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-300 rounded-bl-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {company.insights.financials && company.insights.financials.length > 0 && (
          <FinancialTable 
            title="Financials (₹ in Crores)"
            data={company.insights.financials}
            years={['FY24', 'FY23', 'FY22']}
            className="mb-6"
          />
        )}

        {company.insights.quarterlyFinancials && company.insights.quarterlyFinancials.length > 0 && (
          <FinancialTable 
            title="Quarterly Financial Highlights"
            data={company.insights.quarterlyFinancials}
            years={['Q3 FY24', 'Q3 FY23', '9M FY24', '9M FY23']}
            className="mb-6"
          />
        )}

        {company.insights.expenses && company.insights.expenses.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h4 className="text-lg font-semibold mb-4">Expense Overview (Q3 FY24)</h4>
            <div className="space-y-3">
              {company.insights.expenses.map((expense, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-gray-600">{expense.category}:</span>
                  <span className="font-medium">{expense.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {company.insights.industryOverview && company.insights.industryOverview.points && company.insights.industryOverview.points.length > 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h4 className="text-lg font-semibold mb-4">Industry Overview</h4>
            <div className="space-y-4">
              <p className="text-gray-700">
                {company.insights.industryOverview.description}
              </p>
              <ul className="space-y-3 list-disc pl-5">
                {company.insights.industryOverview.points.map((point, idx) => (
                  <li key={idx} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {company.insights.peerComparison && company.insights.peerComparison.length > 0 && (
          <FinancialTable 
            title="Peer Comparison (₹ in Crores)"
            data={company.insights.peerComparison}
            years={['Particulars', 'Mohan Meakin Ltd', 'Tilaknagar Industries', 'Som Distilleries', 'Radico Khaitan']}
            className="mb-6"
          />
        )}
      </div>
    </div>
  );
};

const AncillaryTab = ({ company }) => {
  if (!company.ancillary) {
    return (
      <div className="space-y-6">
        <SectionHeader 
          title="Ancillary Analysis" 
          subtitle="Comprehensive ratio analysis and peer comparison"
          gradient="from-teal-50 to-cyan-50"
        />
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">Ancillary data is not available for this company.</p>
        </div>
      </div>
    );
  }

  const years = company.ancillary.years || [];
  const ratioData = company.ancillary.ratioData || {};
  const peerData = company.ancillary.peerData || [];
  
  const revenueGrowthTrend = ratioData.revenueGrowth?.[0] && ratioData.revenueGrowth?.[1] ? 
    Number((ratioData.revenueGrowth[0] - ratioData.revenueGrowth[1]).toFixed(2)) : 0;
  
  const roeTrend = ratioData.roe?.[0] && ratioData.roe?.[1] ? 
    Number((ratioData.roe[0] - ratioData.roe[1]).toFixed(2)) : 0;
  
  const debtEquityTrend = ratioData.debtEquity?.[0] && ratioData.debtEquity?.[1] ? 
    Number((ratioData.debtEquity[1] - ratioData.debtEquity[0]).toFixed(2)) : 0;
  
  const chartRatios = [
    { name: 'Revenue Growth (%)', data: ratioData.revenueGrowth || [], unit: '%', color: 'bg-blue-500' },
    { name: 'EBITDA Margin (%)', data: ratioData.ebitdaMargin || [], unit: '%', color: 'bg-green-500' },
    { name: 'Net Margin (%)', data: ratioData.netMargin || [], unit: '%', color: 'bg-purple-500' },
    { name: 'Return on Equity (%)', data: ratioData.roe || [], unit: '%', color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      <SectionHeader 
        title="Ancillary Analysis" 
        subtitle="Comprehensive ratio analysis and peer comparison"
        gradient="from-teal-50 to-cyan-50"
      />

      {ratioData.revenueGrowth && ratioData.roe && ratioData.debtEquity && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MetricCard 
            title="Latest Revenue Growth"
            value={`${(ratioData.revenueGrowth[0] || 0).toFixed(2)}%`}
            change={revenueGrowthTrend}
            isPercentage={true}
          />
          <MetricCard 
            title="Return on Equity"
            value={`${(ratioData.roe[0] || 0).toFixed(2)}%`}
            change={roeTrend}
            isPercentage={true}
          />
          <MetricCard 
            title="Debt/Equity Ratio"
            value={(ratioData.debtEquity[0] || 0).toFixed(2)}
            change={debtEquityTrend}
          />
        </div>
      )}

      {ratioData.revenueGrowth && ratioData.ebitdaMargin && ratioData.netMargin && ratioData.roe && (
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h4 className="text-lg font-semibold mb-6 text-gray-800">Profitability Analysis</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RatioCard 
              title="Revenue Growth (%)"
              data={ratioData.revenueGrowth}
              years={years}
              unit="%"
              colorScheme="blue"
              trend={revenueGrowthTrend}
            />
            <RatioCard 
              title="EBITDA Margin (%)"
              data={ratioData.ebitdaMargin}
              years={years}
              unit="%"
              colorScheme="green"
            />
            <RatioCard 
              title="Net Margin (%)"
              data={ratioData.netMargin}
              years={years}
              unit="%"
              colorScheme="purple"
            />
            <RatioCard 
              title="Return on Equity (%)"
              data={ratioData.roe}
              years={years}
              unit="%"
              colorScheme="orange"
              trend={roeTrend}
            />
          </div>
        </div>
      )}

      {years.length > 0 && (
        <RatioChart 
          title="Key Ratio Trends (5-Year)"
          ratios={chartRatios}
          years={years}
        />
      )}

      {peerData.length > 0 && (
        <PeerTable 
          title="Peer Comparison by Revenue"
          data={peerData}
          className="mb-6"
        />
      )}

      {company.ancillary.strengths && company.ancillary.improvements && (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Financial Insights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.ancillary.strengths.length > 0 && (
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800 mb-2">Strengths</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {company.ancillary.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {company.ancillary.improvements.length > 0 && (
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800 mb-2">Areas for Improvement</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {company.ancillary.improvements.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const PressTab = ({ company }) => {
  if (!company.press) {
    return (
      <div className="space-y-6">
        <SectionHeader 
          title="Press Coverage" 
          subtitle="Recent news and media mentions about the company"
          gradient="from-blue-50 to-indigo-50"
        />
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">Press coverage data is not available for this company.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SectionHeader 
        title="Press Coverage" 
        subtitle="Recent news and media mentions about the company"
        gradient="from-blue-50 to-indigo-50"
      />

      {company.press.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.press.map((item, index) => (
            <PressCard
              key={index}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">No press coverage available for this company.</p>
        </div>
      )}
    </div>
  );
};

const PriceTab = ({ company }) => {
  if (!company.priceData) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Price Information</h3>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600">Price data is not available for this company.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Price Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Current Price:</span>
              <span className="font-bold text-xl">₹{company.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Day Change:</span>
              <span className={`flex items-center gap-1 ${company.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {company.change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                {Math.abs(company.change).toFixed(2)} ({Math.abs(company.changePercent).toFixed(2)}%)
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Market Cap:</span>
              <span className="font-semibold">{company.priceData.marketCap || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Industry PE:</span>
              <span className="font-semibold">{company.priceData.industryPE || 'N/A'}</span>
            </div>
          </div>
        </div>
        
        {company.priceData.metrics && Object.keys(company.priceData.metrics).length > 0 && (
          <div className="mt-8">
            <p className="text-sm text-gray-500 mb-4">Data as per 2023-24</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(company.priceData.metrics).map(([key, value], idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-500 text-sm">{key}</p>
                  <p className="font-bold text-lg">{value}</p>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-gray-500 mt-4">*Data is as per last available financials, corporate actions in the interim period might not be reflected here.</p>
          </div>
        )}
        
        {company.priceData.corporateActions && company.priceData.corporateActions.length > 0 && (
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
                  {company.priceData.corporateActions.map((action, idx) => (
                    <tr key={idx} className="border-b border-gray-200">
                      <td className="px-4 py-3 text-sm">{action.fy}</td>
                      <td className="px-4 py-3 text-sm">{action.type}</td>
                      <td className="px-4 py-3 text-sm">{action.date}</td>
                      <td className="px-4 py-3 text-sm">{action.amount}</td>
                      <td className="px-4 py-3 text-sm">{action.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {company.priceData.about && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">About the company</h4>
            <p className="text-gray-700">
              {company.priceData.about}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const BalanceSheetTab = ({ company }) => {
  const [activeBalanceSheetTab, setActiveBalanceSheetTab] = useState("standalone");

  if (!company.balanceSheet) {
    return (
      <div className="space-y-6">
        <SectionHeader 
          title="Balance Sheet" 
          subtitle="Detailed breakdown of assets and liabilities"
          gradient="from-blue-50 to-indigo-50"
        />
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">Balance sheet data is not available for this company.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <SectionHeader 
        title="Balance Sheet" 
        subtitle="Detailed breakdown of assets and liabilities"
        gradient="from-blue-50 to-indigo-50"
      />

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${activeBalanceSheetTab === 'standalone' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          onClick={() => setActiveBalanceSheetTab('standalone')}
        >
          Standalone
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${activeBalanceSheetTab === 'consolidated' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
          onClick={() => setActiveBalanceSheetTab('consolidated')}
        >
          Consolidated
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {activeBalanceSheetTab === 'standalone' ? (
          company.balanceSheet.standalone && company.balanceSheet.standaloneYears ? (
            <FinancialTable 
              title="Standalone Balance Sheet (10 Years)"
              data={company.balanceSheet.standalone}
              years={company.balanceSheet.standaloneYears}
            />
          ) : (
            <div className="p-6 text-center text-gray-600">
              Standalone balance sheet data is not available.
            </div>
          )
        ) : (
          company.balanceSheet.consolidated && company.balanceSheet.consolidatedYears ? (
            <FinancialTable 
              title="Consolidated Balance Sheet (5 Years)"
              data={company.balanceSheet.consolidated}
              years={company.balanceSheet.consolidatedYears}
            />
          ) : (
            <div className="p-6 text-center text-gray-600">
              Consolidated balance sheet data is not available.
            </div>
          )
        )}
      </div>

      {company.balanceSheet.insights && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Balance Sheet Insights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.balanceSheet.insights.strengths && company.balanceSheet.insights.strengths.length > 0 && (
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800 mb-2">Strengths</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {company.balanceSheet.insights.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {company.balanceSheet.insights.trends && company.balanceSheet.insights.trends.length > 0 && (
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800 mb-2">Trends</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {company.balanceSheet.insights.trends.map((trend, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {trend}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ProfitLossTab = ({ company }) => {
  if (!company.profitLoss) {
    return (
      <div className="space-y-6">
        <SectionHeader 
          title="Profit & Loss Statement" 
          subtitle="Comprehensive financial performance analysis (₹ in Crores)"
          gradient="from-indigo-50 to-purple-50"
        />
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <p className="text-gray-600">Profit & Loss data is not available for this company.</p>
        </div>
      </div>
    );
  }

  const standaloneYears = company.profitLoss.standaloneYears || [];
  const consolidatedYears = company.profitLoss.consolidatedYears || [];
  
  const revenueGrowthFY24 = company.profitLoss.standaloneData?.[0]?.values ? 
    Number(((company.profitLoss.standaloneData[0].values[0] - company.profitLoss.standaloneData[0].values[1]) / 
     company.profitLoss.standaloneData[0].values[1] * 100).toFixed(2)) : 0;
  
  const patGrowthFY24 = company.profitLoss.standaloneData?.[1]?.values ? 
    Number(((company.profitLoss.standaloneData[1].values[0] - company.profitLoss.standaloneData[1].values[1]) / 
     company.profitLoss.standaloneData[1].values[1] * 100).toFixed(2)) : 0;
  
  const ebitdaMarginFY24 = company.profitLoss.standaloneData?.[0]?.values && company.profitLoss.standaloneData?.[1]?.values ? 
    Number((company.profitLoss.standaloneData[1].values[0] / company.profitLoss.standaloneData[0].values[0] * 100).toFixed(2)) : 0;
  
  const patMarginFY24 = company.profitLoss.standaloneData?.[0]?.values && company.profitLoss.standaloneData?.[1]?.values ? 
    Number((company.profitLoss.standaloneData[1].values[0] / company.profitLoss.standaloneData[0].values[0] * 100).toFixed(2)) : 0;

  return (
    <div className="space-y-6">
      <SectionHeader 
        title="Profit & Loss Statement" 
        subtitle="Comprehensive financial performance analysis (₹ in Crores)"
        gradient="from-indigo-50 to-purple-50"
      />
      
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

      <FinancialTable 
        title="Standalone Financial Statement (10 Years)"
        data={company.profitLoss.standaloneData}
        years={standaloneYears}
        className="mb-6"
      />

      <FinancialTable 
        title="Consolidated Financial Statement (5 Years)"
        data={company.profitLoss.consolidatedData}
        years={consolidatedYears}
        className="mb-6"
      />

      {company.profitLoss.observations ? (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Financial Observations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {company.profitLoss.observations.growth && company.profitLoss.observations.growth.length > 0 && (
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800 mb-2">Growth Trends</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {company.profitLoss.observations.growth.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        idx === 0 ? 'bg-green-500' : 
                        idx === 1 ? 'bg-blue-500' : 
                        'bg-purple-500'
                      }`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {company.profitLoss.observations.metrics && company.profitLoss.observations.metrics.length > 0 && (
              <div className="space-y-3">
                <h5 className="font-medium text-gray-800 mb-2">Profitability Metrics</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  {company.profitLoss.observations.metrics.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        idx === 0 ? 'bg-emerald-500' : 
                        idx === 1 ? 'bg-orange-500' : 
                        'bg-red-500'
                      }`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Financial Observations</h4>
          <div className="text-center text-gray-500 py-4">
            Detailed financial observations are not available for this company.
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'price', label: 'Price', component: PriceTab },
    { id: 'overview', label: 'Overview', component: OverviewTab },
    { id: 'insights', label: 'Insights', component: InsightsTab },
    { id: 'balance-sheet', label: 'Balance Sheet', component: BalanceSheetTab },
    { id: 'profit-loss', label: 'Profit & Loss', component: ProfitLossTab },
    { id: 'ancillary', label: 'Ancillary', component: AncillaryTab },
    { id: 'press', label: 'Press', component: PressTab },
  ];

  const companies = Object.values(companiesData);
  
  const renderTabContent = () => {
    if (!selectedCompany) return null;
    
    const TabComponent = tabs.find(tab => tab.id === activeTab)?.component;
    return <TabComponent company={selectedCompany} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              {selectedCompany ? (
                <>
                  <button 
                    onClick={() => setSelectedCompany(null)}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    ← Back to Companies
                  </button>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <h1 className="text-2xl font-bold text-gray-800">{selectedCompany.name}</h1>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-blue-600" size={32} />
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    CalQuity Research
                  </h1>
                </div>
              )}
            </div>
            
            {!selectedCompany && (
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
            )}

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {selectedCompany ? (
        <>
          {/* Navigation Tabs */}
          <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-fade-in">
              {renderTabContent()}
            </div>
          </main>
        </>
      ) : (
        <>
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
        </>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">© 2025 CalQuity Research. Advanced stock analysis platform.</p>
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