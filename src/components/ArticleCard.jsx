import React, { useMemo } from "react";
import { Clock, BookmarkPlus } from "lucide-react";
import { truncateTo30Chars, formatDate } from "../utils";

const ArticleCard = ({ article }) => {
  const articleAuthor = useMemo(
    () => truncateTo30Chars(article.author),
    [article]
  );

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      <img
        src={article.urlToImage || "https://via.placeholder.com/300x200"}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col h-full">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-600">
              {article.category}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <BookmarkPlus className="h-5 w-5" />
            </button>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {article.description}
          </p>
        </div>

        {/* Author and Date/Time section */}
        <div className="flex flex-col flex-grow justify-between mt-auto text-gray-500">
          <div className="flex items-center space-x-4">
            <img
              src={`https://ui-avatars.com/api/?name=${article.author}&background=random`}
              alt={article.author}
              className="h-6 w-6 rounded-full"
            />
            <span>{articleAuthor}</span>
          </div>

          {/* Date and Time at the bottom */}
          <div className="mt-4 w-full flex items-center justify-between text-xs">
            <p>{formatDate(article.publishedAt).date}</p>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatDate(article.publishedAt).time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
