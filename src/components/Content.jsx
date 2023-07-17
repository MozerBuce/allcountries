/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/context";

export default function Content() {
  const { region, setRegion, selectedCountries, setSelectedCountries } = useContext(ThemeContext);

  const POSTS_PER_PAGE = 6;
  const CENTRAL_PAGES = 3;

  const [allCountries, setAllCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedCountries, setDisplayedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=region,name,capital,languages,currencies,flags"
      );
      const countriesToSort = await response.json();

      let filteredCountries = countriesToSort;
      if (region !== "all") {
        filteredCountries = countriesToSort.filter(
          (country) => country.region === region
        );
      }

      const sortedCountries = filteredCountries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );


      setAllCountries(sortedCountries);
      setSelectedCountries(allCountries);
    };




    fetchData();

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    setDisplayedCountries(allCountries.slice(startIndex, endIndex));
  }, [allCountries, currentPage, region, selectedCountries, setSelectedCountries]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(allCountries.length / POSTS_PER_PAGE);

    if (totalPages <= 1) {
      return null;
    }

    const firstPage = 1;
    const lastPage = totalPages;

    let centralStart = Math.max(currentPage - Math.floor(CENTRAL_PAGES / 2), 2);
    let centralEnd = Math.min(
      currentPage + Math.floor(CENTRAL_PAGES / 2),
      totalPages - 1
    );

    if (centralEnd - centralStart + 1 < CENTRAL_PAGES - 1) {
      centralEnd = Math.min(centralEnd + (CENTRAL_PAGES - 1 - (centralEnd - centralStart + 1)), totalPages - 1);
    }

    const pages = [firstPage];

    if (centralStart > 2) {
      pages.push("...");
    }

    for (let i = centralStart; i <= centralEnd; i++) {
      pages.push(i);
    }

    if (centralEnd < totalPages - 1) {
      pages.push("...");
    }

    pages.push(lastPage);

    return (
      <div className="flex justify-center mt-4">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 rounded-sm ${currentPage === page ? "bg-blue-500 text-white" : "bg-white border-2"
              }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col m-10">
        <div>
          {region}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {displayedCountries.map((country, index) => (
            <div key={index} className="flex flex-col w-full  gap-x-5">
              <div className="p-4">
                <img
                  loading="lazy"
                  src={country.flags.svg}
                  alt="flag"
                  className="h-auto border-2"
                />
              </div>
              <div className="px-4 py-2 flex flex-col">
                <p className="text-gray-600">
                  <strong>Region: </strong> {country.region}{" "}
                </p>
                <p className="text-gray-600">
                  <strong>Common name: </strong> {country.name.common}{" "}
                </p>
                <p className="text-gray-600">
                  <strong>Official name: </strong>
                  {country.name.official}{" "}
                </p>
                <p className="text-gray-600">
                  <strong>Capital city: </strong>
                  {Object.values(country.capital).join(", ")}
                </p>
                <p className="text-gray-600">
                  <strong>Official language: </strong>
                  {Object.values(country.languages).join(", ")}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-10">
          {renderPaginationButtons()}
        </div>
      </div>

    </>
  );
}
