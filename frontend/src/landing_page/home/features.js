import { Link } from "react-router-dom";

export const company_name = "TradeSphare";
export const company_icon = <i className="fa-solid fa-arrow-right"></i>;

export const features = [
  { imgSrc: "/media/images/education.svg", text: "Free account opening" },
];

export const right = [
  {
    head: "Free and open market education",
    body: "Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.",
    link: (
      <Link className="fw-bold text-decoration-none" to="">
        Varsity {company_icon}
      </Link>
    ),
  },
  {
    head: "",
    body: "TradingQ&A, the most active trading and investment community in India for all your market-related queries.",
    link: (
      <Link className="text-decoration-none fw-bold" to="">
        Trading Q&A {company_icon}
      </Link>
    ),
  },
];

export const featuresImg = [
  { imgSrc: "/media/images/pricing0.svg", text: "Free account opening" },
  { imgSrc: "/media/images/pricingMF.svg", text: "Zero brokerage on delivery" },
  { imgSrc: "/media/images/pricingtwo.svg", text: "Intraday and F&O" },
];

export const statsData = [
  {
    title: "Customer-first always",
    description: `That's why 1.5+ crore customers trust ${company_name} with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.`,
  },
  {
    title: "No spam or gimmicks",
    description:
      "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace, the way you like.",
  },
  {
    title: `The ${company_name} universe`,
    description:
      "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.",
  },
  {
    title: "Do better with money",
    description: (
      <>
        With initiatives like
        <Link className="fw-bold text-decoration-none" to="#">
          &nbsp;Nudge&nbsp;
        </Link>
        and
        <Link className="fw-bold text-decoration-none" to="">
          &nbsp;Kill Switch
        </Link>
        , we don't just facilitate transactions, but actively help you do better
        with your money.
      </>
    ),
  },
];

export const ftr_info = [
  {
    id: 1,
    ft: (
      <Link to="/about" className=" text-decoration-none text-muted">
        About Us
      </Link>
    ),
  },
  {
    id: 2,
    ft: (
      <Link to="/product-page" className=" text-decoration-none text-muted">
        Products
      </Link>
    ),
  },
  {
    id: 3,
    ft: (
      <Link to="/pricing" className=" text-decoration-none text-muted">
        Pricing
      </Link>
    ),
  },
  {
    id: 4,
    ft: (
      <Link to="/careers" className=" text-decoration-none text-muted">
        Careers
      </Link>
    ),
  },
  {
    id: 5,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        Press & Media
      </Link>
    ),
  },
];

export const social_top = [
  {
    link: (
      <Link to="#" className="text-muted">
        <i className="fa-brands fa-x-twitter"></i>
      </Link>
    ),
  },
  {
    link: (
      <Link to="" className="text-muted">
        <i className="fa-brands fa-facebook"></i>
      </Link>
    ),
  },
  {
    link: (
      <Link to="" className="text-muted">
        <i className="fa-brands fa-instagram"></i>
      </Link>
    ),
  },
  {
    link: (
      <Link to="" className="text-muted">
        <i className="fa-brands fa-linkedin"></i>
      </Link>
    ),
  },
];

export const social_bottom = [
  {
    link: (
      <Link to="#" className="text-muted">
        <i className="fa-brands fa-youtube"></i>
      </Link>
    ),
  },
  {
    link: (
      <Link to="" className="text-muted">
        <i className="fa-brands fa-whatsapp"></i>
      </Link>
    ),
  },
  {
    link: (
      <Link to="" className="text-muted">
        <i className="fa-brands fa-telegram"></i>
      </Link>
    ),
  },
];

export const ftr_info2 = [
  {
    text: (
      <p>
        {company_name} Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
        Registration no.: 00000000000 CDSL/NSDL: Depository services through{" "}
        {company_name}
        Broking Ltd. – SEBI Registration no.: 00000000 Commodity Trading through
        {company_name} Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
        Registration no.: 00000000000 Registered Address: {company_name} Broking
        Ltd., #000/000, fake ad. For any complaints pertaining to securities
        broking please write to complaints@{company_name}.com, for DP related to
        dp@{company_name}.com. Please ensure you carefully read the Risk
        Disclosure Document as prescribed by SEBI | ICF
      </p>
    ),
  },
  {
    text: (
      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>
    ),
  },
  {
    text: (
      <div className="muted-text">
        <Link to="#">Smart Online Dispute Resolution </Link>|
        <Link to=""> Grievances Redressal Mechanism</Link>
      </div>
    ),
  },
  {
    text: (
      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
    ),
  },
  {
    text: (
      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
    ),
  },
  {
    text: (
      <p>
        "Prevent unauthorized transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is a one-time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund, etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non-allotment, the funds will remain in your bank
        account. As a business, we don't give stock tips and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of {company_name} and offering such services, please create a
        ticket here.
      </p>
    ),
  },
];

export const ftr_links = [
  {
    id: 1,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        NSE
      </Link>
    ),
  },
  {
    id: 2,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        BSE
      </Link>
    ),
  },
  {
    id: 3,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        MCX
      </Link>
    ),
  },
  {
    id: 4,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        Terms & conditions
      </Link>
    ),
  },
  {
    id: 5,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        Policies & procedures
      </Link>
    ),
  },
  {
    id: 6,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        Privacy policy
      </Link>
    ),
  },
  {
    id: 7,
    ft: (
      <Link to="#" className=" text-decoration-none text-muted">
        Investor charter
      </Link>
    ),
  },
];

export const about_user = [
  {
    img: (
      <img
        src="media/images/user.png"
        style={{ borderRadius: "100%", width: "50%" }}
      />
    ),
    name: <h4 className="mt-5">Founder Name Here</h4>,
    Your_Position: <h6>Founder, CEO</h6>,
  },
];

export const user_data = [
  {
    abt: (
      <p>
        {`${about_user[0].name.props.children}`} hurdles he faced during his
        decade long stint as a trader. Today, {company_name} has changed the
        landscape of the Indian broking industry.
      </p>
    ),
    abt2: (
      <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
        and the Market Data Advisory Committee (MDAC).
      </p>
    ),
    abt3: <p>Playing basketball is his zen.</p>,
    abt4: (
      <p>
        Connect on &nbsp; &nbsp;
        <Link to="#" className="text-muted">
          <i className="fa-brands ftr2 fa-facebook"></i>
        </Link>
        &nbsp;
        <Link to="#" className="text-muted">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        &nbsp;
        <Link to="#" className="text-muted">
          <i className="fa-brands fa-x-twitter"></i>
        </Link>
      </p>
    ),
  },
];

export const abt_hero_left = [
  {
    body: (
      <p>
        We kick-started operations on the 15th of August, 2010 with the goal of
        breaking all barriers that traders and investors face in India in terms
        of cost, support, and technology.
      </p>
    ),
    body2: (
      <p>
        Today, our disruptive pricing models and in-house technology have made
        us the biggest stock broker in India.
      </p>
    ),
    body3: (
      <p>
        Over 1+ Crore clients place millions of orders every day through our
        powerful ecosystem of investment platforms, contributing over 15% of all
        Indian retail trading volumes.
      </p>
    ),

    body4: (
      <p>
        In addition, we run a number of popular open online educational and
        community initiatives to empower retail traders and investors.
      </p>
    ),
    body5: (
      <p>
        <Link className="text-decoration-none" to="/">
          {company_name}
        </Link>
        , our fintech fund and incubator, has invested in several fintech
        startups with the goal of growing the Indian capital markets.
      </p>
    ),
    body6: (
      <p>
        And yet, we are always up to something new every day. Catch up on the
        latest updates on our blog or see what the media is saying about us.
      </p>
    ),
  },
];

export const pricing = [
  {
    imgSrc: "/media/images/pricing0.svg",
    text: "Free equity delivery",
    body: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
  },
  {
    imgSrc: "/media/images/pricingMF.svg",
    text: "Intraday and F&O trades",
    body: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
  },
  {
    imgSrc: "/media/images/pricingtwo.svg",
    text: "Free direct MF",
    body: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
  },
];

export const chargesData = [
  {
    title: "Securities/Commodities Transaction Tax",
    description: "Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.",
  },
  {
    title: "Transaction/Turnover Charges",
    description: "Charged by exchanges (NSE, BSE, MCX) on the value of your transactions. BSE has revised transaction charges in various groups.",
    details: [
      "BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016.",
      "BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.",
      "BSE has revised transaction charges for group A, B and other non-exclusive scrips at ₹375 per crore of turnover.",
      "BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.",
    ],
  },
  {
    title: "Call & Trade",
    description: `Additional charges of ₹50 per order for orders placed through a dealer at ${company_name} including auto square-off orders.`,
  },
  {
    title: "Stamp Charges",
    description: "Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.",
  },
  {
    title: "NRI Brokerage Charges",
    description: "₹100 per order for futures and options. For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).",
    details: [
      "For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).",
      "₹500 + GST as yearly account maintenance charges (AMC).",
    ],
  },
  {
    title: "Charges for Investor's Protection Fund Trust (IPFT) by NSE",
    description: "Equity and Futures - ₹10 per crore + GST of the traded value.",
    details: [
      "Options - ₹50 per crore + GST traded value (premium value).",
      "Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.",
    ],
  },
  {
    title: "GST",
    description: "Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges).",
  },
  {
    title: "SEBI Charges",
    description: "Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.",
  },
  {
    title: "DP (Depository Participant) Charges",
    description: "₹15.34 per scrip charged on the trading account ledger when stocks are sold, irrespective of quantity.",
  },
  {
    title: "Pledging Charges",
    description: "₹30 + GST per pledge request per ISIN.",
  },
  {
    title: "AMC (Account Maintenance Charges)",
    description: "For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.",
    details: [
      "For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly.",
    ],
  },
  {
    title: "Corporate Action Order Charges",
    description: "₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.",
  },
  {
    title: "Off-Market Transfer Charges",
    description: "₹25 or 0.03% of the transfer value (whichever is higher).",
  },
  {
    title: "Physical CMR Request",
    description: "First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.",
  },
  {
    title: "Payment Gateway Charges",
    description: "₹9 + GST (Not levied on transfers done via UPI).",
  },
  {
    title: "Delayed Payment Charges",
    description: "Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account.",
  },
  {
    title: "Disclaimer",
    description: "For delivery based trades, a minimum of ₹0.01 will be charged per contract note.",
  },
];

export const ticket = [
  {
    text: "Free equity delivery",
    body: "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
  },
  {
    text: "Intraday and F&O trades",
    body: "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
  },
  {
    text: "Free direct MF",
    body: "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
  },
];


export const data = [
  {
    title: "Account Opening",
    ticon: <i className="fa-solid fa-plus"></i>,
    links: [
      { label: "Getting started", href: "/account-opening/getting-started" },
      { label: "Online", href: "/account-opening/online" },
      { label: "Offline", href: "/account-opening/offline" },
      { label: "Charges", href: "/account-opening/charges" },
      {
        label: "Company, Partnership and HUF",
        href: "/account-opening/company-partnership-huf",
      },
      { label: "Non Resident Indian (NRI)", href: "/account-opening/nri" },
    ],
  },
  {
    title: "Your Account",
    ticon: <i className="fa-solid fa-user"></i>,
    links: [
      { label: "Login credentials", href: "/your-account/login-credentials" },
      { label: "Your Profile", href: "/your-account/profile" },
      {
        label: "Account modification and segment addition",
        href: "/your-account/account-modification",
      },
      { label: "CMR & DP ID", href: "/your-account/cmr-dp-id" },
      { label: "Nomination", href: "/your-account/nomination" },
      {
        label: "Transfer and conversion of shares",
        href: "/your-account/transfer-conversion",
      },
    ],
  },
  {
    title: "Trading and Markets",
    ticon: <i className="fa-solid fa-chart-line"></i>,
    links: [
      { label: "Trading FAQs", href: "/trading-markets/faqs" },
      { label: "Kite", href: "/trading-markets/kite" },
      { label: "Margins", href: "/trading-markets/margins" },
      {
        label: "Product and order types",
        href: "/trading-markets/product-order-types",
      },
      { label: "Corporate actions", href: "/trading-markets/corporate-actions" },
      { label: "Kite features", href: "/trading-markets/kite-features" },
    ],
  },
  {
    title: "Funds",
    ticon: <i className="fa-solid fa-money-bill"></i>,
    links: [
      { label: "Fund withdrawal", href: "/funds/withdrawal" },
      { label: "Adding funds", href: "/funds/adding" },
      { label: "Adding bank accounts", href: "/funds/bank-accounts" },
      { label: "eMandates", href: "/funds/emandates" },
    ],
  },
  {
    title: "Console",
    ticon: <i className="fa-solid fa-columns"></i>,
    links: [
      { label: "IPO", href: "/console/ipo" },
      { label: "Portfolio", href: "/console/portfolio" },
      { label: "Funds statement", href: "/console/funds-statement" },
      { label: "Profile", href: "/console/profile" },
      { label: "Reports", href: "/console/reports" },
      { label: "Referral program", href: "/console/referral" },
    ],
  },
  {
    title: "Coin",
    ticon: <i className="fa-solid fa-coins"></i>,
    links: [
      {
        label: "Understanding mutual funds and Coin",
        href: "/coin/mutual-funds",
      },
      { label: "Coin app", href: "/coin/app" },
      { label: "Coin web", href: "/coin/web" },
      { label: "Transactions and reports", href: "/coin/transactions" },
      { label: "National Pension Scheme (NPS)", href: "/coin/nps" },
    ],
  },
];