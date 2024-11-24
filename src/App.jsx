import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useDispatch } from "react-redux";
import FilterBar from "./components/FilterBar";
import { fetchNewsThunk } from "./redux/reducers/actions/fetchNews";
import NewsFeed from "./components/NewsFeed";


function App() {
  const dispatch = useDispatch();
  const [latestLoading, _] = useState(true); // Pagination loading
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const fetchNews = async () => {
    dispatch(fetchNewsThunk()).unwrap().catch(() => toast.error("Failed to fetch news"))
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isOpen={isSidebarOpen} />

      <main className="transition-all duration-300 ease-in-out lg:ml-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-bold mb-2 text-slate-600">
            Top Categories
          </h2>
          {/*Filters Section  */}
          <FilterBar />


          <div className="flex flex-col lg:flex-row lg:space-x-6">
            {/* Main News Section */}
            <NewsFeed />

            {/* Latest News Section */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-xl font-bold mb-4 text-slate-600">
                Latest News
              </h2>
              {latestLoading ? (
                <div className="space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 h-20 rounded-lg mb-4"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {/* {latestArticles.map((article) => (
                    <ArticleCardHorizontal key={article.id} article={article} />
                  ))} */}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
