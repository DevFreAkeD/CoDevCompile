import { icons } from '../constants';

const Sidebar = () => {
  return (
    <div className="h-screen w-16 flex flex-col bg-gray-800 text-white shadow-lg">
      <div className="flex flex-col items-center mt-4">
        {icons.map(item => (
          <button key={item.id} className="p-3 mt-2 hover:bg-gray-700 rounded-lg" aria-label={item.title}>
            <img src={item.icon} alt={item.title} width={item.width} height={item.height} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
