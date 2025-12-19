import partnerWF from "@/assets/partner-wf.svg";
import partnerIKA from "@/assets/partner-ika.svg";
import partnerRUB from "@/assets/partner-rub.svg";

const Partners = () => {
  const partners = [
    { name: "Westfälische Hochschule", logo: partnerWF },
    { name: "IKA", logo: partnerIKA },
    { name: "Ruhr-Universität Bochum", logo: partnerRUB },
  ];

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="py-12 mb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-brand-blue-bright">partners</span>
        </h2>
      </div>

      {/* Infinite scroll container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
