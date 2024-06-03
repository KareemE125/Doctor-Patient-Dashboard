interface DetailsFieldProps {
    title: string;
    text: string;
    prefixIcon?: string;
    suffixIcon?: string;
    handleSuffixIconClick?: (event: React.MouseEvent) => void;
    prefixIconSize?: string;
    suffixIconSize?: string;
    switchBoldness?: boolean;
}


export default function DetailsField({title, text, prefixIcon, suffixIcon, handleSuffixIconClick, prefixIconSize  = "12", suffixIconSize="5", switchBoldness = false }: DetailsFieldProps) {
  return (
    <div className="flex justify-between items-center py-3 cursor-pointer">
        <div className="flex gap-3 items-center">
        {
            prefixIcon && 
            <img
                className={`w-${prefixIconSize} h-${prefixIconSize}`}
                src={prefixIcon}
                alt="icon-button"
            />
        }

        <div className="flex flex-col text-start text-sm">
            <p className={`${!switchBoldness? 'font-semibold ' : 'font-normal text-gray-500 dark:text-gray-300'}`}>{title}</p>
            <p className={`${switchBoldness? 'font-semibold ' : 'font-normal text-gray-500 dark:text-gray-300'}`}> {text} </p>
        </div>
        </div>

        {
            suffixIcon &&
            <button 
                className="hover:bg-white p-1 rounded-full"
                onClick={(event)=>{ 
                    event.stopPropagation();
                    if(handleSuffixIconClick) handleSuffixIconClick(event);
                }}
             >
                <img
                    className={`w-${suffixIconSize} h-${suffixIconSize}`}
                    src={suffixIcon}
                    alt="icon-button"
                />
            </button>
        }
    </div>
  )
}
