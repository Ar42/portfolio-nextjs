import Introduction from "./introduction";

const LeftBar = () => {
  return (
    <div className="max-h-screen p-4 mb-6 overflow-y-auto shadow-xl lg:min-h-screen scrollbar-hide lg:mb-0">
      <Introduction />
    </div>
  );
};

export default LeftBar;
