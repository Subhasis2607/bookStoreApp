import React, { useState } from "react";

function Cards({ item }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  // Function to fetch the PDF file from S3
  const fetchPdf = () => {
    console.log("Fetching PDF...");
    const url = "https://mybuck33.s3.ap-south-1.amazonaws.com/Repo.2.pdf.pdf";


    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error("Fetch error:", response.status, response.statusText);
          throw new Error("Failed to fetch PDF");
        }
        return response.blob();
      })
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        setPdfUrl(objectUrl);
        window.open(objectUrl, "_blank"); // Open PDF in a new tab
      })
      .catch((error) => console.error("Error fetching PDF file:", error));
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-94 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt="Book cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
              onClick={fetchPdf} // Call fetchPdf on click
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

