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
    description:
      `That's why 1.5+ crore customers trust ${company_name} with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.`,
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
        {company_name} Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: 00000000000 CDSL/NSDL: Depository services through {company_name}
        Broking Ltd. – SEBI Registration no.: 00000000 Commodity Trading through
        {company_name} Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
        Registration no.: 00000000000 Registered Address: {company_name} Broking
        Ltd., #000/000, fake ad. For any complaints pertaining to securities
        broking please write to complaints@{company_name}.com, for DP related to
        dp@{company_name}.com. Please ensure you carefully read the Risk Disclosure
        Document as prescribed by SEBI | ICF
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
        part of {company_name} and offering such services, please create a ticket
        here.
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
          {company_name }
        </Link>, our fintech fund and incubator, has invested in several fintech
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