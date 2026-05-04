import type { Metadata } from "next";
import "@/styles/nabl-labs.css";

export const metadata: Metadata = {
  title: "List of NABL Labs | Resources | ODOP UP",
  description:
    "NABL-accredited laboratories in Uttar Pradesh for testing, calibration and certification of ODOP products.",
};

type NablLab = {
  sNo: number;
  category: string;
  cabId: string;
  cabName: string;
  address: string;
  district: string;
  discipline: string;
};

const nablLabs: NablLab[] = [
  { sNo: 1, category: "Carpets & Durries", cabId: "T-4254", cabName: "International Testing Centre, MSME-Technology Development Centre (PPDC)", address: "Ministry of MSME, Govt. of India, Sports Goods Complex, Delhi Road", district: "Meerut", discipline: "Mechanical, Chemical" },
  { sNo: 2, category: "Carpets & Durries", cabId: "T-4607", cabName: "Plastics Woven Bag Testing Lab – TTRC (A Division of Lohia Corp Limited)", address: "Amiliha TTRC Complex", district: "Kanpur", discipline: "Mechanical" },
  { sNo: 3, category: "Carpets & Durries", cabId: "T-0402", cabName: "Quality Control Laboratory, Ordnance Clothing Factory", address: "Ordnance Clothing Factory", district: "Shahjahanpur", discipline: "Mechanical, Chemical" },
  { sNo: 4, category: "Carpets & Durries", cabId: "T-8553", cabName: "Regional Laboratory of Textiles Committee, Kanpur", address: "117/48, Sarvodaya Nagar", district: "Kanpur", discipline: "Mechanical, Chemical" },
  { sNo: 5, category: "Carpets & Durries", cabId: "T-9373", cabName: "Sahu Testing Laboratory (STL)", address: "A-114, Sector-65", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 6, category: "Metal Craft", cabId: "T-1915", cabName: "Carsul Laboratories", address: "29-30 LGF (Basement), Suchita Complex, Ambedkar", district: "Ghaziabad", discipline: "Mechanical, Chemical" },
  { sNo: 7, category: "Metal Craft", cabId: "T-2871", cabName: "Shreeram Inspection Services LLP", address: "D-432, Govindpuram", district: "Ghaziabad", discipline: "Mechanical, Chemical" },
  { sNo: 8, category: "Metal Craft", cabId: "T-3054", cabName: "Testing Laboratory, Good Luck Engineering Co.", address: "Khasra No. 2839, Gram-Dhoom Manikpur, G.T. Road", district: "Dadri, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 9, category: "Metal Craft", cabId: "T-1359", cabName: "Inspection & Testing Engineers (Lab Division)", address: "F 22-23, Site C, Surajpur Industrial Area, UPSIDC", district: "Greater Noida, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 10, category: "Metal Craft", cabId: "T-1525", cabName: "IRC Engineering Services India Pvt. Ltd.", address: "A-53, Sector-63, Gautam Buddha Nagar", district: "NOIDA, GB Nagar", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 11, category: "Metal Craft", cabId: "T-6359", cabName: "Unique NDTify Private Limited", address: "D-Block, House No. 18, Krishna Nagar, Bagu", district: "Ghaziabad", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 12, category: "Metal Craft", cabId: "T-5355", cabName: "PTC Industries Limited (Testing Laboratory)", address: "NH-25A, Sarai Sahjadi", district: "Lucknow", discipline: "Mechanical, Chemical" },
  { sNo: 13, category: "Metal Craft", cabId: "T-5299", cabName: "Ambica Steels Limited Testing Division", address: "Plot No. 51/2, Site-4, UPSIDC Industrial Area", district: "Sahibabad, Ghaziabad", discipline: "Mechanical, Chemical" },
  { sNo: 14, category: "Metal Craft", cabId: "T-7620", cabName: "Cell Com Teleservices Private Limited", address: "A-52, UPSIDC Industrial Area", district: "Sikandarabad, Bulandshahr", discipline: "Mechanical, Chemical" },
  { sNo: 15, category: "Metal Craft", cabId: "T-8502", cabName: "JSAW Laboratory Kosi Kalan", address: "A1, UPSIDC Industrial Area, Nandgaon Road, Kosi Kalan", district: "Mathura", discipline: "Mechanical, Chemical" },
  { sNo: 16, category: "Metal Craft", cabId: "T-10165", cabName: "Material Testing Laboratory, RACL Geartech Limited", address: "A-3, Industrial Area, Gajraula", district: "Amroha", discipline: "Mechanical, Chemical" },
  { sNo: 17, category: "Metal Craft", cabId: "T-10307", cabName: "Chemical & Metallurgical Testing Laboratory, Northern Railway, Charbagh Workshop", address: "Rolling Stock Workshop, Charbagh", district: "Lucknow", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 18, category: "Metal Craft", cabId: "T-3673", cabName: "Mechanical Testing Laboratory, Kisaan Steels Pvt. Ltd.", address: "B-12, Industrial Area", district: "Ghaziabad", discipline: "Mechanical" },
  { sNo: 19, category: "Metal Craft", cabId: "T-3908", cabName: "Control & Testing Laboratory, Banaras Locomotive Works", address: "Banaras Locomotive Works", district: "Varanasi", discipline: "Mechanical, Chemical" },
  { sNo: 20, category: "Metal Craft", cabId: "T-7515", cabName: "QA-Tubes, Tata Steel Limited", address: "Plot-28, Site-IV, Sahibabad Industrial Area", district: "Ghaziabad", discipline: "Mechanical" },
  { sNo: 21, category: "Metal Craft", cabId: "T-8217", cabName: "QA-CRCA, Tata Steel Limited", address: "Plot-23, Site-IV, Sahibabad Industrial Area", district: "Ghaziabad", discipline: "Mechanical" },
  { sNo: 22, category: "Metal Craft", cabId: "T-8848", cabName: "Quality Laboratory, R.S. Infraprojects Private Limited", address: "A-53/2, UPSIDC Industrial Area", district: "Sikandarabad, Bulandshahr", discipline: "Mechanical, Chemical" },
  { sNo: 23, category: "Metal Craft", cabId: "T-9010", cabName: "Testing Laboratory, Kisaan Die Tech Private Limited", address: "A-7, 7/4, 7/5 & 7/13, Electro Steel Compound, South Side GT Road Industrial Area", district: "Ghaziabad", discipline: "Mechanical" },
  { sNo: 24, category: "Miscellaneous Products", cabId: "T-4113", cabName: "Swastik Electronics Testing Centre (OPC) Private Limited", address: "Plot No-16, Mainapur Industrial Area", district: "Ghaziabad", discipline: "Electronics, Electrical" },
  { sNo: 25, category: "Miscellaneous Products", cabId: "T-3374", cabName: "Testing Laboratory, TAK Technologies Private Limited", address: "A 68, Sector 80", district: "NOIDA, GB Nagar", discipline: "Electronics" },
  { sNo: 26, category: "Musical Instruments", cabId: "C-0502", cabName: "Pascal Physical Laboratory LLP", address: "C-48, Ground Floor, Sector-88", district: "NOIDA, GB Nagar", discipline: "Mechanical, Electro-technical" },
  { sNo: 27, category: "Musical Instruments", cabId: "C-0301", cabName: "A A Calibration Pvt. Ltd.", address: "C-18, Sector-13, Vasundhara Haat, Vasundhara", district: "Ghaziabad", discipline: "Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 28, category: "Musical Instruments", cabId: "C-1051", cabName: "PV Calibration Laboratory Private Limited", address: "16SCP-38, Sector-16A, Vasundhara", district: "Ghaziabad", discipline: "Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 29, category: "Musical Instruments", cabId: "C-0666", cabName: "Bansal Calibration and Test Lab Private Limited", address: "49/39, Site-IV, Industrial Area, Sahibabad", district: "Ghaziabad", discipline: "Thermal, Mechanical, Electro-technical" },
  { sNo: 30, category: "Musical Instruments", cabId: "C-1204", cabName: "Techno Measure Private Limited", address: "C-31, 2nd Floor, VMB Tower, Sector-13, Vasundhra", district: "Ghaziabad", discipline: "Thermal, Mechanical, Electro-technical" },
  { sNo: 31, category: "Musical Instruments", cabId: "C-0143", cabName: "Classic Instrumentation Private Limited", address: "C-45, Sector 65", district: "NOIDA, GB Nagar", discipline: "Thermal, Fluid Flow, Mechanical, Optical, Electro-technical" },
  { sNo: 32, category: "Musical Instruments", cabId: "C-0196", cabName: "Neno Calibration Services LLP", address: "A-2, Sector 92", district: "NOIDA, GB Nagar", discipline: "Thermal, Mechanical, Electro-technical" },
  { sNo: 33, category: "Musical Instruments", cabId: "C-1408", cabName: "Calyss Calibration and Testing Private Limited", address: "F-40, Sector-9, Gautam Buddha Nagar", district: "NOIDA, GB Nagar", discipline: "Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 34, category: "Musical Instruments", cabId: "C-1105", cabName: "Bhagwati Calibration Laboratory Private Limited", address: "16 Hindon Market", district: "Ghaziabad", discipline: "Thermal, Mechanical, Electro-technical" },
  { sNo: 35, category: "Musical Instruments", cabId: "C-1516", cabName: "DRS Testing Technologies Private Limited", address: "Plot No. SH-13, Sector-63A", district: "NOIDA, GB Nagar", discipline: "Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 36, category: "Musical Instruments", cabId: "C-1952", cabName: "Enviro Instruments", address: "A-04, Sigma IV", district: "Greater Noida, GB Nagar", discipline: "Thermal, Fluid Flow, Mechanical, Optical, Electro-technical" },
  { sNo: 37, category: "Musical Instruments", cabId: "C-2203", cabName: "Pinpoint Precision Calibration Lab Private Limited", address: "Lower Ground Floor, 237, Niti Khand-2, Indirapuram", district: "Ghaziabad", discipline: "Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 38, category: "Musical Instruments", cabId: "C-2548", cabName: "Engineering and Environmental Solutions Pvt. Ltd. (Calibration Services Division)", address: "Plot No. E 40, CDF Industrial Area, Chhetath, Anoopshahar Road", district: "Aligarh", discipline: "Chemical Metrology, Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 39, category: "Musical Instruments", cabId: "C-2358", cabName: "EI Centre for Calibration Services (OPC) Private Limited", address: "K127 UPSIDC Ind. Area Site-5 Kasna", district: "Greater Noida, GB Nagar", discipline: "Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 40, category: "Musical Instruments", cabId: "C-2673", cabName: "Lata Envirotech Services – Centre for Calibration Laboratory LLP", address: "K-307, UPSIDC Industrial Area, Site-5, Kasna", district: "Greater Noida, GB Nagar", discipline: "Thermal, Fluid Flow, Mechanical, Electro-technical" },
  { sNo: 41, category: "Ceramic Products", cabId: "T-3233", cabName: "ADS Labtech", address: "39/2/10A, Sahibabad Industrial Area", district: "Sahibabad, Ghaziabad", discipline: "Non-destructive, Mechanical, Chemical, Electrical" },
  { sNo: 42, category: "Ceramic Products", cabId: "T-0902", cabName: "Spectro Research Lab Ventures (P) Ltd.", address: "G-3, Bajrangbali Industrial Area", district: "Kanpur", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 43, category: "Engineering Goods", cabId: "T-1344", cabName: "Materials Engineering Lab, Tata Motors Ltd", address: "Chinhat Industrial Area, Deva Road", district: "Lucknow", discipline: "Mechanical, Chemical" },
  { sNo: 44, category: "Engineering Goods", cabId: "T-4949", cabName: "Samvardhana Motherson International Limited", address: "A-3 1st Floor, Sector 84", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical, Electronics, Electrical" },
  { sNo: 45, category: "Engineering Goods", cabId: "T-11055", cabName: "Research & Development Lab, International Tractors Limited", address: "D-106, Sector-2", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 46, category: "Food Products", cabId: "T-3202", cabName: "Pilkhuwa Dairy Central Laboratory", address: "18 Km Stone Ghaziabad-Hapur Road", district: "Pilkhuwa, Hapur", discipline: "Chemical" },
  { sNo: 47, category: "Food Products", cabId: "T-1218", cabName: "Basmati Export Development Foundation (BEDF)", address: "Lab-cum-Office Complex, SVP University of A&T, Roorkee Road", district: "Meerut", discipline: "Biological, Chemical" },
  { sNo: 48, category: "Food Products", cabId: "T-3778", cabName: "Regional Public Analyst", address: "M.L.B Medical College", district: "Jhansi", discipline: "Chemical" },
  { sNo: 49, category: "Food Products", cabId: "T-4418", cabName: "Indian Grain Storage Management & Research Institute", address: "Meerut Road", district: "Hapur", discipline: "Chemical" },
  { sNo: 50, category: "Food Products", cabId: "T-2143", cabName: "Regional Agmark Laboratory", address: "National Sugar Institute Campus, Kalyanpur", district: "Kanpur", discipline: "Chemical" },
  { sNo: 51, category: "Food Products", cabId: "T-3929", cabName: "Regional Government Public Analyst Laboratory", address: "B R D Medical College Campus", district: "Gorakhpur", discipline: "Chemical" },
  { sNo: 52, category: "Food Products", cabId: "T-5606", cabName: "Regional Public Analyst Laboratory Shivpur Varanasi", address: "Shivpur", district: "Varanasi", discipline: "Chemical" },
  { sNo: 53, category: "Food Products", cabId: "T-5711", cabName: "Regional Public Analyst Laboratory", address: "Bamrauli Katara", district: "Agra", discipline: "Chemical" },
  { sNo: 54, category: "Food Products", cabId: "T-5919", cabName: "International Rice Research Institute South Asia Regional", address: "NSRTC Campus, Collectry Farm", district: "Varanasi", discipline: "Chemical" },
  { sNo: 55, category: "Food Products", cabId: "T-7285", cabName: "Bharat Agrooil Private Limited", address: "Sikeda Road", district: "Modinagar", discipline: "Chemical" },
  { sNo: 56, category: "Food Products", cabId: "T-8007", cabName: "NSI Analytical Laboratory, National Sugar Institute", address: "Kalyanpur, Kanpur Nagar", district: "Kanpur", discipline: "Chemical" },
  { sNo: 57, category: "Food Products", cabId: "T-9642", cabName: "Food Grain Testing Laboratory, Quality Control Cell", address: "5th Floor, Sector-H, Kendriya Bhawan, Aliganj", district: "Lucknow", discipline: "Chemical" },
  { sNo: 58, category: "Food Products", cabId: "T-10380", cabName: "Grain Testing Lab, Central Warehousing Corporation – RO Lucknow", address: "Central Warehouse, Warehousing Bhawan, Vibhuti Khand, Gomti Nagar", district: "Lucknow", discipline: "Chemical" },
  { sNo: 59, category: "Food Products", cabId: "T-11007", cabName: "Regional Public Analyst Laboratory", address: "LLRM Medical College Campus, Garh Road", district: "Meerut", discipline: "Chemical" },
  { sNo: 60, category: "Food Products", cabId: "T-11498", cabName: "Augarnath Testing Laboratories", address: "B-19, Sector 4C, Shatabdi", district: "Meerut", discipline: "Chemical" },
  { sNo: 61, category: "Food Products", cabId: "T-11308", cabName: "Grain Testing Lab, Central Warehousing Corporation – CW Saharanpur I", address: "Central Warehouse-I, Janta Road", district: "Saharanpur", discipline: "Chemical" },
  { sNo: 62, category: "Food Products", cabId: "T-11932", cabName: "Safe Labs", address: "C 49, Sector 65", district: "NOIDA, GB Nagar", discipline: "Chemical" },
  { sNo: 63, category: "Glassware", cabId: "T-5434", cabName: "Chemical Lab, Centre for the Development of Glass Industry", address: "A-1/1, Industrial Area, Jalesar Road", district: "Firozabad", discipline: "Chemical" },
  { sNo: 64, category: "Handicraft", cabId: "T-7465", cabName: "Central Laboratory, Bureau of Indian Standards", address: "20/9, Site-4, Sahibabad Industrial Area", district: "Ghaziabad", discipline: "Biological, Mechanical, Chemical, Electrical" },
  { sNo: 65, category: "Leather & Leather Products", cabId: "T-4254", cabName: "International Testing Centre, MSME-Technology Development Centre (PPDC)", address: "Ministry of MSME, Govt. of India, Sports Goods Complex, Delhi Road", district: "Meerut", discipline: "Mechanical, Chemical" },
  { sNo: 66, category: "Leather & Leather Products", cabId: "T-1397", cabName: "Planet Analysis Private Limited", address: "145-B, IInd Floor, Co-Operative Industrial Estate, Udyog Nagar, Dada Nagar", district: "Kanpur", discipline: "Mechanical, Chemical" },
  { sNo: 67, category: "Leather & Leather Products", cabId: "T-7548", cabName: "QC Laboratory, Ordnance Equipment Factory", address: "Phool Bagh", district: "Kanpur", discipline: "Mechanical, Chemical" },
  { sNo: 68, category: "Leather & Leather Products", cabId: "T-8079", cabName: "International Testing Center (FDDI)", address: "A-10/A, Sector-24", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 69, category: "Leather & Leather Products", cabId: "T-8608", cabName: "Quality Testing & Research Lab", address: "Plot No. 28, 29, Prem Vihar, Bisrakh Road, Chhapraula", district: "Ghaziabad", discipline: "Mechanical, Chemical" },
  { sNo: 70, category: "Plastic Products", cabId: "T-5023", cabName: "The Supreme Industries Limited (Testing Laboratory)", address: "H1-H8, H1/A, H9/1 and UPSIDC Industrial Area", district: "Kanpur", discipline: "Mechanical, Chemical" },
  { sNo: 71, category: "Plastic Products", cabId: "T-11760", cabName: "Accurate Test Solutions LLP", address: "Second Floor, B-50, Sector-2", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 72, category: "Sports Goods", cabId: "T-2302", cabName: "Testtex India Laboratories Pvt. Ltd., Noida Branch", address: "C-57, Sector 65", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical, Electrical" },
  { sNo: 73, category: "Sports Goods", cabId: "T-3243", cabName: "Eurofins Consumer Product Testing India Private Limited", address: "A-95, Sector 58", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical, Electrical" },
  { sNo: 74, category: "Sports Goods", cabId: "T-0141", cabName: "Central Institute of Petrochemicals Engineering & Technology (CIPET)", address: "B-27, Amausi Industrial Area", district: "Lucknow", discipline: "Mechanical, Chemical" },
  { sNo: 75, category: "Textile Goods", cabId: "T-4607", cabName: "Plastics Woven Bag Testing Lab – TTRC (A Division of Lohia Corp Limited)", address: "Amiliha TTRC Complex", district: "Kanpur", discipline: "Mechanical" },
  { sNo: 76, category: "Textile Goods", cabId: "T-0402", cabName: "Quality Control Laboratory, Ordnance Clothing Factory", address: "Ordnance Clothing Factory", district: "Shahjahanpur", discipline: "Mechanical, Chemical" },
  { sNo: 77, category: "Textile Goods", cabId: "T-8553", cabName: "Regional Laboratory of Textiles Committee, Kanpur", address: "117/48, Sarvodaya Nagar", district: "Kanpur", discipline: "Mechanical, Chemical" },
  { sNo: 78, category: "Textile Goods", cabId: "T-9373", cabName: "Sahu Testing Laboratory (STL)", address: "A-114, Sector-65", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 79, category: "Textile Goods", cabId: "T-11003", cabName: "National Test House (Satellite Centre)", address: "Babatpur-Kapseti Road, Kuru, Anai (Payakpur)", district: "Varanasi", discipline: "Mechanical, Chemical" },
  { sNo: 80, category: "Utensils", cabId: "T-4345", cabName: "Elmech Labs Pvt. Ltd.", address: "Suite No. B05, A-37, Sector-63", district: "NOIDA, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 81, category: "Utensils", cabId: "T-1915", cabName: "Carsul Laboratories", address: "29-30 LGF (Basement), Suchita Complex, Ambedkar", district: "Ghaziabad", discipline: "Mechanical, Chemical" },
  { sNo: 82, category: "Utensils", cabId: "T-2871", cabName: "Shreeram Inspection Services LLP", address: "D-432, Govindpuram", district: "Ghaziabad", discipline: "Mechanical, Chemical" },
  { sNo: 83, category: "Utensils", cabId: "T-3054", cabName: "Testing Laboratory, Good Luck Engineering Co.", address: "Khasra No. 2839, Gram-Dhoom Manikpur, G.T. Road", district: "Dadri, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 84, category: "Utensils", cabId: "T-1359", cabName: "Inspection & Testing Engineers (Lab Division)", address: "F 22-23, Site C, Surajpur Industrial Area, UPSIDC", district: "Greater Noida, GB Nagar", discipline: "Mechanical, Chemical" },
  { sNo: 85, category: "Utensils", cabId: "T-1525", cabName: "IRC Engineering Services India Pvt. Ltd.", address: "A-53, Sector-63, Gautam Buddha Nagar", district: "NOIDA, GB Nagar", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 86, category: "Utensils", cabId: "T-6359", cabName: "Unique NDTify Private Limited", address: "D-Block, House No. 18, Krishna Nagar, Bagu", district: "Ghaziabad", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 87, category: "Utensils", cabId: "T-5355", cabName: "PTC Industries Limited (Testing Laboratory)", address: "NH-25A, Sarai Sahjadi", district: "Lucknow", discipline: "Mechanical, Chemical" },
  { sNo: 88, category: "Utensils", cabId: "T-5299", cabName: "Ambica Steels Limited Testing Division", address: "Plot No. 51/2, Site-4, UPSIDC Industrial Area", district: "Sahibabad", discipline: "Mechanical, Chemical" },
  { sNo: 89, category: "Utensils", cabId: "T-7620", cabName: "Cell Com Teleservices Private Limited", address: "A-52, UPSIDC Industrial Area", district: "Sikandarabad", discipline: "Mechanical, Chemical" },
  { sNo: 90, category: "Utensils", cabId: "T-8502", cabName: "JSAW Laboratory Kosi Kalan", address: "A1, UPSIDC Industrial Area, Nandgaon Road, Kosi Kalan", district: "Mathura", discipline: "Mechanical, Chemical" },
  { sNo: 91, category: "Utensils", cabId: "T-10165", cabName: "Material Testing Laboratory, RACL Geartech Limited", address: "A-3, Industrial Area, Gajraula", district: "Amroha", discipline: "Mechanical, Chemical" },
  { sNo: 92, category: "Utensils", cabId: "T-10307", cabName: "Chemical & Metallurgical Testing Laboratory, Northern Railway, Charbagh Workshop", address: "Rolling Stock Workshop, Charbagh", district: "Lucknow", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 93, category: "Wood Products", cabId: "T-3233", cabName: "ADS Labtech", address: "39/2/10A, Sahibabad Industrial Area", district: "Sahibabad, Ghaziabad", discipline: "Non-destructive, Mechanical, Chemical, Electrical" },
  { sNo: 94, category: "Wood Products", cabId: "T-1344", cabName: "Materials Engineering Lab, Tata Motors Ltd", address: "Chinhat Industrial Area, Deva Road", district: "Lucknow", discipline: "Mechanical, Chemical" },
  { sNo: 95, category: "Wood Products", cabId: "T-0902", cabName: "Spectro Research Lab Ventures (P) Ltd.", address: "G-3, Bajrangbali Industrial Area", district: "Kanpur", discipline: "Non-destructive, Mechanical, Chemical" },
  { sNo: 96, category: "Wood Products", cabId: "T-8293", cabName: "Ghaziabad Testing Laboratories Pvt. Ltd.", address: "AO 150, Amrit Steel Compound, South Side GT Road Industrial Area", district: "Ghaziabad", discipline: "Non-destructive, Biological, Mechanical, Chemical, Electrical" },
];

export default function NablLabsPage() {
  return (
    <div className="nabl-labs-page">
      <section className="page-hero nabl-hero relative">
        <div className="page-hero-overlay"></div>
        <div className="container page-hero-content relative z-10">
          <h1 className="page-hero-title">List of NABL Labs</h1>
          <p className="page-hero-subtitle">
            NABL-accredited laboratories in Uttar Pradesh providing quality testing,
            calibration and certification for ODOP products.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-visual">
              <div className="about-image-stack">
                <img
                  src="/assets/img/NABL.jpg"
                  alt="NABL Accredited Laboratory"
                  className="about-main-image"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-overview-content">
              <div className="section-eyebrow">Quality Assurance</div>
              <h2 className="section-title">NABL-Accredited Laboratories</h2>
              <p>
                In Uttar Pradesh, National Accreditation Board for Testing and Calibration
                Laboratories (NABL)-accredited laboratories play a crucial role in
                strengthening the One District One Product (ODOP) initiative by ensuring
                that products meet nationally and internationally accepted quality standards.
              </p>
              <p>
                These labs provide reliable testing, calibration, and certification services
                for ODOP products such as handicrafts, food items, and textiles, helping
                local producers validate product quality, safety, and compliance.
              </p>
              <p>
                This accreditation builds trust among buyers, exporters, and regulatory
                bodies, making ODOP goods more competitive in both domestic and global
                markets. By supporting standardization and quality assurance,
                NABL-accredited labs directly contribute to enhancing the credibility,
                export potential, and overall value of ODOP products from the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="nabl-main-content section">
        <div className="container">
          <section className="nabl-section">
            <h2>District-wise NABL-Accredited Laboratories ({nablLabs.length} Labs)</h2>
            <div className="nabl-table-scroll">
              <table className="nabl-table">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>ODOP Category</th>
                    <th>CAB ID</th>
                    <th>Laboratory Name</th>
                    <th>Address</th>
                    <th>District</th>
                    <th>Discipline</th>
                  </tr>
                </thead>
                <tbody>
                  {nablLabs.map((lab) => (
                    <tr key={`${lab.cabId}-${lab.sNo}`}>
                      <td style={{ textAlign: "center", fontWeight: "600", color: "#153b66" }}>
                        {lab.sNo}
                      </td>
                      <td>
                        <span className="category-chip">
                          {lab.category}
                        </span>
                      </td>
                      <td className="cab-id">
                        {lab.cabId}
                      </td>
                      <td style={{ fontWeight: "500", color: "#1f324a" }}>
                        {lab.cabName}
                      </td>
                      <td style={{ color: "#4a6078" }}>
                        {lab.address}
                      </td>
                      <td style={{ fontWeight: "500" }}>
                        {lab.district}
                      </td>
                      <td style={{ color: "#4a6078" }}>
                        {lab.discipline}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="source-note">
              Source: National Accreditation Board for Testing and Calibration Laboratories (NABL).
              For the latest accreditation status, visit{" "}
              <a
                href="https://www.nabl-india.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.nabl-india.org
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
