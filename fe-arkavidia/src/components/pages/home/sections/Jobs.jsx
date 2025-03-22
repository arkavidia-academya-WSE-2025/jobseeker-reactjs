import React from "react";
import Layout from "../../../layout/Layout";
import TopTag from "../../../topTag/TopTag";
import Topics from "./topics/Topics";
import JobCard from "../../../jobs/JobCard";
import ReactLogo from "../../../../assets/react.svg";
import { TbReload } from "react-icons/tb";

// Data pekerjaan yang lebih realistis
const jobData = [
  {
    id: 1,
    companyImg: ReactLogo, // bisa diganti dengan logo perusahaan yang sesuai
    jobTitle: "Senior UI/UX Designer",
    companyName: "Innovatech Solutions",
    jobDesc:
      "Memimpin proyek desain dari konsep hingga implementasi dan bekerja sama dengan tim lintas fungsi untuk meningkatkan pengalaman pengguna.",
  },
  {
    id: 2,
    companyImg: ReactLogo,
    jobTitle: "Full-Stack Developer",
    companyName: "TechGenix",
    jobDesc:
      "Mengembangkan dan memelihara aplikasi web yang skalabel dengan teknologi modern seperti React dan Node.js.",
  },
  {
    id: 3,
    companyImg: ReactLogo,
    jobTitle: "Product Manager",
    companyName: "Creative Minds Inc.",
    jobDesc:
      "Mengelola strategi produk dan roadmap, berkolaborasi dengan tim desain dan pengembang untuk menghasilkan produk inovatif.",
  },
  {
    id: 4,
    companyImg: ReactLogo,
    jobTitle: "Data Analyst",
    companyName: "Insight Analytics",
    jobDesc:
      "Menganalisis dataset besar untuk memberikan wawasan yang mendalam dan mendukung pengambilan keputusan bisnis.",
  },
  {
    id: 5,
    companyImg: ReactLogo,
    jobTitle: "DevOps Engineer",
    companyName: "CloudCore Systems",
    jobDesc:
      "Mengimplementasikan dan mengelola pipeline CI/CD serta infrastruktur cloud untuk memastikan ketersediaan dan skalabilitas aplikasi.",
  },
];

const Jobs = () => {
  return (
    <div className="w-full">
      <Layout className="w-full space-y-12 flex items-center justify-center flex-col">
        {/* Top Section */}
        <TopTag
          title={"Top Trending Jobs"}
          desc={"Apply filter to find jobs according to your requirements"}
        />

        {/* Job Section */}
        <div className="w-full flex items-start gap-16 flex-wrap">
          {/* Trending Topics Section */}
          <div className="md:w-1/3 w-full bg-sky-500/15 rounded-xl p-6 space-y-5 md:sticky relative md:top-5 top-0">
            <div className="w-full flex items-center justify-between border-b border-neutral-400/50 pb-5">
              <h1 className="text-x1 font-bold text-sky-600">
                See what we offers!
              </h1>
            </div>
            {/* Search Topics Section */}
            <Topics />
          </div>
          {/* Job Cards Section */}
          <div className="flex-1 space-y-12">
            <div className="w-full space-y-5">
              {jobData.map((job) => (
                <JobCard
                  key={job.id}
                  companyImg={job.companyImg}
                  jobTitle={job.jobTitle}
                  companyName={job.companyName}
                  jobDesc={job.jobDesc}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Jobs;
