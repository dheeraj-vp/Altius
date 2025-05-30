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
        { label: "Revenue", values: [1942, 1781, 1379], isHighlight: true },
        { label: "EBITDA", values: [111, 88, 68] },
        { label: "PBT", values: [114, 91, 69] },
        { label: "PAT", values: [85, 68, 51] },
        { label: "EPS", values: [100, 80, 61] }
      ],
      quarterlyFinancials: [
        { 
          label: "Revenue from Operations", 
          values: [820.40, 674.18, 1540.07, 1330.87], 
          isHighlight: true 
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
          label: "Revenue", 
          values: ["Mohan Meakin Ltd", 1942, "Tilaknagar Industries", 2972, "Som Distilleries", 1286, "Radico Khaitan", 15493] 
        },
        { 
          label: "PAT", 
          values: ["Mohan Meakin Ltd", 85, "Tilaknagar Industries", 138, "Som Distilleries", 85, "Radico Khaitan", 256] 
        },
        { 
          label: "CMP (₹)", 
          values: ["Mohan Meakin Ltd", 1966, "Tilaknagar Industries", 210.50, "Som Distilleries", 105, "Radico Khaitan", 1728] 
        },
        { 
          label: "MCAP", 
          values: ["Mohan Meakin Ltd", 1672.77, "Tilaknagar Industries", 4056.97, "Som Distilleries", 2049.33, "Radico Khaitan", 23103.36] 
        },
        { 
          label: "P/E", 
          values: ["Mohan Meakin Ltd", 19.75, "Tilaknagar Industries", 29.5, "Som Distilleries", 9.4, "Radico Khaitan", 90.33] 
        },
        { 
          label: "P/S", 
          values: ["Mohan Meakin Ltd", 0.95, "Tilaknagar Industries", 1.36, "Som Distilleries", 1.6, "Radico Khaitan", 1.5] 
        },
        { 
          label: "EBITDA", 
          values: ["Mohan Meakin Ltd", 111, "Tilaknagar Industries", 197, "Som Distilleries", 155, "Radico Khaitan", 515] 
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
        { label: 'Total Equity and Liability', values: [534.74, 434.27, 348.68, 289.99, 254.94, 230.11, 204.59, 198.22, 196.45, 192.82], isHighlight: true }
      ],
      consolidatedYears: ['FY20', 'FY19', 'FY18', 'FY17', 'FY16'],
      consolidated: [
        { label: 'Equity', values: [117.82, 92.17, 58.73, 43.05, 28.65] },
        { label: 'Liabilities', values: [137.12, 137.95, 147.67, 157.19, 169.98] },
        { label: 'Total Equity and Liability', values: [254.94, 230.12, 206.40, 200.25, 198.63], isHighlight: true }
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
        { label: 'Net Revenue', values: [1929.92, 1771.21, 1370.42, 1099.01, 1020.94, 947.94, 655.77, 580.97, 442.94, 409.51], isHighlight: true },
        { label: 'PAT', values: [84.70, 68.40, 51.45, 40.31, 26.41, 34.94, 15.54, 4.79, 3.74, 3.76], isHighlight: true }
      ],
      consolidatedYears: ['FY20', 'FY19', 'FY18', 'FY17', 'FY16'],
      consolidatedData: [
        { label: 'Net Revenue', values: [1020.94, 947.94, 655.77, 580.97, 442.94], isHighlight: true },
        { label: 'PAT', values: [26.40, 33.15, 15.33, 4.64, 3.55], isHighlight: true }
      ],
      observations: {
        growth: [
          "Revenue CAGR (FY15-FY24): 18.7%",
          "PAT CAGR (FY15-FY24): 39.4%",
          "EBITDA has grown from ₹5.50 Cr to ₹111.25 Cr"
        ],
        metrics: [
          "EBITDA Margin improved from 1.3% to 5.8%",
          "PAT Margin improved from 0.9% to 4.4%",
          "Finance costs reduced significantly over the years"
        ]
      }
    }
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
      industry: "Stock Exchange",
      description: "National Stock Exchange of India Ltd. (NSE) is the leading stock exchange in India and the fourth largest in the world by equity trading volume. It offers trading, clearing and settlement services in equity, equity derivatives, debt and currency derivatives segments.",
      timeline: [
        { year: "1992", event: "Incorporated as the first dematerialized electronic exchange in India" },
        { year: "1994", event: "Started operations in the Wholesale Debt Market (WDM) segment" },
        { year: "2000", event: "Launched internet trading" },
        { year: "2016", event: "Became the largest derivative exchange globally" }
      ],
      management: [
        { 
          name: "Mr. Ashishkumar Chauhan", 
          description: "MD & CEO of NSE with over 25 years of experience in financial markets" 
        },
        { 
          name: "Ms. Varsha Inamdar", 
          description: "Chief Regulatory Officer with expertise in securities regulation" 
        }
      ],
      products: {
        "Equity": ["Cash Market", "Equity Derivatives"],
        "Debt": ["Corporate Bonds", "Government Securities"],
        "Currency": ["USD/INR", "EUR/INR", "GBP/INR", "JPY/INR"],
        "Commodity": ["Bullion", "Energy", "Metals"]
      }
    },
    // Other data similarly structured...
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
    // Other data similarly structured...
  }
};