import type { Metadata } from "next";
import { fetchHamaraPradeshDistricts } from "@/services/hamara-pradesh.service";
import { decrypt128 } from "@/lib/api";
import DistrictList from "./DistrictList";
import { DistrictProduct } from "@/components/DistrictProductCard";

export const metadata: Metadata = {
  title: "District Wise Products | ODOP UP Portal",
  description: "District wise ODOP products of Uttar Pradesh. Browse all 75 districts with primary, secondary and tertiary products.",
};

const fallbackDistricts: DistrictProduct[] = [
  { slug: "agra", name: "Agra", img: "/assets/img/district/agra.jpg", product: "Leather Products", sec: "Marble inlay work", ter: "Petha Making", profile: "/districts/agra" },
  { slug: "aligarh", name: "Aligarh", img: "/assets/img/district/aligarh.jpg", product: "Locks & Hardware", sec: "Brass Furniture Hardware", ter: "Steel Sheet Cutting & Stamping", profile: "#" },
  { slug: "ambedkar-nagar", name: "Ambedkar Nagar", img: "/assets/img/district/ambedkar-nagar.jpg", product: "Textile Products", sec: "Textile Yarn", ter: "Recycled Textile Rug & Mat", profile: "#" },
  { slug: "amethi", name: "Amethi", img: "/assets/img/district/amethi.jpg", product: "Moonj Products", sec: "Moonj Carry Bags", ter: "Murabba", profile: "#" },
  { slug: "amroha", name: "Amroha", img: "/assets/img/district/amroha.jpg", product: "Musical Instruments", sec: "Hosiery & Innerwear", ter: "Mango", profile: "#" },
  { slug: "auraiya", name: "Auraiya", img: "/assets/img/district/auraiya.jpg", product: "Food Processing (Desi Ghee)", sec: "Cattle Feed", ter: "Fodder", profile: "#" },
  { slug: "ayodhya", name: "Ayodhya", img: "/assets/img/district/ayodhya.jpg", product: "Jaggery", sec: "Sugarcane Crushing &", ter: "Til Laddoo & Gur Laddoo", profile: "#" },
  { slug: "azamgarh", name: "Azamgarh", img: "/assets/img/district/azamgarh.jpg", product: "Black Pottery", sec: "Black Pottery Designer Tableware", ter: "Handloom Cloth", profile: "#" },
  { slug: "baghpat", name: "Baghpat", img: "/assets/img/district/baghpat.jpg", product: "Home Furnishings", sec: "Custom Hand-quilted Luxury Blankets", ter: "Custom Hand-quilted Luxury Blankets", profile: "#" },
  { slug: "bahraich", name: "Bahraich", img: "/assets/img/district/bahraich.jpg", product: "(Wheat-Stalk) Handicrafts", sec: "Wheat Stalk Luxury Gift Box", ter: "Wheat Stalk 3D Wall Art & Décor", profile: "#" },
  { slug: "ballia", name: "Ballia", img: "/assets/img/district/ballia.jpg", product: "Bindi (Tikuli)", sec: "Designer Crystal & Pearl Bindis", ter: "Sattu", profile: "#" },
  { slug: "balrampur", name: "Balrampur", img: "/assets/img/district/balrampur.jpg", product: "Food Processing (Pulses)", sec: "Bulk Pulse Cleaning & Grading", ter: "Pulse Husk (Churi)", profile: "#" },
  { slug: "banda", name: "Banda", img: "/assets/img/district/banda.jpg", product: "Shazar Stone Craft", sec: "Gemstone Certification & Testing", ter: "Decorative Home Décor Items (stone-based)", profile: "#" },
  { slug: "barabanki", name: "Barabanki", img: "/assets/img/district/barabanki.jpg", product: "Textile & handloom business", sec: "Mentha Oil", ter: "Menthol Crystal", profile: "#" },
  { slug: "bareilly", name: "Bareilly", img: "/assets/img/district/bareilly.jpg", product: "Zari-Zardozi", sec: "Zari Thread", ter: "Hosiery", profile: "#" },
  { slug: "basti", name: "Basti", img: "/assets/img/district/basti.jpg", product: "Wood Craft", sec: "Sugarcane Vinegar", ter: "Timber & Saw Mill", profile: "#" },
  { slug: "bhadohi", name: "Bhadohi", img: "/assets/img/district/bhadohi.jpg", product: "Carpet (Dari)", sec: "Wool", ter: "Carpet Cleaning & Repair Service", profile: "#" },
  { slug: "bijnor", name: "Bijnor", img: "/assets/img/district/bijnor.jpg", product: "Wood Craft", sec: "Wood Seasoning & Treatment Plant", ter: "Molasses-Based Products", profile: "#" },
  { slug: "budaun", name: "Budaun", img: "/assets/img/district/budaun.jpg", product: "Zari-Zardozi", sec: "Embroidery Design Studio (Manual)", ter: "Boutique", profile: "#" },
  { slug: "bulandshahr", name: "Bulandshahr", img: "/assets/img/district/bulandshahr.jpg", product: "Ceramic Product", sec: "Ceramic Moulding & Casting", ter: "Hand-painted Ceramic Tile Murals", profile: "#" },
  { slug: "chandauli", name: "Chandauli", img: "/assets/img/district/chandauli.jpg", product: "Zari-Zardozi", sec: "Hand Embroidery Garment", ter: "Black Rice Flour", profile: "#" },
  { slug: "chitrakoot", name: "Chitrakoot", img: "/assets/img/district/chitrakoot.jpg", product: "Wooden Toys", sec: "Handicraft Souvenir Products", ter: "School Educational Kits", profile: "#" },
  { slug: "deoria", name: "Deoria", img: "/assets/img/district/deoria.jpg", product: "Embroidery & Weaving Products", sec: "Ethnic Wear", ter: "Sofa Cover", profile: "#" },
  { slug: "etah", name: "Etah", img: "/assets/img/district/etah.jpg", product: "Ankle Bells (Ghungroo) and Bells", sec: "Brass Bell", ter: "Brass Scrap", profile: "#" },
  { slug: "etawah", name: "Etawah", img: "/assets/img/district/etawah.jpg", product: "Tailoring and Embroidery", sec: "School Uniform", ter: "Hand-embroidered Luxury Kaftans", profile: "#" },
  { slug: "farrukhabad", name: "Farrukhabad", img: "/assets/img/district/farrukhabad.jpg", product: "Textile Printing and Zari Zardozi", sec: "Block Printed Silk Wraps & Stoles", ter: "Potato (chips, flakes)", profile: "#" },
  { slug: "fatehpur", name: "Fatehpur", img: "/assets/img/district/fatehpur.jpg", product: "Bedsheets", sec: "Home Textile Product-Table Covers", ter: "Steel Fabrication Unit (Gates, Grills)", profile: "#" },
  { slug: "firozabad", name: "Firozabad", img: "/assets/img/district/firozabad.jpg", product: "Glassware & bangles", sec: "Glass Lamp", ter: "Silica Sand", profile: "#" },
  { slug: "gautam-buddh-nagar", name: "Gautam B. Nagar", img: "/assets/img/district/gautam-buddh-nagar.jpg", product: "Readymade Garments", sec: "Blazers & Suits", ter: "Bakery", profile: "#" },
  { slug: "ghaziabad", name: "Ghaziabad", img: "/assets/img/district/ghaziabad.jpg", product: "Engineering Goods", sec: "Gear & Shaft", ter: "Laser Cutting & Bending", profile: "#" },
  { slug: "ghazipur", name: "Ghazipur", img: "/assets/img/district/ghazipur.jpg", product: "Jute Wall Hanging", sec: "Rose Water", ter: "Jute Bag", profile: "#" },
  { slug: "gonda", name: "Gonda", img: "/assets/img/district/gonda.jpg", product: "Pulses Processing", sec: "Sugarcane Processing", ter: "Jaggery", profile: "#" },
  { slug: "gorakhpur", name: "Gorakhpur", img: "/assets/img/district/gorakhpur.jpg", product: "Terracotta", sec: "Plastic Toys", ter: "Banana Fiber Products", profile: "#" },
  { slug: "hamirpur", name: "Hamirpur", img: "/assets/img/district/hamirpur.jpg", product: "Jhansi Zari", sec: "Leather Products", ter: "Mustard Oil", profile: "#" },
  { slug: "hapur", name: "Hapur", img: "/assets/img/district/hapur.jpg", product: "Home Furnishing (Rajai)", sec: "Cotton Yarn", ter: "Pillow & Cushion Covers", profile: "#" },
  { slug: "hardoi", name: "Hardoi", img: "/assets/img/district/hardoi.jpg", product: "Sheetla Mata Temple Products", sec: "Handloom Saree", ter: "Sugarcane Products", profile: "#" },
  { slug: "hathras", name: "Hathras", img: "/assets/img/district/hathras.jpg", product: "Asafoetida", sec: "Refined Edible Oil", ter: "Oil Cake", profile: "#" },
  { slug: "jalaun", name: "Jalaun", img: "/assets/img/district/jalaun.jpg", product: "Handmade Paper", sec: "Marble Handicraft", ter: "Stone Crafts", profile: "#" },
  { slug: "jaunpur", name: "Jaunpur", img: "/assets/img/district/jaunpur.jpg", product: "Imitation Jewellery", sec: "Cotton Saris", ter: "Stone Sculptures", profile: "#" },
  { slug: "jhansi", name: "Jhansi", img: "/assets/img/district/jhansi.jpg", product: "Soft Stone Craft (Stonecrafts)", sec: "Bell Metal Craft", ter: "Groundnut Oil", profile: "#" },
  { slug: "kannauj", name: "Kannauj", img: "/assets/img/district/kannauj.jpg", product: "Perfume (Ittar)", sec: "Rose Water", ter: "Medicinal Plants", profile: "#" },
  { slug: "kanpur-dehat", name: "Kanpur Dehat", img: "/assets/img/district/kanpur-dehat.jpg", product: "Aluminium Utensils", sec: "Moong Dal", ter: "Wheat Products", profile: "#" },
  { slug: "kanpur-nagar", name: "Kanpur Nagar", img: "/assets/img/district/kanpur-nagar.jpg", product: "Leather & Leather Products", sec: "Saddlery", ter: "Chemical Products", profile: "#" },
  { slug: "kasganj", name: "Kasganj", img: "/assets/img/district/kasganj.jpg", product: "Zari-Zardozi", sec: "Hand Embroidery", ter: "Footwear", profile: "#" },
  { slug: "kaushambi", name: "Kaushambi", img: "/assets/img/district/kaushambi.jpg", product: "Banana Fibre Products", sec: "Banana Chips", ter: "Banana Powder", profile: "#" },
  { slug: "lakhimpur-kheri", name: "Kheri", img: "/assets/img/district/lakhimpur-kheri.jpg", product: "Tharu Tribal Craft", sec: "Sugar Processing", ter: "Timber", profile: "#" },
  { slug: "kushinagar", name: "Kushinagar", img: "/assets/img/district/kushinagar.jpg", product: "Banana Fibre Products", sec: "Agarbatti", ter: "Sugar Products", profile: "#" },
  { slug: "lalitpur", name: "Lalitpur", img: "/assets/img/district/lalitpur.jpg", product: "Dhurrie (Durry)", sec: "Stone Carving", ter: "Granite", profile: "#" },
  { slug: "lucknow", name: "Lucknow", img: "/assets/img/district/lucknow.jpg", product: "Chikankari", sec: "Zardozi Embroidery", ter: "Leather Products", profile: "#" },
  { slug: "maharajganj", name: "Maharajganj", img: "/assets/img/district/maharajganj.jpg", product: "Furniture & Wood Craft", sec: "Sugarcane Products", ter: "Wheat Products", profile: "#" },
  { slug: "mahoba", name: "Mahoba", img: "/assets/img/district/mahoba.jpg", product: "Gaura Stone Craft", sec: "Honey Products", ter: "Mustard Oil", profile: "#" },
  { slug: "mainpuri", name: "Mainpuri", img: "/assets/img/district/mainpuri.jpg", product: "Tarkashi (Wire Inlay Craft)", sec: "Potato Chips", ter: "Dairy Products", profile: "#" },
  { slug: "mathura", name: "Mathura", img: "/assets/img/district/mathura.jpg", product: "Dairy Products (Sweets)", sec: "Stone Sculptures", ter: "Pickle", profile: "#" },
  { slug: "mau", name: "Mau", img: "/assets/img/district/mau.jpg", product: "Power Loom Textile", sec: "Sarees & Dress Material", ter: "Surgical Bandage", profile: "#" },
  { slug: "meerut", name: "Meerut", img: "/assets/img/district/meerut.jpg", product: "Sports Goods", sec: "Scissors & Cutlery", ter: "Sugarcane Products", profile: "#" },
  { slug: "mirzapur", name: "Mirzapur", img: "/assets/img/district/mirzapur.jpg", product: "Carpet & Dari", sec: "Stone Dust Products", ter: "Brass Idols", profile: "#" },
  { slug: "moradabad", name: "Moradabad", img: "/assets/img/district/moradabad.jpg", product: "Metal Craft (Brass)", sec: "Electrical Fittings", ter: "Imitation Jewellery", profile: "#" },
  { slug: "muzaffarnagar", name: "Muzaffarnagar", img: "/assets/img/district/muzaffarnagar.jpg", product: "Jaggery (Gur)", sec: "Sugar", ter: "Steel & Iron Fabrication", profile: "#" },
  { slug: "pilibhit", name: "Pilibhit", img: "/assets/img/district/pilibhit.jpg", product: "Flute (Bansuri)", sec: "Tiger Reserve Tourism", ter: "Sugar Products", profile: "#" },
  { slug: "pratapgarh", name: "Pratapgarh", img: "/assets/img/district/pratapgarh.jpg", product: "Amla Products", sec: "Banana Products", ter: "Honey", profile: "#" },
  { slug: "prayagraj", name: "Prayagraj", img: "/assets/img/district/prayagraj.jpg", product: "Moonj Products", sec: "Pottery", ter: "Honey", profile: "#" },
  { slug: "rae-bareli", name: "Rae Bareli", img: "/assets/img/district/rae-bareli.jpg", product: "Electrical Machine Parts", sec: "Wooden Furniture", ter: "Textile Products", profile: "#" },
  { slug: "rampur", name: "Rampur", img: "/assets/img/district/rampur.jpg", product: "Patchwork Fabric", sec: "Rampur Knife (Rampuri Knife)", ter: "Printed Fabric", profile: "#" },
  { slug: "saharanpur", name: "Saharanpur", img: "/assets/img/district/saharanpur.jpg", product: "Wood Craft", sec: "Furniture", ter: "Sugar Products", profile: "#" },
  { slug: "sambhal", name: "Sambhal", img: "/assets/img/district/sambhal.jpg", product: "Horn & Bone Craft", sec: "Handicraft Products", ter: "Badminton Shuttlecock", profile: "#" },
  { slug: "sant-kabir-nagar", name: "Sant Kabir Nagar", img: "/assets/img/district/sant-kabir-nagar.jpg", product: "Brass Craft", sec: "Paddy Processing", ter: "Wheat Products", profile: "#" },
  { slug: "shahjahanpur", name: "Shahjahanpur", img: "/assets/img/district/shahjahanpur.jpg", product: "Zari-Zardozi", sec: "Rose Water", ter: "Sugarcane Products", profile: "#" },
  { slug: "shamli", name: "Shamli", img: "/assets/img/district/shamli.jpg", product: "Jaggery & Sugar", sec: "Steel Fabrication", ter: "Footwear", profile: "#" },
  { slug: "shravasti", name: "Shravasti", img: "/assets/img/district/shravasti.jpg", product: "Basket Making (Moonj)", sec: "Agarbatti", ter: "Honey", profile: "#" },
  { slug: "siddharthnagar", name: "Siddharthnagar", img: "/assets/img/district/siddharthnagar.jpg", product: "Kala Namak Rice", sec: "Siyabul Rice Products", ter: "Sugar", profile: "#" },
  { slug: "sitapur", name: "Sitapur", img: "/assets/img/district/sitapur.jpg", product: "Dari & Durrie (carpet)", sec: "Handloom Products", ter: "Mustard Oil", profile: "#" },
  { slug: "sonbhadra", name: "Sonbhadra", img: "/assets/img/district/sonbhadra.jpg", product: "Carpet", sec: "Stone Carving", ter: "Bauxite Mining Products", profile: "#" },
  { slug: "sultanpur", name: "Sultanpur", img: "/assets/img/district/sultanpur.jpg", product: "Moonj Products", sec: "Banana Products", ter: "Sugarcane Products", profile: "#" },
  { slug: "unnao", name: "Unnao", img: "/assets/img/district/unnao.jpg", product: "Zari Zardozi Work", sec: "Leather Tanning", ter: "Cotton Textile", profile: "#" },
  { slug: "varanasi", name: "Varanasi", img: "/assets/img/district/varanasi.jpg", product: "Banarasi Silk Saree", sec: "Gulabi Meenakari", ter: "Wooden Toys", profile: "#" },
];


async function getDistricts(): Promise<DistrictProduct[]> {
  try {
    const response = await fetchHamaraPradeshDistricts({
      next: { revalidate: 3600 },
    });
    
    let data: any
    let decryptedData: any = await decrypt128((response.data as any).body);
    const items = decryptedData?.data?.district ||  [];
    console.log(items)

    if (!Array.isArray(items) || items.length === 0) {
      return fallbackDistricts;
    }

    return items.map((item: any) => ({
      id: item.id,
      slug: item.slug || item.district_name?.toLowerCase().replace(/\s+/g, "-") || "",
      name: item.district_name || item.name || "District",
      img: item.image || item.thumbnail || `/assets/img/district/${item.slug}.jpg`,
      product: item.title || "-",
      secondary_product: item.secondary_product || "",
      tertiary_product: item.tertiary_product || "",
      profile: item.slug ? `/districts/${item.slug}` : "#",
    }));
  } catch (error) {
    console.error("Error fetching districts:", error);
    return fallbackDistricts;
  }
}

export default async function DistrictsPage() {
  const districts = await getDistricts();

  return (
    <main className="main-content district-products-page">
      {/* ===== PAGE HERO ===== */}
      <section className="page-hero districts-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1 className="page-hero-title">All 75 Districts and Their Products</h1>
          <p className="page-hero-subtitle">
            Explore ODOP products district-wise using the same card-based layout used on the homepage.
          </p>
          <form className="hero-search">
            <label className="hero-search-field" htmlFor="district-products-ai-search">
              <i className="fas fa-search" aria-hidden="true" />
              <input
                id="district-products-ai-search"
                type="text"
                autoComplete="off"
                placeholder="Ask AI something like 'Show leather districts in Uttar Pradesh'"
              />
              <button className="hero-search-action" type="submit" aria-label="Search with AI">
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </button>
            </label>
          </form>
          <div className="hero-prompt-tags" aria-label="Suggested AI searches">
            <button className="hero-prompt-chip" type="button">Leather districts</button>
            <button className="hero-prompt-chip" type="button">Handicraft districts</button>
            <button className="hero-prompt-chip" type="button">Textile ODOP districts</button>
            <button className="hero-prompt-chip" type="button">Food product districts</button>
          </div>
        </div>
      </section>

      {/* ===== DISTRICTS GRID ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Explore</span>
            <h2>District-wise ODOP Products</h2>
            <p>Complete district-wise listing with primary, secondary and tertiary products.</p>
            <div className="divider"><span /><span /><span /></div>
          </div>
          
          <DistrictList districts={districts} />
        </div>
      </section>
    </main>
  );
}

