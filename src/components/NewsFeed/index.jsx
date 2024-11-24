import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../ArticleCard';
import Pagination from '../Pagination';
import { setCurrentPage } from '../../redux/reducers/filterSlice';
import toast from 'react-hot-toast';
import { fetchNewsThunk } from '../../redux/reducers/actions/fetchNews';
const ITEMS_PER_PAGE = 12;

const NewsFeed = () => {
    const { newsLoading: loading, newsData, newsCount } = useSelector((state) => state.News);
    const { currentPage } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    const totalPages = Math.ceil(newsCount / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        dispatch(setCurrentPage(page))
        dispatch(fetchNewsThunk()).unwrap().catch(() => toast.error("Failed to fetch news"))
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-slate-600">
                All News
            </h2>
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 max-w-full">
                        {newsData.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default NewsFeed