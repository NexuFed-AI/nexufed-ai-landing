import partnerWF from "@/assets/partner-wf.svg";
import partnerIKA from "@/assets/partner-ika.svg";
import partnerRUB from "@/assets/partner-rub.svg";

const Partners = () => {
  const partners = [
    { name: "Westfälische Hochschule", logo: partnerWF },
    { name: "IKA", logo: partnerIKA },
    { name: "Ruhr-Universität Bochum", logo: partnerRUB },
  ];

  // Duplicate once for seamless loop (animation moves -50% so we need 2 sets)
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-12 mb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-brand-blue-bright">partners</span>
        </h2>
      </div>

      {/* Infinite scroll container */}
      <div className="relative overflow-hidden">
        {/* Scrolling track - uses CSS animation for smooth infinite loop */}
        <div 
          className="flex w-max animate-scroll"
          style={{ willChange: 'transform' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-16 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
