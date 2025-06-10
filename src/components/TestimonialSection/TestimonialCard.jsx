export default function TestimonialCard({data}) {
  const { name, title, company, rating, text } = data;
    return (
      <div className="bg-[#192539] border border-[#192539] rounded-4xl p-6 text-white shadow-md transition hover:shadow-lg">
        {/* Rating */}
        <div className="flex items-center mb-4 text-[#F5C252] text-2xl">
          {'★'.repeat(rating)}
          {'☆'.repeat(5 - rating)}
        </div>
  
        {/* Content */}
        <p className="text-sm text-gray-medium mb-6">
          {text}
        </p>
  
        {/* Footer */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-700 w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex flex-col">
            <span className="flex flex-wrap">
            <span className="text-sm font-semibold text-blue mr-[2px]">{name} <span className="text-gray-medium">|</span></span>
            <span className="text-[13px] text-gray-light tracking-tighter ml-[2px]">{title}</span>
            </span>
            
            <span className="text-[#FF3008] text-xs">{company}</span>
          </div>
        </div>
      </div>
    )
  }
  