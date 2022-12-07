import Introduction from "./introduction";

const LeftBar = () => {
  return (
    <div className="p-4 shadow-xl min-h-screen max-h-screen overflow-y-auto scrollbar-hide mb-6 lg:mb-0">
      <Introduction />
    </div>
  );
};

export default LeftBar;
