import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
function Card(props) {
  const handleRedirect = () => {
    window.location.href = props.url;
  };

  return (
    <div className="flex flex-col flex-1 border-t-2 border-t-gray-200 mx-2 overflow-hidden w-full ">
      <h2 className="text-2xl my-4">{props.heading}</h2>
      <div className="group cursor-pointer" onClick={handleRedirect}>
        <div className="flex flex-row items-center">
          <h2 className="text-xl">{props.text}</h2>
          <div className="flex items-center justify-center w-8 h-8 mx-2 bg-red-500 rounded-full group-hover:bg-red-600">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
