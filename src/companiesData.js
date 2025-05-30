// companiesData.js
export const companiesData = {
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
      industry: "Beverages",
      description: "Mohan Meakin Ltd, incorporated in 1934, boasts a rich brewing heritage from 1855 (founded as Dyer Breweries). It's one of India's oldest and most renowned breweries. Originally named after founder Edward Dyer, it was renamed to honor the Mohan brothers who took over. The company has diversified beyond brewing, encompassing distilling, bottling, and other industries.",
      timeline: [
        { year: "1855", event: "Founded as Dyer's Brewery, the first brewery in Asia." },
        { year: "1934", event: "Incorporated as Mohan Meakin Ltd. taking over the business of Dyer Meakin & Co. Ltd." },
        { year: "1966", event: "Renamed Mohan Meakin Breweries Ltd." },
        { year: "1980", event: "Became Mohan Meakin Ltd and listed on the Calcutta Stock Exchange." }
      ],
      management: [
        { 
          name: "Hemant Mohan (Managing Director)", 
          description: "Holds a Bachelor's in Business Administration and a degree in International Business (London). He has a vast experience in Brewing and Distillation Industry." 
        },
        { 
          name: "Mr. Vinay Mohan (Non-Executive Non-Independent Director)", 
          description: "He is a graduate, specializing in Marketing." 
        },
        { 
          name: "Mr. Masilamani Nandagopal (Independent Director)", 
          description: "Did B.Sc. (Agri) and has vast experience managing industries viz—Brewery, Distillery, Sugar, Power, Real Estate, etc." 
        }
      ],
      products: {
        "Whisky": ["Solan No. 1", "Black Knight"],
        "Rum": ["Old Monk White", "Gold", "Orange"],
        "Brandy": ["Triple Crown", "Doctor's Reserve No. 1"],
        "Beer": ["Golden Beer", "Lion Beer"]
      }
    },
    insights: {
      revenueSegmentation: [
        { product: "Old Monk Rum", percentage: 80 },
        { product: "Beer (Golden Eagle, Lion, Black Knight)", percentage: 8 },
        { product: "Other Products", percentage: 12 }
      ],
      financials: [
        { label: "Revenue", values: [1942, 1781, 1379]},
        { label: "EBITDA", values: [111, 88, 68] },
        { label: "PBT", values: [114, 91, 69] },
        { label: "PAT", values: [85, 68, 51] },
        { label: "EPS", values: [100, 80, 61] }
      ],
      quarterlyFinancials: [
        { 
          label: "Revenue from Operations", 
          values: [820.40, 674.18, 1540.07, 1330.87]
        },
        { 
          label: "Total Income", 
          values: [823.92, 676.79, 1549.14, 1338.13] 
        },
        { 
          label: "Profit Before Tax (PBT)", 
          values: [54.86, 24.52, 71.41, 55.73] 
        },
        { 
          label: "Net Profit", 
          values: [40.91, 31.76, 69.58, 55.00] 
        },
        { 
          label: "Earnings Per Share (EPS)", 
          values: [48.09, 37.33, 81.78, 64.65] 
        }
      ],
      expenses: [
        { category: "Excise Duty", value: "₹296.49 crore (reflecting higher sales volumes)" },
        { category: "Purchases of Stock-in-Trade", value: "₹314.01 crore (up from ₹263.69 crore in previous quarter)" },
        { category: "Employee Benefits Expense", value: "₹13.34 crore (maintaining stability)" }
      ],
      industryOverview: {
        description: "Mohan Meakin is a well-established brand in India, focusing on strengthening their domestic market position and leveraging growth opportunities within India.",
        points: [
          "Mohan Meakin Limited had a 3.3% market share in the beer sector in India in 2020",
          "The company also has a 3.5% market share in the alcoholic beverage industry",
          "The Indian alcoholic beverage industry is expected to see continued growth, driven by increasing disposable income and urbanization",
          "Expected industry CAGR of around 5-7%",
          "The Indian beer market is expected to almost double to $10 Billion in a decade (CAGR: 8.76%)",
          "Indian beer market: ₹41,470 Crs. in 2023 | Forecasted growth: ₹78,120 Crs. (Growth rate: 7.1%)"
        ]
      },
      peerComparison: [
  { 
    label: "Mohan Meakin Ltd", 
    values: [1942,85,1966,1672.77,19.75,0.95,111] 
  },
  { 
    label: "Tilaknagar Industries Ltd", 
    values: [2972,138,210.50,4056.97,29.5,1.36,197] 
  },
  { 
    label: "Som Distilleries Ltd", 
    values: [1286,85,105,2049.33,9.4,1.6,155] 
  },
  { 
    label: "Radico Khaitan Ltd", 
    values: [15493,256,1728,23103.36,90.33,1.5,515] 
  }
]
    },
    ancillary: {
      years: ['31-Mar-2020', '31-Mar-2019', '31-Mar-2018', '31-Mar-2017', '31-Mar-2016'],
      ratioData: {
        revenueGrowth: [7.70, 44.50, 12.90, 31.20, 0.00],
        ebitdaMargin: [4.20, 5.30, 2.80, 2.50, 2.30],
        netMargin: [2.60, 3.50, 2.30, 0.80, 0.80],
        roe: [22.40, 36.00, 26.10, 10.80, 12.40],
        debtEquity: [0.10, 0.10, 0.50, 1.10, 1.90],
        inventoryDays: [26.00, 25.00, 31.00, 34.00, 41.00],
        debtorDays: [24.00, 20.00, 32.00, 34.00, 53.00],
        payableDays: [25.00, 25.00, 37.00, 40.00, 60.00],
        cashCycle: [26.00, 20.00, 26.00, 28.00, 34.00],
        assetTurnover: [19.40, 20.40, 21.80, 19.90, 13.90]
      },
      peerData: [
        { name: 'AVADH SUGAR & ENERGY LIMITED', revenue: 2693.51, city: 'SITAPUR', cin: 'L15122UP2015PLC069635' },
        { name: 'DCM SHRIRAM INDUSTRIES LIMITED', revenue: 2082.90, city: 'NEW DELHI', cin: 'L74899DL1989PLC035140' },
        { name: 'MOHAN MEAKIN LIMITED', revenue: 1929.92, city: 'SOLAN', cin: 'L15520HP1934PLC000135', isHighlight: true },
        { name: 'RAJASTHAN LIQUORS LIMITED', revenue: 1867.43, city: 'KANPUR', cin: 'U15531UP1998PLC028079' },
        { name: 'BCL INDUSTRIES LIMITED', revenue: 1697.26, city: 'BATHINDA', cin: 'L24231PB1976PLC003624' }
      ],
      strengths: [
        "Low Debt Burden: Debt/Equity ratio at 0.10, indicating strong financial stability",
        "Strong ROE: 22.4% return on equity demonstrates efficient use of shareholder funds",
        "Efficient Working Capital: Cash conversion cycle of 26 days shows good liquidity management"
      ],
      improvements: [
        "Revenue Growth: Slowdown from 44.5% to 7.7% needs attention",
        "Margin Pressure: EBITDA margin declined from 5.3% to 4.2%",
        "Peer Position: Revenue rank 3rd among top 5 peers, with growth potential"
      ]
    },
    press: [
      {
        title: "Mohan Meakin Reports Strong FY25 Results",
        excerpt: "Explore Mohan Meakin's Full FY25 Financial Performance, Dividend Announcement & Strategic Insights.",
        date: "1 day ago",
        link: "#"
      },
      {
        title: "Mohan Meakin Ltd Financial Performance Highlights – Q3 and 9M FY25",
        excerpt: "The company demonstrated strong financial growth in Q3 FY25, with Revenue from Operations rising to ₹820.40 crore, a 22% YoY increase from ₹674.18 crore in Q3 FY24.",
        date: "3 months ago",
        link: "#"
      },
      {
        title: "Mohan Meakin Ltd Independent Auditor Review Report on FY25 June Quarter",
        excerpt: "Mohan Meakin Ltd Financial Informations",
        date: "1 year ago",
        link: "#"
      },
      {
        title: "This long summer is really refreshing for beer makers positive for Mohan Meakin",
        excerpt: "As scorching heat overwhelms large parts of the country, beer makers are betting on a prolonged dry season to make up for the losses they suffered during the pandemic.",
        date: "3 years ago",
        link: "#"
      },
      {
        title: "Riding on innovation, Old Monk eyes record 10 million sales next year",
        excerpt: "With innovations such as the introduction of new variants and the launch of tetra packs, Mohan Meakin aims to achieve record high sales of around 10 million units of Old Monk.",
        date: "4 years ago",
        link: "#"
      },
      {
        title: "Beer Sales in India stands ₹55000-60000 crs annually - positive for Mohan Meakin",
        excerpt: "Beer sales in India stands ₹55,000-60000 Crs annually! It's 8 times more than bottled water, 12 times more than Coffee & 3 times more than Tea sales.",
        date: "4 years ago",
        link: "#"
      }
    ],
  shareholders: [
    {
      "name": "VINAY MOHAN",
      "holdings_percentage": 8.21
    },
    {
      "name": "Other",
      "holdings_percentage": 91.79
    }
  ],
priceData: {
      marketCap: "₹1,871.01 Cr",
      industryPE: 70,
      metrics: {
        "P/E": "21.99",
        "P/S": "0.97",
        "P/B": "5.11",
        "Dividend (/sh)": "₹1.00",
        "Dividend Yield": "0.05%",
        "Face Value": "₹5.00",
        "EPS": "₹100.00",
        "PAT": "₹86.00 Cr",
        "Share capital": "₹4.25 Cr",
        "Sales": "₹1,929.92 Cr"
      },
      corporateActions: [
        {
          fy: "2023-24",
          type: "DIVIDEND",
          date: "25-Sep-2024",
          amount: "1",
          remarks: "Mohan Meakin Declared a Final Dividend of Rs 1/ Share( Record Date is Tentative)"
        },
        {
          fy: "2022-23",
          type: "DIVIDEND",
          date: "25-Sep-2023",
          amount: "1",
          remarks: "Mohan Meakin Declared a Final Dividend of Rs 1/ Share"
        }
      ],
      about: "Mohan Meakin Limited (MML), as per its credit rating report, is engaged in the business of marketing its products under names such as 'Old Monk' in the rum segment and 'Meakin 10000', 'Asia 72', and 'Golden Eagle' in the beer segment. MML has two processing facilities for processing beer, spirit, and food products (largely grain flakes) at Mohan Nagar in UP and Kasauli/Solan in Himachal Pradesh. It also has bottling plants at Mohangram in Punjab and Solan. The company was incorporated in 1934 and has its registered office located in Himachal Pradesh."
    },
balanceSheet: {
  standaloneYears: ['FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15'],
  standalone: [
    { label: 'Equity', values: [366.32, 280.22, 211.10, 158.39, 117.82, 92.16, 56.92, 41.02, 26.47, 22.73] },
    { label: 'Liabilities', values: [168.41, 154.06, 137.58, 131.60, 137.12, 137.95, 147.67, 157.19, 169.98, 170.08] },
    { label: 'Total Equity and Liability', values: [534.74, 434.27, 348.68, 289.99, 254.94, 230.11, 204.59, 198.22, 196.45, 192.82], isHighlight: true },
    { label: 'Net Fixed Assets', values: [84.71, 71.78, 61.37, 58.57, 52.54, 46.51, 30.14, 29.13, 31.80, 29.67] },
    { label: 'Capital WIP', values: [12.12, 10.16, 8.03, 7.30, 8.97, 8.28, 6.48, 7.17, 5.93, 6.22] },
    { label: 'Other NCA', values: [104.65, 28.02, 25.29, 20.35, 21.14, 27.37, 32.54, 37.04, 23.58, 20.61] },
    { label: 'CA', values: [333.26, 324.31, 254.00, 203.76, 172.29, 147.95, 135.43, 124.88, 135.14, 136.32] },
    { label: 'Total Assets', values: [534.74, 434.27, 348.68, 289.99, 254.94, 230.11, 204.59, 198.22, 196.45, 192.82],isHighlight: true }
  ],
  consolidatedYears: ['FY20', 'FY19', 'FY18', 'FY17', 'FY16'],
  consolidated: [
    { label: 'Equity', values: [117.82, 92.17, 58.73, 43.05, 28.65] },
    { label: 'Liabilities', values: [137.12, 137.95, 147.67, 157.19, 169.98] },
    { label: 'Total Equity and Liability', values: [254.94, 230.12, 206.40, 200.25, 198.63], isHighlight: true },
    { label: 'Net Fixed Assets', values: [52.54, 46.51, 30.14, 29.13, 31.80] },
    { label: 'Capital WIP', values: [8.97, 8.28, 6.48, 7.17, 5.93] },
    { label: 'Other NCA', values: [21.14, 27.38, 34.35, 39.07, 25.76] },
    { label: 'CA', values: [172.29, 147.95, 135.43, 124.88, 135.14] },
    { label: 'Total Assets', values: [254.94, 230.12, 206.40, 200.25, 198.63] ,isHighlight: true}
  ],
  insights: {
    strengths: [
      "Growing Equity: Equity has increased from ₹22.73 Cr in FY15 to ₹366.32 Cr in FY24 (16x growth)",
      "Asset Growth: Total assets have grown consistently from ₹192.82 Cr to ₹534.74 Cr"
    ],
    trends: [
      "Liability Management: Total liabilities have reduced from ₹170.08 Cr to ₹168.41 Cr",
      "Fixed Assets: Net fixed assets nearly tripled from ₹29.67 Cr to ₹84.71 Cr"
    ]
  }
},
    profitLoss: {
  standaloneYears: ['FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15'],
  standaloneData: [
    { label: 'Net Revenue', values: [1929.92, 1771.21, 1370.42, 1099.01, 1020.94, 947.94, 655.77, 580.97, 442.94, 409.51] },
    { label: 'Total Op Cost', values: [1818.67, 1681.95, 1302.80, 1042.60, 978.24, 897.26, 637.24, 566.70, 432.70, 404.01] },
    { label: 'EBITDA', values: [111.25, 89.26, 67.62, 56.41, 42.70, 50.68, 18.53, 14.28, 10.23, 5.50] },
    { label: 'Other Income', values: [11.85, 7.37, 8.96, 2.86, 6.84, 6.19, 4.59, 4.50, 8.98, 6.13] },
    { label: 'Depreciation', values: [8.38, 6.88, 6.05, 5.22, 4.76, 3.85, 2.55, 2.86, 3.01, 3.95] },
    { label: 'PBIT', values: [114.73, 89.74, 70.53, 54.05, 44.78, 53.02, 20.58, 15.91, 16.20, 7.68] },
    { label: 'Finance Costs', values: [0.79, 0.96, 1.56, 2.91, 2.67, 2.97, 6.65, 9.15, 10.99, 11.22] },
    { label: 'Profit bfr Tax and Exception', values: [113.94, 88.79, 68.98, 51.13, 42.10, 50.05, 13.92, 6.77, 5.21, -3.53] },
    { label: 'Exceptional Items', values: [0.00, 3.01, 0.00, 3.01, 0.00, 1.28, 8.15, 0.00, 0.00, 9.39] },
    { label: 'Profit (Continuing Ops)', values: [113.94, 91.80, 68.98, 54.15, 42.10, 51.32, 22.08, 6.77, 5.21, 5.86] },
    { label: 'Income Tax', values: [29.24, 23.40, 17.52, 13.84, 15.69, 16.38, 6.54, 1.98, 1.47, 2.10] },
    { label: 'PAT from Continuing Operations', values: [84.70, 68.40, 51.45, 40.31, 26.41, 34.94, 15.54, 4.79, 3.74, 3.76] },
    { label: 'PAT', values: [84.70, 68.40, 51.45, 40.31, 26.41, 34.94, 15.54, 4.79, 3.74, 3.76]}
  ],
  consolidatedYears: ['FY20', 'FY19', 'FY18', 'FY17', 'FY16'],
  consolidatedData: [
    { label: 'Net Revenue', values: [1020.94, 947.94, 655.77, 580.97, 442.94]},
    { label: 'Total Op Cost', values: [978.24, 897.26, 637.24, 566.70, 432.70] },
    { label: 'EBITDA', values: [42.70, 50.68, 18.53, 14.28, 10.23] },
    { label: 'Other Income', values: [6.84, 6.19, 4.59, 4.50, 8.98] },
    { label: 'Depreciation', values: [4.76, 3.85, 2.55, 2.86, 3.01] },
    { label: 'PBIT', values: [44.77, 53.02, 20.58, 15.91, 16.20] },
    { label: 'Finance Costs', values: [2.67, 2.97, 6.65, 9.15, 10.99] },
    { label: 'Profit bfr Tax and Exception', values: [42.10, 50.05, 13.92, 6.77, 5.21] },
    { label: 'Exceptional Items', values: [0.00, -0.32, 8.15, 0.00, 0.00] },
    { label: 'Profit (Continuing Ops)', values: [42.10, 49.72, 22.08, 6.77, 5.21] },
    { label: 'Income Tax', values: [15.69, 16.38, 6.54, 1.98, 1.47] },
    { label: 'PAT from Continuing Operations', values: [26.41, 33.34, 15.54, 4.79, 3.74] },
    { label: 'Minority interest, JV, associates', values: [0.00, -0.19, -0.21, -0.14, -0.18] },
    { label: 'PAT', values: [26.40, 33.15, 15.33, 4.64, 3.55] }
  ],
  observations: {
    growth: [
      "Revenue CAGR (FY15–FY24): 18.7%",
      "PAT CAGR (FY15–FY24): 39.4%",
      "EBITDA has grown from ₹5.50 Cr to ₹111.25 Cr"
    ],
    metrics: [
      "EBITDA Margin improved from 1.3% to 5.8%",
      "PAT Margin improved from 0.9% to 4.4%",
      "Finance costs reduced significantly over the years"
    ],
  }
}

  },
"nse": {
    id: "nse",
    name: "National Stock Exchange of India Ltd",
    symbol: "NSE",
    price: 2300.00,
    change: 0.00,
    changePercent: 0.00,
    overview: {
      marketCap: "₹5,69,250.00 Cr",
      peRatio: 68.55,
      bookValue: 0.00,
      dividendYield: "0.78%",
      sector: "Financial Services",
      industry: "Stock Exchange",
      description: "NSE which holds the distinction of being one of the world's largest exchanges was incorporated in 1992 and has its registered office located in Mumbai, Maharashtra. It provides a platform to companies to raise capital and for investors to participate in the stock market. NSE launched electronic screen-based trading in 1994, derivatives trading (in the form of index futures), and internet trading in 2000, which were each the first of its kind in India. NSE has a fully integrated business model comprising exchange listings, trading services, clearing and settlement services, indices, market data feeds, technology solutions, and financial education offerings.",
      timeline: [
        { year: "1992", event: "NSE was incorporated" },
        { year: "1993", event: "NSE recognized as exchange in India by SEBI" },
        { year: "1994", event: "Screen based trading introduced by NSE and commenced operations" },
        { year: "2000", event: "Derivatives trading in India was offered through launch of index futures by NSE" },
        { year: "2002", event: "ETFs in India were introduced by NSE" },
        { year: "2008", event: "Currency derivatives were introduced in India by NSE" },
        { year: "2016", event: "Promoted NSE IFSC, the international stock exchange in India's first IFSC SEZ at gift city Gandhinagar" },
        { year: "2021", event: "NSE registered investor base surpasses 5 crore unique investors" }
      ],
      management: [
        { 
          name: "Leadership Team", 
          description: "NSE is backed by marquee investors including LIC (10.72%), Aranda Investments Ltd (5%), Stock Holding Corporation of India Ltd (4.44%), and other institutional investors." 
        }
      ],
      products: {
        "Trading Services": ["Cash Equity Trading", "Derivatives Trading", "Currency Trading"],
        "Technology Solutions": ["Colocation Services", "Network Connectivity", "Platform Services"],
        "Data Services": ["Live Data Feeds", "Historical Data", "Market Analytics"],
        "Corporate Services": ["Listing Services", "Book Building", "Index Licensing"]
      }
    },
    insights: {
      revenueSegmentation: [
        { product: "Transaction Charges", percentage: 79 },
        { product: "Treasury Income", percentage: 7 },
        { product: "Data Center & Connectivity", percentage: 6 },
        { product: "Other Services", percentage: 8 }
      ],
      financials: [
        { label: "Revenue", values: [17140.68, 14780.01, 11856.23] },
        { label: "EBITDA", values: [12880.98, 11610.62, 9631.46] },
        { label: "PBT", values: [14370.54, 12824.71, 10156.53] },
        { label: "PAT", values: [12187.69, 8305.40, 7501.88] },
        { label: "EPS", values: [167.80, 148.61, 105.02] }
      ],
      quarterlyFinancials: [
        { 
          label: "Total Income", 
          values: [4807, 5023, 3974, 4950]
        },
        { 
          label: "Operating EBITDA", 
          values: [3398, 3344, 2261, 3106] 
        },
        { 
          label: "Profit After Tax", 
          values: [3834, 3137, 1975, 2567] 
        },
        { 
          label: "Earnings Per Share", 
          values: [15.49, 12.68, 7.98, 51.86] 
        }
      ],
      expenses: [],
      industryOverview: {
        description: "NSE is the world's largest exchange by number of contracts for the 5th consecutive time and ranks 3rd globally in the cash segment. The exchange has consistently grown its market share in cash equities from 63% in FY02 to 92% in FY22.",
        points: [
          "NSE holds 93% market share in cash segment and 99% market share in F&O segment",
          "Demat accounts have increased fivefold from 2.2 crores in FY14 to 11.3 crores currently",
          "NSE now has 3.4 crores active customers, up from 40 lakhs in FY14—a nearly 9x increase",
          "Equity options Average daily volume surged 25x over the last 5 years to INR 152.4tn",
          "Gift City operations continue to grow with INR 3.5 trillion contracts of open interest",
          "Indian capital markets remain under-penetrated with significant growth potential"
        ]
      },
      peerComparison: [
        { 
          label: "NSE", 
          values: ["4950","2567","4500","222750","29","17","3106"] 
        },
        { 
          label: "BSE", 
          values: ["-","-","2700","36575","48","40","-"] 
        }
      ]
    },
    ancillary: {
      years: ['31-Mar-2024', '31-Mar-2023', '31-Mar-2022', '31-Mar-2021', '31-Mar-2020'],
      ratioData: {
        revenueGrowth: [25.00, 32.77, 58.75, 60.40, 17.00],
        ebitdaMargin: [79.00, 80.00, 83.69, 73.60, 64.60],
        netMargin: [24.50, 61.80, 58.20, 63.50, 53.70],
        roe: [21.86, 30.71, 33.71, 30.70, 21.90],
        debtEquity: [0.00, 0.00, 0.00, 0.00, 0.00],
        inventoryDays: [0.00, 0.00, 0.00, 0.00, 0.00],
        debtorDays: [67.80, 64.60, 65.90, 65.00, 68.00],
        payableDays: [17.30, 15.40, 14.00, 16.00, 17.00],
        cashCycle: [50.00, 49.00, 51.00, 49.00, 51.00],
        assetTurnover: [5.50, 6.70, 7.90, 4.30, 4.10]
      },
      peerData: [
        { name: 'NATIONAL STOCK EXCHANGE OF INDIA LTD', revenue: 4848.29, city: 'MUMBAI', cin: 'U67120MH1992PLC069769', isHighlight: true },
        { name: 'CNB FINWIZ PRIVATE LIMITED', revenue: 410.25, city: 'NEW DELHI', cin: 'U74899DL2000PTC375219' },
        { name: 'BSE LIMITED', revenue: 378.63, city: 'MUMBAI', cin: 'L67120MH2005PLC155188' },
        { name: 'MULTI COMMODITY EXCHANGE OF INDIA LIMITED', revenue: 370.44, city: 'MUMBAI', cin: 'L51909MH2002PLC135594' },
        { name: 'ABANS ENTERPRISES LIMITED', revenue: 331.57, city: 'MUMBAI', cin: 'L74120MH1985PLC035243' }
      ],
      strengths: [
        "Debt-Free Company: Zero debt-to-equity ratio indicating exceptional financial stability",
        "Market Dominance: 93% market share in cash segment and 99% in F&O segment",
        "High Profitability: EBITDA margins consistently above 70% with strong cash generation",
        "Technology Leadership: First to introduce screen-based trading, derivatives, and internet trading in India"
      ],
      improvements: [
        "Colocation Controversy: Ongoing regulatory issues may impact IPO timeline",
        "Revenue Concentration: High dependency on transaction charges (79% of revenue)",
        "Valuation Concerns: Trading at premium compared to global peers like CME"
      ]
    },
    press: [
      {
        title: "NSE Revamps Share Transfer Process Ahead of IPO",
        excerpt: "NSE announces significant improvements to share transfer system, reducing timeline from 2-4 months to just 3-5 days through DIS mechanism.",
        date: "1 day ago",
        link: "#"
      },
      {
        title: "NSE Reports Strong Q3 FY25 Performance",
        excerpt: "Total income of ₹4,807 crores with 21% YoY growth, PAT surges 94% to ₹3,834 crores in Q3 FY25.",
        date: "3 months ago",
        link: "#"
      },
      {
        title: "NSE Announces 4:1 Bonus Issue and Record Dividend",
        excerpt: "NSE declares bonus shares in ratio of 4:1 along with final dividend of ₹35 per share including special payout.",
        date: "6 months ago",
        link: "#"
      },
      {
        title: "Fairfax India Completes NSE Stake Sale",
        excerpt: "Fairfax India sells equity interest in NSE for gross proceeds of $189 million, generating significant returns on original investment.",
        date: "1 year ago",
        link: "#"
      }
    ],
    shareholders: [
    {
      "name": "Life Insurance Corporation of India",
      "holdings_percentage": 10.72
    },
    {
      "name": "Aranda Investments Mauritius PTE Ltd",
      "holdings_percentage": 5.00
    },
    {
      "name": "Veracity Investments Limited, Mauritius",
      "holdings_percentage": 5.00
    },
    {
      "name": "Stock Holding Corporation of India Limited",
      "holdings_percentage": 4.44
    },
    {
      "name": "SBI Capital Markets Ltd",
      "holdings_percentage": 4.33
    },
    {
      "name": "SAIF II SE Investments Mauritius Limited",
      "holdings_percentage": 3.55
    },
    {
      "name": "State Bank of India",
      "holdings_percentage": 3.23
    },
    {
      "name": "Other",
      "holdings_percentage": 63.73
    }
  ],
    priceData: {
      marketCap: "₹5,69,250.00 Cr",
      industryPE: 82,
      weekHigh52: 2300,
      weekLow52: 1180,
      metrics: {
        "P/E": "68.55",
        "P/S": "34.81",
        "P/B": "23.76",
        "Dividend (/sh)": "₹18.00",
        "Dividend Yield": "0.78%",
        "Face Value": "₹1.00",
        "EPS": "₹33.55",
        "PAT": "₹8,306.00 Cr",
        "Share capital": "₹247.50 Cr",
        "Sales": "₹16,352.00 Cr"
      },
      corporateActions: [
        {
          fy: "2024-25",
          type: "DIVIDEND",
          date: "31-Aug-2025",
          amount: "35",
          remarks: "NSE has declared a final dividend of Rs 35 per share including a special one-time payout of ₹11.46 per share"
        },
        {
          fy: "2024-25",
          type: "BONUS",
          date: "02-Nov-2024",
          amount: "4:1",
          remarks: "NSE has declared bonus equity shares in the ratio of 4:1"
        },
        {
          fy: "2023-24",
          type: "DIVIDEND",
          date: "20-Aug-2024",
          amount: "90",
          remarks: "NSE has declared Final dividend of Rs 90/share. After bonus adjustment, dividend is Rs18 per share"
        },
        {
          fy: "2022-23",
          type: "DIVIDEND",
          date: "16-Aug-2023",
          amount: "80",
          remarks: "NSE has declared a dividend of Rs 80/share"
        }
      ],
      about: "NSE which holds the distinction of being one of the world's largest exchanges was incorporated in 1992 and has its registered office located in Mumbai, Maharashtra. It provides a platform to companies to raise capital and for investors to participate in the stock market. NSE has a fully integrated business model comprising exchange listings, trading services, clearing and settlement services, indices, market data feeds, technology solutions, and financial education offerings. NSE also oversees compliance by trading and clearing members and listed companies with the rules and regulations of the exchange."
    },
    balanceSheet: {
  standaloneYears: ['FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17'],
  standalone: [
    { label: 'Equity', values: [26187.78, 19361.78, 16676.41, 11547.80, 8169.17, 6916.08, 6383.44, 5970.76, 5939.64] },
    { label: 'Liabilities', values: [7588.17, 7859.18, 4142.78, 5173.88, 3923.03, 2204.56, 1914.08, 1830.15, 2143.70] },
    { label: 'Total Equity and Liability', values: [33775.95, 27220.96, 20819.19, 16721.68, 12092.20, 9120.64, 8297.52, 7800.91, 8083.34], isHighlight: true },
    { label: 'Net Fixed Assets', values: [1489.64, 1063.62, 995.97, 1004.74, 772.83, 601.45, 555.32, 538.85, 509.89] },
    { label: 'Capital WIP', values: [1.99, 18.74, 45.94, 122.05, 38.67, 46.82, 25.77, 42.59, 101.59] },
    { label: 'Other NCA', values: [14168.19, 11974.49, 6844.30, 5320.54, 4577.08, 4261.41, 4227.87, 4310.77, 3923.07] },
    { label: 'CA', values: [19607.76, 14164.07, 12932.98, 10274.35, 6703.62, 4210.96, 3488.56, 2908.70, 3548.79] },
    { label: 'Total Assets', values: [33775.95, 27220.96, 20819.19, 16721.68, 12092.20, 9120.64, 8297.52, 7800.91, 8083.34],isHighlight: true  } // only 7 values provided
  ],
  consolidatedYears: ['FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17'],
  consolidated: [
    { label: 'Equity', values: [30353.33, 23973.88, 20480.38, 15418.28, 11635.95, 8621.99, 7788.26, 7349.56, 7209.63] },
    { label: 'Liabilities', values: [27037.80, 32579.67, 10800.16, 20188.30, 17564.19, 15518.38, 12181.24, 10871.01, 12280.95] },
    { label: 'Total Equity and Liability', values: [69466.64, 65464.00, 31280.54, 35606.58, 29200.14, 24140.37, 19969.50, 18220.57, 19490.58], isHighlight: true },
    { label: 'Net Fixed Assets', values: [1952.96, 1492.24, 1444.61, 1697.51, 1308.14, 856.41, 762.33, 652.99, 597.48] },
    { label: 'Capital WIP', values: [3.85, 31.89, 53.42, 90.54, 46.75, 114.36, 99.35, 65.41, 113.88] },
    { label: 'Other NCA', values: [22243.92, 22068.81, 12101.24, 7429.78, 7420.22, 5443.78, 5733.79, 5595.92, 5270.79] },
    { label: 'CA', values: [46984.32, 45542.69, 22178.77, 26388.75, 20425.03, 17725.82, 13374.03, 11906.25, 13508.43] },
    { label: 'Total Assets', values: [69466.64, 64611.50, 35778.04, 35606.58, 29200.14, 24140.37, 19969.50, 18220.57, 19490.58],isHighlight: true  }
  ],
      insights: {
        strengths: [
          "Strong Equity Growth: Standalone equity has grown from ₹5,939.64 Cr in FY17 to ₹26,187.78 Cr in FY25 (4.4x growth)",
          "Asset Expansion: Total assets have grown consistently from ₹8,083.34 Cr to ₹33,775.95 Cr",
          "Zero Debt: Company maintains debt-free status with strong balance sheet"
        ],
        trends: [
          "Cash Rich: Current assets comprise majority of total assets indicating strong liquidity",
          "Investment Growth: Other non-current assets have grown significantly indicating strategic investments"
        ]
      }
    },
profitLoss: {
  standaloneYears: ['FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17'],
  standaloneData: [
    { label: 'Net Revenue', values: [15433.00, 13510.54, 11181.03, 7762.80, 4848.29, 2832.43, 2450.44, 2132.72, 1690.50]},
    { label: 'Total Op Cost', values: [4955.80, 4058.89, 2734.10, 2021.06, 1264.39, 980.73, 867.31, 771.31, 783.79] },
    { label: 'EBITDA', values: [10477.20, 9451.65, 8446.93, 5741.74, 3583.90, 1851.70, 1583.13, 1361.41, 906.71] },
    { label: 'Other Income', values: [4390.26, 1448.95, 1511.16, 621.80, 679.84, 335.38, 578.31, 459.51, 627.91] },
    { label: 'Depreciation', values: [427.09, 338.99, 302.21, 259.72, 166.15, 132.40, 118.07, 114.70, 111.70] },
    { label: 'PBIT', values: [14440.37, 10561.61, 9655.88, 6103.82, 4097.59, 2054.68, 2043.37, 1706.22, 1422.92] },
    { label: 'Profit bfr Tax and Exception', values: [14440.37, 10561.61, 9655.88, 6103.82, 4097.59, 2054.68, 2043.37, 1706.22, 1422.92] },
    { label: 'Exceptional Items', values: [-234.09, -1740.97, -203.45, 0.00, -1822.05, 0.00, 0.00, 0.00, 0.00] },
    { label: 'Profit (Continuing Ops)', values: [14206.28, 8820.64, 9452.43, 6103.82, 2275.54, 2054.68, 2043.37, 1706.22, 1422.92] },
    { label: 'Income Tax', values: [2960.61, 2185.33, 2219.53, 1482.71, 488.26, 494.22, 653.50, 544.41, 389.99] },
    { label: 'PAT from Continuing Operations', values: [11245.67, 6635.31, 7232.90, 4621.11, 1787.28, 1560.46, 1389.87, 1161.81, 1032.93] },
    { label: 'Minority interest, JV, associates', values: [35.30, 10.06, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00] },
    { label: 'PAT', values: [11280.97, 6645.37, 7232.90, 4621.11, 1787.28, 1560.46, 1389.87, 1161.81, 1032.93]}
  ],
  consolidatedYears: ['FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17'],
  consolidatedData: [
    { label: 'Net Revenue', values: [17140.68, 14780.01, 11856.23, 8929.48, 5624.82, 3507.93, 2997.42, 2609.14, 2104.26]},
    { label: 'Total Op Cost', values: [4259.70, 3169.39, 2224.77, 2430.22, 1484.14, 1241.98, 1073.11, 832.27, 899.55] },
    { label: 'EBITDA', values: [12880.98, 11610.62, 9631.46, 6499.26, 4140.68, 2265.95, 1924.31, 1776.87, 1204.71] },
    { label: 'Other Income', values: [2036.15, 1653.60, 909.13, 570.16, 639.59, 327.51, 686.89, 423.42, 576.40] },
    { label: 'Depreciation', values: [546.59, 439.55, 384.06, 338.36, 226.01, 180.78, 142.02, 125.59, 118.14] },
    { label: 'PBIT', values: [14370.54, 12824.71, 10156.53, 6731.06, 4554.26, 2412.68, 2469.18, 2074.70, 1662.97] },
    { label: 'Profit bfr Tax and Exception', values: [14370.54, 12824.71, 10156.53, 6731.06, 4554.26, 2412.68, 2469.18, 2074.70, 1662.97] },
    { label: 'Exceptional Items', values: [1104.24, -1640.97, -203.45, 90.95, -155.19, 0.00, 0.00, 0.00, 0.00] },
    { label: 'Profit (Continuing Ops)', values: [15474.78, 11183.74, 9953.08, 6822.01, 4399.07, 2412.68, 2469.18, 2074.70, 1662.97] },
    { label: 'Income Tax', values: [3869.03, 2777.80, 2539.70, 1714.00, 891.55, 640.47, 868.17, 735.57, 555.82] },
    { label: 'PAT from Continuing Operations', values: [11605.75, 8405.94, 7413.38, 5108.01, 3507.52, 1772.21, 1601.01, 1339.13, 1107.15] },
    { label: 'Minority interest, JV, associates', values: [581.94, -100.54, 88.50, 90.28, 66.20, 112.31, 107.03, 122.34, 111.67] },
    { label: 'PAT', values: [12187.69, 8305.40, 7501.88, 5198.29, 3573.72, 1884.52, 1708.04, 1461.47, 1218.82]}
  ]
}

  },
  "incred": {
    id: "sample-corp",
    name: "Incred Financial Services Ltd.",
    symbol: "incred",
    price: 156.40,
    change: 8.90,
    changePercent: 6.03,
    overview: {
      marketCap: "₹5,678 Cr",
      peRatio: 22.3,
      bookValue: 89.2,
      dividendYield: "3.2%",
      sector: "Technology",
      industry: "Software Services",
      description: "Sample Corporation is a leading technology company specializing in enterprise software solutions. With a global presence across 15 countries, the company serves clients in banking, healthcare, and retail sectors.",
      timeline: [
        { year: "2005", event: "Founded in Bangalore with initial focus on CRM solutions" },
        { year: "2010", event: "Expanded to international markets with offices in US and UK" },
        { year: "2018", event: "Launched AI-powered analytics platform" },
        { year: "2022", event: "Acquired TechInnovators to expand cloud capabilities" }
      ],
      management: [
        { 
          name: "Mr. Rajesh Kumar", 
          description: "Founder & CEO with 20+ years in enterprise software development" 
        },
        { 
          name: "Ms. Priya Sharma", 
          description: "CTO leading R&D in AI and machine learning technologies" 
        }
      ],
      products: {
        "Enterprise Software": ["CRM Pro", "ERP Suite", "HR Management"],
        "Cloud Solutions": ["Cloud Analytics", "Migration Services", "Hybrid Cloud"],
        "AI Platform": ["Predictive Analytics", "Natural Language Processing", "Computer Vision"]
      }
    },
balanceSheet: {
  standaloneYears: ['FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15'],
  standalone: [
    { label: 'Equity', values: [366.32, 2483.68, 1112.32, 158.39, 117.82, 92.16, 56.92, 41.02, 26.47, 22.73] },
    { label: 'Liabilities', values: [168.41, 4169.69, 2911.57, 131.60, 137.12, 137.95, 147.67, 157.19, 169.98, 170.08] },
    { label: 'Total Equity and Liability', values: [534.74, 6653.37, 4023.89, 289.99, 254.94, 230.11, 204.59, 198.22, 196.45, 192.82], isHighlight: true },
    { label: 'Net Fixed Assets', values: [84.71, 131.77, 48.54, 58.57, 52.54, 46.51, 30.14, 29.13, 31.80, 29.67] },
    { label: 'Capital WIP', values: [12.12, 1.62, 2.94, 7.30, 8.97, 8.28, 6.48, 7.17, 5.93, 6.22] },
    { label: 'Other NCA', values: [104.65, 488.78, 32.23, 20.35, 21.14, 27.37, 32.54, 37.04, 23.58, 20.61] },
    { label: 'CA', values: [333.26, 6031.20, 3939.52, 203.76, 172.29, 147.95, 135.43, 124.88, 135.14, 136.32] },
    { label: 'Total Assets', values: [534.74, 6653.37, 4023.23, 289.99, 254.94, 230.11, 204.59, 198.22, 196.45, 192.82] ,isHighlight: true }
  ],
  consolidatedYears: ['FY23', 'FY22', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16'],
  consolidated: [
    { label: 'Equity', values: [2486.61, 1115.19, 117.82, 92.17, 58.73, 43.05, 28.65] },
    { label: 'Liabilities', values: [4121.78, 2919.46, 137.12, 137.95, 147.67, 157.19, 169.98] },
    { label: 'Total Equity and Liability', values: [6608.39, 4034.65, 254.94, 230.12, 206.40, 200.25, 198.63], isHighlight: true },
    { label: 'Net Fixed Assets', values: [145.10, 60.35, 52.54, 46.51, 30.14, 29.13, 31.80] },
    { label: 'Capital WIP', values: [1.62, 2.94, 8.97, 8.28, 6.48, 7.17, 5.93] },
    { label: 'Other NCA', values: [485.58, 32.49, 21.14, 27.38, 34.35, 39.07, 25.76] },
    { label: 'CA', values: [5976.09, 3938.87, 172.29, 147.95, 135.43, 124.88, 135.14] },
    { label: 'Total Assets', values: [6608.39, 4034.65, 254.94, 230.12, 206.40, 200.25, 198.63],isHighlight: true  }
  ],
  insights: {
    strengths: [
      "Growing Equity: Equity has increased from ₹22.73 Cr in FY15 to ₹2483.68 Cr in FY23 (110x growth standalone), and ₹2486.61 Cr consolidated",
      "Asset Growth: Total assets have grown from ₹192.82 Cr in FY15 to ₹6653.37 Cr in FY23 (standalone)"
    ],
    trends: [
      "Liability Management: Despite large growth, equity growth has outpaced liabilities since FY22",
      "Fixed Assets Expansion: Net fixed assets rose significantly to ₹145.10 Cr consolidated in FY23"
    ]
  }
},
shareholders: [
    {
      "name": "InCred Holdings Limited (formerly known as KKR Capital Markets Private Limited)",
      "holdings_percentage": 1.00
    }
],
profitLoss: {
  standaloneYears: ['FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15'],
  standaloneData: [
    { label: 'Net Revenue', values: [1929.92, 863.75, 487.92, 1099.01, 1020.94, 947.94, 655.77, 580.97, 442.94, 409.51]},
    { label: 'Total Op Cost', values: [null, 258.21, 242.82] },
    { label: 'EBITDA', values: [null, 605.54, 245.10] },
    { label: 'Other Income', values: [null, 12.78, 33.30] },
    { label: 'Depreciation', values: [null, 11.66, 10.71] },
    { label: 'PBIT', values: [null, 606.66, 267.69] },
    { label: 'Finance Costs', values: [null, 355.84, 219.52] },
    { label: 'Profit bfr Tax and Exception', values: [null, 250.82, 48.17] },
    { label: 'Exceptional Items', values: [null, 43.80, 0.00] },
    { label: 'Profit (Continuing Ops)', values: [null, 207.02, 48.17] },
    { label: 'Income Tax', values: [null, 86.24, 12.05] },
    { label: 'PAT from Continuing Operations', values: [null, 120.78, 36.12] },
    { label: 'PAT', values: [84.70, 120.78, 36.12, 40.31, 26.41, 34.94, 15.54, 4.79, 3.74, 3.76]}
  ],
  consolidatedYears: ['FY23', 'FY22', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16'],
  consolidatedData: [
    { label: 'Net Revenue', values: [864.58, 488.03, 1020.94, 947.94, 655.77, 580.97, 442.94]},
    { label: 'Total Op Cost', values: [264.86, 246.46] },
    { label: 'EBITDA', values: [599.72, 241.57] },
    { label: 'Other Income', values: [12.88, 36.24] },
    { label: 'Depreciation', values: [12.83, 12.28] },
    { label: 'PBIT', values: [599.77, 265.53] },
    { label: 'Finance Costs', values: [355.84, 219.47] },
    { label: 'Profit bfr Tax and Exception', values: [243.93, 46.06] },
    { label: 'Exceptional Items', values: [40.65, 0.00] },
    { label: 'Profit (Continuing Ops)', values: [203.28, 46.06] },
    { label: 'Income Tax', values: [82.25, 11.03] },
    { label: 'PAT from Continuing Operations', values: [121.03, 35.03] },
    { label: 'Minority interest, JV, associates', values: [-0.10, -4.21] },
    { label: 'PAT', values: [120.93, 30.82, 26.40, 33.15, 15.33, 4.64, 3.55] }
  ],
  observations: {
    growth: [
      "Revenue CAGR (FY15–FY24): 18.7%",
      "PAT CAGR (FY15–FY24): 39.4%",
      "EBITDA has grown from ₹5.50 Cr to ₹111.25 Cr"
    ],
    metrics: [
      "EBITDA Margin improved from 1.3% to 5.8%",
      "PAT Margin improved from 0.9% to 4.4%",
      "Finance costs reduced significantly over the years"
    ]
  }
}
  }
};