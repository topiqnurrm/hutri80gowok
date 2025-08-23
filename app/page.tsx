'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PosterData {
  id: string;
  title: string;
  imagePath: string;
  pdfLink: string;
}

const posterData: PosterData[] = [
  {
    id: 'rangkaian-acara',
    title: 'Poster Rangkaian Acara',
    imagePath: '/rundown.png',
    pdfLink: 'https://drive.google.com/file/d/1vpRsLg8uQDLgkhtODfvcJ4FIDe5wRtY4/view?usp=sharing'
  },
  {
    id: 'tirakatan',
    title: 'Poster Tirakatan',
    imagePath: '/poster-tirakatan.png',
    pdfLink: 'https://drive.google.com/file/d/1qMJW0YrEeUnqb9-4-tYQG-BFlVKFbT8f/view?usp=sharing'
  },
  {
    id: 'lomba',
    title: 'Poster Lomba',
    imagePath: '/lomba.png',
    pdfLink: 'https://drive.google.com/file/d/1B2jsJti39-pAbYSBniDJTztAiqIuV03L/view?usp=sharing'
  },
  {
    id: 'desain-cocard',
    title: 'Desain Cocard',
    imagePath: '/cocard.png',
    pdfLink: 'https://drive.google.com/file/d/17Q0gNkgu80YkYJ4d1Z3fzE9FFLhDBipr/view?usp=sharing'
  },
  {
    id: 'kesehatan',
    title: 'Poster Kesehatan',
    imagePath: '/pemeriksaankk.png',
    pdfLink: 'https://drive.google.com/file/d/1eYF31OzmV-3eyfDdbPdy7mkVExuF1a15/view?usp=sharing'
  },
  {
    id: 'lanyard',
    title: 'Lanyard (90x2 cm)',
    imagePath: '/lanyard.png',
    pdfLink: 'https://drive.google.com/file/d/1yWrmw7OowV7SKHkVyhDV4tB8nSnVvYds/view?usp=sharing'
  },
  {
    id: 'malam-puncak-poster',
    title: 'Poster Malam Puncak',
    imagePath: '/poster-malam-puncak.jpg',
    pdfLink: 'https://drive.google.com/file/d/1guwGFXCS4x6YMUgVpFqYmvlua5r0L4yA/view?usp=sharing'
  },
  {
    id: 'malam-puncak-banner',
    title: 'Banner Malam Puncak',
    imagePath: '/banner-punk.png',
    pdfLink: 'https://drive.google.com/file/d/1kO8NJNRCbh66isiMuFtD0ksmYzPZJgS4/view?usp=sharing'
  }
];

export default function Home() {
  const [selectedPoster, setSelectedPoster] = useState<PosterData>(posterData[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePosterSelect = (poster: PosterData) => {
    setSelectedPoster(poster);
  };

  const handlePdfDownload = () => {
    window.open(selectedPoster.pdfLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${
        isSidebarOpen ? 'w-80' : 'w-16'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          {isSidebarOpen && (
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Galeri Poster
            </h2>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={isSidebarOpen ? 'Minimize sidebar' : 'Expand sidebar'}
          >
            <svg
              className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
                isSidebarOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto h-full pb-20">
          {posterData.map((poster) => (
            <button
              key={poster.id}
              onClick={() => handlePosterSelect(poster)}
              className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 ${
                selectedPoster.id === poster.id
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-r-4 border-r-blue-500'
                  : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                {isSidebarOpen && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {poster.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Klik untuk melihat
                    </p>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedPoster.title}
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Klik tombol PDF untuk mengunduh file
              </p>
            </div>
            <button
              onClick={handlePdfDownload}
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              File PDF
            </button>
          </div>
        </header>

        {/* Image Display */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
                <Image
                  src={selectedPoster.imagePath}
                  alt={selectedPoster.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {selectedPoster.title} - Klik tombol PDF di atas untuk mengunduh
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}