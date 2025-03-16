import React from "react";
// Import logo React
import ReactLogo from "../../../assets/react.svg";

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Notifications</h2>

        {/* Notifikasi Card */}
        <div className="border border-blue-200 bg-white rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
              <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
            </div>

            {/* Bagian Teks */}
            <div className="flex-1">
              {/* Baris atas: Nama, aksi, dan ikon kontrol */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">
                    John Doe{" "}
                    <span className="font-normal text-gray-700">
                      commented on your post
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    less than a minute ago
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Mark as Read"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H3a1 1 0 100 2h1.197l.885 9.658A3 3 0 008.06 18h3.88a3 3 0 002.978-2.342L15.803 6H17a1 1 0 100-2h-4.382l-.724-1.447A1 1 0 0010.999 2H9zm1 4a1 1 0 01.993.883L11 7v6a1 1 0 01-1.993.117L9 13V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notifikasi Card */}
        <div className="border border-blue-200 bg-white rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
              <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
            </div>

            {/* Bagian Teks */}
            <div className="flex-1">
              {/* Baris atas: Nama, aksi, dan ikon kontrol */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">
                    John Doe{" "}
                    <span className="font-normal text-gray-700">
                      commented on your post
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    less than a minute ago
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Mark as Read"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H3a1 1 0 100 2h1.197l.885 9.658A3 3 0 008.06 18h3.88a3 3 0 002.978-2.342L15.803 6H17a1 1 0 100-2h-4.382l-.724-1.447A1 1 0 0010.999 2H9zm1 4a1 1 0 01.993.883L11 7v6a1 1 0 01-1.993.117L9 13V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notifikasi Card */}
        <div className="border border-blue-200 bg-white rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
              <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
            </div>

            {/* Bagian Teks */}
            <div className="flex-1">
              {/* Baris atas: Nama, aksi, dan ikon kontrol */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">
                    John Doe{" "}
                    <span className="font-normal text-gray-700">
                      commented on your post
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    less than a minute ago
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Mark as Read"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H3a1 1 0 100 2h1.197l.885 9.658A3 3 0 008.06 18h3.88a3 3 0 002.978-2.342L15.803 6H17a1 1 0 100-2h-4.382l-.724-1.447A1 1 0 0010.999 2H9zm1 4a1 1 0 01.993.883L11 7v6a1 1 0 01-1.993.117L9 13V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notifikasi Card */}
        <div className="border border-blue-200 bg-white rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
              <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
            </div>

            {/* Bagian Teks */}
            <div className="flex-1">
              {/* Baris atas: Nama, aksi, dan ikon kontrol */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">
                    John Doe{" "}
                    <span className="font-normal text-gray-700">
                      commented on your post
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    less than a minute ago
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Mark as Read"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H3a1 1 0 100 2h1.197l.885 9.658A3 3 0 008.06 18h3.88a3 3 0 002.978-2.342L15.803 6H17a1 1 0 100-2h-4.382l-.724-1.447A1 1 0 0010.999 2H9zm1 4a1 1 0 01.993.883L11 7v6a1 1 0 01-1.993.117L9 13V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notifikasi Card */}
        <div className="border border-blue-200 bg-white rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
              <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
            </div>

            {/* Bagian Teks */}
            <div className="flex-1">
              {/* Baris atas: Nama, aksi, dan ikon kontrol */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">
                    John Doe{" "}
                    <span className="font-normal text-gray-700">
                      commented on your post
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    less than a minute ago
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Mark as Read"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H3a1 1 0 100 2h1.197l.885 9.658A3 3 0 008.06 18h3.88a3 3 0 002.978-2.342L15.803 6H17a1 1 0 100-2h-4.382l-.724-1.447A1 1 0 0010.999 2H9zm1 4a1 1 0 01.993.883L11 7v6a1 1 0 01-1.993.117L9 13V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notifikasi Card */}
        <div className="border border-blue-200 bg-white rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
              <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
            </div>

            {/* Bagian Teks */}
            <div className="flex-1">
              {/* Baris atas: Nama, aksi, dan ikon kontrol */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">
                    John Doe{" "}
                    <span className="font-normal text-gray-700">
                      commented on your post
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    less than a minute ago
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Mark as Read"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600"
                    title="Delete"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H3a1 1 0 100 2h1.197l.885 9.658A3 3 0 008.06 18h3.88a3 3 0 002.978-2.342L15.803 6H17a1 1 0 100-2h-4.382l-.724-1.447A1 1 0 0010.999 2H9zm1 4a1 1 0 01.993.883L11 7v6a1 1 0 01-1.993.117L9 13V7a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notifikasi Card */}
        <div className="border border-blue-200 bg-gray-200 rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full flex items-center justify-center">
              <img src={ReactLogo} alt="React Logo" className="h-6 w-6" />
            </div>

            {/* Bagian Teks */}
            <div className="flex-1">
              {/* Baris atas: Nama, aksi, dan ikon kontrol */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">
                    John Doe{" "}
                    <span className="font-normal text-gray-700">
                      commented on your post
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    less than a minute ago
                  </p>
                </div>
                <div className="flex items-center space-x-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
