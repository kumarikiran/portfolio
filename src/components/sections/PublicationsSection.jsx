import React from 'react';

const PublicationsSection = () => {
  const upcomingPapers = [
    {
      id: 1,
      title: "Unlocking gene transcription in cancer cells: the central role of multi-way enhancer-promoter interactions",
      authors: "K. Kumari, S. Shin, X. Li, D. Thirumalai",
      status: "Under preparation (To submit in 2024)"
    },
    {
      id: 2,
      title: "Time-dependent replication influences the formation of chromatin domains",
      authors: "Kiran Kumari",
      status: "Under preparation (To submit in 2024)"
    },
    {
      id: 3,
      title: "Predicting statistics of translocation events: role of chromatin compaction and double-strand DNA break",
      authors: "A. Jairam, S. Dutta, S. Kadam, K. Kumari, R. Padinhateeri",
      status: "Under preparation (To submit in 2024)"
    }
  ];

  const publishedPapers = [
    {
      id: 1,
      title: "Predicting scale-dependent chromatin polymer properties from systematic coarse-graining",
      authors: "S. Kadam, K. Kumari, V. Manivannan, S. Dutta, M. Mitra, R. Padinhateeri",
      journal: "Nat. Commun.",
      volume: "14, 4108 (2023)",
      doi: "10.1038/s41467-023-39907-2"
    },
    {
      id: 2,
      title: "Heterogeneous interactions and polymer entropy decide organization and dynamics of chromatin domains",
      authors: "K. Kumari, J. R. Prakash, R. Padinhateeri",
      journal: "Biophys J.",
      volume: "121, 1-19 (2022)",
      doi: "10.1101/2021.02.17.431616"
    },
    {
      id: 3,
      title: "Orc4 spatiotemporally stabilizes centromeric chromatin",
      authors: "L. Sreekumar, K. Kumari, A. Bakshi, N Varshney, Bhagya C., Thimmappa, K. Guin, L. Narlikar, R. Padinhateeri, R. Siddharthan, K. Sanyal",
      journal: "Genome Research",
      volume: "31, 607-621 (2021)",
      doi: "10.1101/gr.265900.120"
    },
    {
      id: 4,
      title: "Computing 3D chromatin configurations from contact probability maps by Inverse Brownian Dynamics",
      authors: "K. Kumari, B. Duenweg, R. Padinhateeri, J. R. Prakash",
      journal: "Biophys J.",
      volume: "118, 2193-2208 (2020)",
      doi: "10.1016/j.bpj.2020.02.017"
    },
    {
      id: 5,
      title: "Universality of the collapse transition of sticky polymers",
      authors: "A. Santra, K. Kumari, R. Padinhateeri, B. Duenweg, J. R. Prakash",
      journal: "Soft Matter",
      volume: "15, 7876-7887 (2019)",
      doi: "10.1039/C9SM01361J"
    }
  ];

  return (
    <section id="publications" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center text-gray-800 mb-3 font-medium">
          Publications
        </h2>
        <p className="text-center text-gray-600 mb-12 font-inter text-lg font-light">
          Research papers and academic contributions
        </p>

        {/* Upcoming Papers */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair text-gray-800 mb-6 font-medium">
            Research Papers Under Preparation
          </h3>
          <div className="space-y-6">
            {upcomingPapers.map((paper) => (
              <div key={paper.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 
                                           hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-inter text-gray-800 font-medium mb-2">
                  {paper.title}
                </h4>
                <p className="text-gray-600 font-inter text-sm mb-2">
                  {paper.authors}
                </p>
                <p className="text-gray-500 font-inter text-sm italic">
                  {paper.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Published Papers */}
        <div>
          <h3 className="text-2xl font-playfair text-gray-800 mb-6 font-medium">
            Published Research Papers
          </h3>
          <div className="space-y-6">
            {publishedPapers.map((paper) => (
              <div key={paper.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 
                                           hover:shadow-md transition-shadow duration-300">
                <h4 className="text-lg font-inter text-gray-800 font-medium mb-2">
                  {paper.title}
                </h4>
                <p className="text-gray-600 font-inter text-sm mb-2">
                  {paper.authors}
                </p>
                <p className="text-gray-500 font-inter text-sm">
                  <span className="font-medium">{paper.journal}</span> {paper.volume}
                </p>
                <a 
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-inter mt-2 inline-block"
                >
                  DOI: {paper.doi}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;