import Guide from "@/components/Guide";
import ListNovel from "@/components/ListNovel";
import ListReading from "@/components/ListReading";

const HomePage = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <div className="flex gap-4 font-source-sans-pro">
        <div className="w-3/4">
          <ListNovel />
        </div>

        <div className="w-1/4">
          <ListReading />
          <Guide />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
