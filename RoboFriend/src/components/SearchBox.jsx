const SearchBox = ({handleSearchfield}) => {
  return (
    <div className="m-6 p-2 w-full text-center">
      <input
        type="search"
        placeholder="search..."
        onChange={handleSearchfield}
        className=" p-3 rounded-lg border-2 border-slate-600 h-9 sm:w-2/6 w-4/6 focus:border-none bg-indigo-100 text-black"
      />
    </div>
  );
};

export default SearchBox;
