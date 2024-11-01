import React, { useState } from "react";


const videoThumbnail = "https://storage.googleapis.com/workexjobs_website/compressedv2/thumbnails/What_is_emotional_intelligence.svg"; 
const playIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAA2FBMVEX////dIiK7Ghrw8PAYGBgAAADZISG/GxsRAgIODg5NTU3bAAC4AADcExM4CAjpgYEKAADNdnb+9PS6ERHdHBzEQkLcDAwqKirn5+fy9vbhQ0Pxra25CwvlsbGRkZH539/xtLTodnbgNzfGxsb86ur1xMTunZ3maWnjWFjhTEz31NTzvLzAMTHJVVXRbm7dmJjNYWHZh4fgo6PrjIzS0tJvb2+lpaW4uLiEhIQ/Pz9dXV0zMzPfLi7lw8Pnz8/gtrZGLCx4EBBnDg4uBgYdBQWpFhanBAS5XFw7+MsRAAAH9UlEQVR4nO2ceXuiSBCH2yDjKLBJAJX2QsV45zABRZ1N9t7v/422AJN4NFINjfPH5vfMQxIYmpeq6urqViDkS1/60pf+F9IHofSfzRFKt++G16PxpNEP1ZiMR9fDO/unwenT7vXYVBSlppl70mqwyxxfd6cXJxvMeo2CBjgFpgBNKzR6s8EFibojTanF8OyR1RRt1L0Ilz7t9WMtxLBYv5e7H/XZGGGjI3uNZ3liDZpgJB6iSGCuZm5ebDYULiPtmUtpNPMg0u8afH47wboT7sRBL62VPrF6tlAkfZgmlo6l1YYCjWWPspopkqmMhBmrqQkwUyRNExPw+osYM0UylRcBLrQnijikQMokswunjZpYpkKh1phmY5qJdN27TGWWhalZyIEJqAoZwr2Zh51CKiU1VdPMiQmozJRUudkppEpnq1k+8fRBVUgR7dM87RRSKdyZwW7kzARUDc4sqk+E58xT1SZ8I86L4LGFLeWFh6l5ESag4uiCNnYKlVWmhg4rfSSsfkqSNsKG1fBCzgukDHFMgyyzFl6ZNZQD9d7FnBdI62EceHdB5wVS7hBQ+afyQ5mNZKbmBVL5oZKT1QBnKFOpCRuwzUbS6gcul9d+DLvDb6Kwkkyl9zEXilKePvwhxtVm/3wHnGEuY/Z3ucXuKULSR+1svaePMRfReh8nTEciMq02PmeqKSqitOu922iaAkLrbBHaQwXJPhRIQGjVejFAoAEqzI+hwIdZQ8vsx2eFLu6Wj6FgaBpn9GGtGwuFrKNOoYL0kAlLG8V6D1lwMqCCZaxChtAytTj/zZD1ARMKstY4Q3qIXYjB9b1YKAit1Avtsf1PxxYtsVBB1krZD80GO39OsQ3EQ0FcvqRd3Gbnzy62tXNQcG/pQkvrMlu7xvae81Bwd2lCq8ZuFDUYY6AgPXzjTg/amNkSet0uEQrSwzXvyGOarEi30bMYBFSK0FJYE0D81AoFBZV1nyu0mFMt/GQdCQWhxVPUMCfw6M6Hhgo//kKHFrP74Zda8FAQWhNsaDELhTE6AHigYORRcHFhsnLCJB+osKjBOMGcME7FryFwQgXpAWEs1pCMrM9TQaF6EatOzxfKTm6dBWX3v2GVAoqMzMRm+6cp3Z6XsFJvJW49GYnNzk+hBnPjCil+KPo6T2zVmDNiKkcoSm/VVFB6NS8oSn+9T2a6MqqM2iUvKGotSi1Eq0aV0T/uc4Gig2cVYaYA6p4B9YA7lwsKPFdVkTerPjCgFuKh6OsTFglaXTCgHkVDQTBdoduEVh8ZUHdioaj0PFdLeKYrlVUO2yKhqARpAO25qFXWxEE3sI0kQlH6+qBi0sCeDIO5mHCPbSYJilqPPMEUqcXKCBzd7zwUldpVbqSYzkdIWwRUimDaNdpmQk3R58dD0dcFMoGfiL0UhB6SY6Go9WxwpYFPMYfjQIj64hwUld6qKZGCNtlM5C0TFH1NF0y7Nt9ioAYZoOhgUUoZTFGbsR85IAuFUygIpnkWJHaJEAmZFI6hKH3L4rmwSXZCCP2Hq9MPoajEP6Yci1Wfc/rvACrVmHLSYrz3IH/yQkEwtVKngb0Wz30IqaMG5dbtRzClHFOOG7w/+8k2KtSN+SuNMlPmYIp0JsxDU6FCvfUERqLSY7Y08CFjnvAdnGdcVF09tiG+BXgubO35PBM2KxiqKgrpfD7gMZVIJRqK8EzfxYg5XT8WtlYQpdj6YF86fv4uhOkB9f1F/ARQCBTym574CbwAJtZknenAp4tRqU/o7zTbrQv1QKPF8e1v9BQwoxIGvSPhF6syMbFnxXHS08y8uZni5npxsvNP7EaV+6GsqbABN47pbLkZo1n2KvesSqkeyGoLKL7jkfg63qeeW7lRlVqIeiWGKrcuiKmh4tQu5RLtRiml7yLN8uiDhprpoUPIDOKzqFrN+HhmkEUFU6n8OfNU+kKkCw11Ieap7XZLmLHUVqYQ35ctqupTnwQ+c68/pl2IPkBSH8W+ncB+yBpZhvog9tUEgd7Qn3GykapvubyJo51YY8WNlYY65xpXvApam99+SdDvTKwWIPG9GEQu41UsFsvyzRnJv5xQGap63+Z1XJFX5fL3eMl/HCKp6vwhxctmdleSUUBymc0ly7tfbv78e99G6kM71QtdoqusvTqCqe6ty+/2OmDaVG52UH+FUEYL8lr19i3tK2YiC3SstQwqg8lgG2zkohxuox/Rrg3pyNGfxd3+78HmRiaO/A71jxos8t0v2lleERRB+c527UjOWq44llPfOivJlf3VSnLqsmdZy2AXHK0Q33M2HcvdlOE+Vq7lw/+XVnWfSp68g/p38Zj9pVgR1JKsXeISayvB1lkTySWdZbBdwe8OCY46RNqQFXXqxHFXYEeHuBItArHkeFTaREFZrksZeQ6gfLqUK55PfHlFPdJZS6sl2ciOFWxXZEOCoxtKqCxL1N2A0xypvqQ+sVxL2krOrqOU65ZIKA+g/KUPF3fAIhGUJ7tWsHUAagXu3FAX/vI61Cp69RDKIw54uZgX1HZFKMSrC7uWW4CiAAV7lkUJtmQdHHUB1gVii7g+8Ry6XQb7LbgP4uYAVd506sXOqlOXt52VL9c7lbq/WRLYU5Yry6W/O7rtVCqdtbdaroMffnHjB/t9Wfa9snioMHmGCaAcpQHoXXJHqrzviY7CTkgNu6QB/z7Pkj/Sl0gohsrbCiahHp2UMxRcgZvpAlApJAbqP1OqBgv+iM+pAAAAAElFTkSuQmCC"; 

// Video data with categories
const videosData = [
  {
    id: 1,
    title: "Lead Generation Facebook Ads tutorial",
    category: "Marketing",
    contentCreator: "Digital Desi",
    thumbnail: videoThumbnail,
  },
  {
    id: 2,
    title: "What is Product Life Cycle?",
    category: "Business Development",
    contentCreator: "Digital Desi",
    thumbnail: videoThumbnail,
  },
  {
    id: 3,
    title: "Understand consumer buying behaviour",
    category: "Marketing",
    contentCreator: "Digital Desi",
    thumbnail: videoThumbnail,
  },
  {
    id: 4,
    title: "Resources to Learn Marketing for FREE",
    category: "Marketing",
    contentCreator: "Digital Desi",
    thumbnail: videoThumbnail,
  },
  {
    id: 5,
    title: "How to Start a YouTube Channel?",
    category: "Corporate Fashion",
    contentCreator: "Creator Hub",
    thumbnail: videoThumbnail,
  },
  {
    id: 6,
    title: "Corporate Fashion Trends 2023",
    category: "Corporate Fashion",
    contentCreator: "Fashion Guru",
    thumbnail: videoThumbnail,
  },
  {
    id: 7,
    title: "Basics of Telecalling",
    category: "BPO & Telecaller",
    contentCreator: "CallCenter Expert",
    thumbnail: videoThumbnail,
  },
  {
    id: 8,
    title: "Effective Communication in BPO",
    category: "BPO & Telecaller",
    contentCreator: "BPO Trainer",
    thumbnail: videoThumbnail,
  },
  {
    id: 9,
    title: "Improve Your Vocabulary",
    category: "Improve Your English",
    contentCreator: "English Mastery",
    thumbnail: videoThumbnail,
  },
  {
    id: 10,
    title: "Practice Speaking English",
    category: "Improve Your English",
    contentCreator: "Fluent English",
    thumbnail: videoThumbnail,
  },
  {
    id: 11,
    title: "Understanding Financial Statements",
    category: "Accounting & Finance",
    contentCreator: "Finance Academy",
    thumbnail: videoThumbnail,
  },
  {
    id: 12,
    title: "Budgeting Basics",
    category: "Accounting & Finance",
    contentCreator: "Finance Academy",
    thumbnail: videoThumbnail,
  },
  {
    id: 13,
    title: "Photoshop Basics",
    category: "Design & Photoshop",
    contentCreator: "Design Pro",
    thumbnail: videoThumbnail,
  },
  {
    id: 14,
    title: "Creating Stunning Graphics in Photoshop",
    category: "Design & Photoshop",
    contentCreator: "Design Master",
    thumbnail: videoThumbnail,
  },
  {
    id: 15,
    title: "Fundamentals of Business Development",
    category: "Business Development",
    contentCreator: "Biz Dev Expert",
    thumbnail: videoThumbnail,
  },
  {
    id: 16,
    title: "Strategies for Growth",
    category: "Business Development",
    contentCreator: "Biz Growth Coach",
    thumbnail: videoThumbnail,
  },
  {
    id: 17,
    title: "Introduction to Digital Marketing",
    category: "Marketing",
    contentCreator: "Marketing 101",
    thumbnail: videoThumbnail,
  },
  {
    id: 18,
    title: "Creating a Business Plan",
    category: "Business Development",
    contentCreator: "Business Coach",
    thumbnail: videoThumbnail,
  },
  {
    id: 19,
    title: "Advanced Photoshop Techniques",
    category: "Design & Photoshop",
    contentCreator: "Design Expert",
    thumbnail: videoThumbnail,
  },
  {
    id: 20,
    title: "Fashion Design Basics",
    category: "Corporate Fashion",
    contentCreator: "Fashion Designer",
    thumbnail: videoThumbnail,
  },
  {
    id: 21,
    title: "Mastering Telecalling Techniques",
    category: "BPO & Telecaller",
    contentCreator: "CallCenter Guru",
    thumbnail: videoThumbnail,
  },
  {
    id: 22,
    title: "Effective Email Communication",
    category: "Improve Your English",
    contentCreator: "English Mastery",
    thumbnail: videoThumbnail,
  },
  {
    id: 23,
    title: "Analyzing Market Trends",
    category: "Marketing",
    contentCreator: "Market Analyst",
    thumbnail: videoThumbnail,
  },
  {
    id: 24,
    title: "Finance for Non-Financial Managers",
    category: "Accounting & Finance",
    contentCreator: "Finance Trainer",
    thumbnail: videoThumbnail,
  },
];

// Categories data
const categoriesData = [
  "Corporate Fashion",
  "BPO & Telecaller",
  "Business Development",
  "Improve Your English",
  "Accounting & Finance",
  "Design & Photoshop",
  "Marketing",
];

// Main component
const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category
  const [videoToPlay, setVideoToPlay] = useState(null); // For playing video

  // Filter videos based on selected category and limit to 4
  const filteredVideos =
    selectedCategory === "All"
      ? videosData.slice(0, 4) // Show the first 4 videos if 'All' is selected
      : videosData
          .filter((video) => video.category === selectedCategory)
          .slice(0, 4); // Filter by category and limit to 4 videos

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Categories</h1>
        <p className="text-lg mb-4 text-center">
          Get tailored learning recommendations and learn from industry professionals!
        </p>

        {/* Categories Section (Horizontal Scrollable) */}
        <div className="flex space-x-4 overflow-x-auto mb-8">
          <CategoryCard
            title="All"
            onClick={() => setSelectedCategory("All")}
            isSelected={selectedCategory === "All"}
          />
          {categoriesData.map((category) => (
            <CategoryCard
              key={category}
              title={category}
              onClick={() => setSelectedCategory(category)}
              isSelected={selectedCategory === category}
            />
          ))}
        </div>

        {/* Video Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              contentCreator={video.contentCreator}
              thumbnail={video.thumbnail}
              playIcon={playIcon}
              onPlay={() => setVideoToPlay(video)}
            />
          ))}
        </div>

        {/* Browse All Button */}
        <div className="text-center">
          <button className="bg-blue-500 text-lg text-white font-bold py-3 px-12 rounded shadow hover:bg-blue-600 transition duration-300">
            Browse all videos
          </button>
        </div>

        {/* Video Modal (if a video is selected to play) */}
        {videoToPlay && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full">
              <h2 className="text-xl font-bold mb-2">{videoToPlay.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                Content created by {videoToPlay.contentCreator}
              </p>
              {/* Example of embedding a video */}
              <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center">
                {/* Replace this div with actual video player */}
                <span>Video Player Placeholder</span>
              </div>
              <button
                onClick={() => setVideoToPlay(null)}
                className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Component for Category Card
const CategoryCard = ({ title, onClick, isSelected }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer bg-white  p-3 flex-shrink-0 mx-2 rounded-lg shadow-md text-center ${
      isSelected ? "bg-blue-500 text-yellow-500" : ""
    } hover:bg-blue-400 transition duration-300`}
    style={{ minWidth: "120px" }} // Adjusted width for smaller card
  >
    <h2 className="text-lg font-bold mb-1">{title}</h2>
  </div>
);

// Component for Video Card
const VideoCard = ({ title, contentCreator, thumbnail, playIcon, onPlay }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
    <div className="relative">
      <img src={thumbnail} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
      <button
        onClick={onPlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:shadow-lg transition duration-300"
      >
        <img src={playIcon} alt="Play" className="w-8 h-8" />
      </button>
    </div>
    <h3 className="text-lg font-semibold mt-2">{title}</h3>
    <p className="text-sm text-gray-500">By {contentCreator}</p>
  </div>
);

export default Explore;
