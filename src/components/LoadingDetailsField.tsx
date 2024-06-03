export default function LoadingDetailsField() {
    return (
      <div className="animate-pulse flex justify-between items-center py-3 cursor-pointer gap-6 bg-gray-100 rounded-lg px-2 -mx-2 mb-2">
          <div className="flex w-full gap-3 items-center ">
           
            
            <div className={`w-12 h-12 bg-gray-300 rounded-full`}></div>
          
    
            <div className="flex flex-col items-stretch w-full max-w-40 text-start text-sm gap-1">
                <div className="w-full h-5 rounded pr-8">
                    <div className="bg-gray-300 w-full h-5 rounded"> </div>
                </div>
                <div className="bg-gray-300 w-full h-5 rounded"></div>
            </div>
          </div>
  
        
        <div className="bg-gray-300 w-5 h-5 rounded"> </div>
          
      </div>
    )
  }