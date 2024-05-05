import {
  FaAppStore,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 py-10 lg:py-20">
      <div className="container lg:w-[80%] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex items-start space-x-4">
            <FaAppStore
              color="white"
              className="w-10 h-10 border rounded-full cursor-pointer"
            />
            <div>
              <h2 className="text-lg lg:text-xl font-semibold text-white mb-2">
                Contact Publisher
              </h2>
              <p className="text-gray-400">dev.arun@gmail.com</p>
              <p className="text-gray-400">+916369546516</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">
              Explore
            </h2>
            <ul className="text-gray-400 space-y-2">
              <li>Partner</li>
              <li>Job Opportunities</li>
              <li>Advertise</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">
              Headquarters
            </h2>
            <address className="text-gray-400">
              No.18/2, First Floor, Bharathi Street, Thattanchavadi,
              Panruti-607106
            </address>
          </div>
          <div>
            <h2 className="text-lg lg:text-xl font-semibold text-white mb-4">
              Connections
            </h2>
            <div className="flex space-x-4 text-white items-center">
              <div className="group">
                <FaFacebookF className="w-4 h-4 group-hover:text-[#15bfae]" />
              </div>
              <div className="group">
                <FaXTwitter className="w-5 h-5 group-hover:text-[#15bfae] cursor-pointer" />
              </div>
              <div className="group">
                <FaWhatsapp className="w-5 h-5 group-hover:text-[#15bfae]" />
              </div>
              <div className="group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 group-hover:text-[#15bfae]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z"
                  />
                </svg>
              </div>
              <div className="group">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 group-hover:text-[#15bfae]"
                >
                  <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
