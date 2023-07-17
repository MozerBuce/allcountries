/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ThemeContext } from "../context/context";
import * as XLSX from "xlsx";


export default function TopBar() {
    const { region, selectedCountries, setSelectedCountries } = useContext(ThemeContext);

   const handleExport = () => {
    let workBook = XLSX.utils.book_new();
    let workSheet = XLSX.utils.json_to_sheet(selectedCountries);
    XLSX.utils.book_append_sheet(workBook, workSheet, "countries");

    XLSX.writeFile(workBook, region + "_countries.xlsx");

   }

    return (
        <>
            <div className="shadow-xl h-[170px] w-full bg-white-700 md:h-[90px]">
                <div className="flex flex-col h-full w-full md:flex-row items-center justify-between px-10 py-5 ">
                    <div className="flex flex-col items-center gap-x-3 md:flex-row gap-y-3 ">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            autoComplete="search"
                            placeholder="Search"
                            className="w-[150px] px-2 py-1.5 border border-2 border-blue-700 rounded-md outline-none sm:w-[250px]"
                        />
                        <button className="bg-blue-700 w-fit text-white rounded-md py-2 px-5 text-center">
                            <img src="/icons/search.svg" alt="seach icon" width="20px" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-x-3 md:flex-row gap-y-3 ">
                        <button className=" bg-blue-700 w-fit text-white rounded-md py-2 px-5 text-center"
                            onClick={ handleExport }
                        >
                            <img src="/icons/download.svg" alt="download icon" width="20px" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}