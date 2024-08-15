import { CiSearch } from "react-icons/ci";

const SearchBar = ({handleChange}) => {
  return (
    <div className="mt-[10rem] mx-6">
      <h1 className="font-bold text-[3rem]">Dictionary</h1>
      <div className="relative">
        <CiSearch className="ml-1 text-[#B6B6B6] absolute bottom-3  text-3xl font-bold " />

        <input
        onChange={handleChange}
          type="text"
          placeholder="Search here"
          className="w-full pl-8  py-4 rounded-sm bg-[#EBEBEA]"
        />
      </div>
      
    </div> 
  );
};
export default SearchBar;
