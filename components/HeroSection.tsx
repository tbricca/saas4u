export const HeroSection = ({ 
    title, 
    description, // Changed from subtitle
    image 
  }: {
    title?: string;
    description?: string; // Match content.data field name
    image?: string;
  }) => {
    return (
      <div className="relative h-[400px] mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {title}
          </h1>
          <p className="text-xl text-center max-w-2xl">
            {description} {/* Changed from subtitle */}
          </p>
        </div>
      </div>
    )
  }
  
  