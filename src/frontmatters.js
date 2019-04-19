import React from 'react';

const Frontmatters = {
  siteName: "Unresolved",
  baseUrl: "https://yet.unresolved.xyz",
  mainColor: "#fdce12",
  accentColor: "",
  baseColor: "#333",
  motto: (
    <div>Unresolved today,<br />Solve in tomorrow.</div>
  ),
  author: {
    name: "Daisuke Tsuji",
    email: "dim0627@gmail.com",
    phoneNumber: "090-5991-6692",
    dob: new Date(1989, 1, 26),
    roles: ["Web Developer", "SEO Analyst", ],
    languages: ["Japanese", "English(Learning)", ],
    mainSkills: ["Ruby", "Ruby on Rails", "ES6", "SEO", ],
    subSkills: ["Golang", "Python", "PHP", "Elasticsearch", "Design", "Writing", ],
    hiring: (
    <div>
      <p>Welcome :)</p>
      <p>I'm looking for developer positions in startups in English speaking countries.</p>
    </div>
    ),
    social: {
      github: "https://github.com/dim0627",
      github_id: "dim0627",
      twitter: "https://twitter.com/dim0627",
      twitter_id: "dim0627",
      linkedin: "https://www.linkedin.com/in/daisuke-tsuji-2a379a118",
      linkedin_id: "daisuke-tsuji-2a379a118",
      facebook: "https://www.facebook.com/daisuke.tsuji.735",
      facebook_id: "daisuke.tsuji.735",
    }
  },
  projects: [
    {
      title: "nutry.co",
      descriptionShort: (
        <div>
          <p>nutry is trouble consultation service for managed dieticians.</p>
        </div>
      ),
      stack: ["Rails 5.2.0", "webpacker", "cssnext", "ES6"],
      relatedUrl: "https://nutry.co/",
    },
    {
      title: "blog.unresolved.xyz",
      descriptionShort: (
        <div>
          <p>Tech blog.</p>
        </div>
      ),
      stack: ["GatsbyJS", "Contentful", "Netlify", "Server Side Rendering"],
      sourceUrl: "https://github.com/dim0627/blog.unresolved.xyz",
      relatedUrl: "https://blog.unresolved.xyz/",
    },
    {
      title: "yet.unresolved.xyz",
      descriptionShort: (
        <div>
          <p>It is about this page you are looking at.</p>
        </div>
      ),
      stack: ["React"],
      sourceUrl: "https://github.com/dim0627/portfolio",
      relatedUrl: "https://yet.unresolved.xyz",
    },
    {
      title: "TIL(Today I Learned)",
      descriptionShort: (
        <div>
          <p>Memo repositoriy a.k.a. TIL.</p>
        </div>
      ),
      stack: ["GitHub", "Markdown"],
      relatedUrl: "https://github.com/dim0627/til",
    },
    {
      title: "NikuPeer(EOL)",
      descriptionShort: (
        <div>
          <p>Web service for plan and join meat party.</p>
          <p>Support Event structured data for Google rich snippet.</p>
        </div>
      ),
      stack: ["Rails 5.1.4", "webpacker", "cssnext", "ES6", "AMP"],
    },
    {
      title: "RECR(EOL)",
      descriptionShort: (
        <div>
          <p>Part-time job listing service for not large organizations such as personal store.</p>
          <p>Support JobPosting structured data for Google for Jobs.</p>
        </div>
      ),
      stack: ["Rails 5.1.4", "webpacker", "cssnext", "ES6", "AMP"],
    },
  ],
  works: [
    {
      title: "Lang-8 inc.",
      workingFrom: new Date(2018, 10, 1),
      role: "Web Developer",
      stack: ["Ruby", "Rails 4.2.0", "Elasticsearch", "i18n"],
    },
    {
      title: "DMM.com LLC(Freelance)",
      workingFrom: new Date(2018, 9, 1),
      role: "Web Developer",
      stack: ["Ruby", "Rails 5.2.1", "Elasticsearch", "ES6"],
    },
    {
      title: "Pharma Information Network, inc.(Freelance)",
      workingFrom: new Date(2018, 8, 1),
      role: "Chief Developer",
      stack: ["Ruby", "Rails 5.2.1", "ES6"],
    },
    {
      title: "Fitsplus, inc.(Freelance)",
      workingFrom: new Date(2017, 11, 1),
      role: "Web Developer, Project Manager",
      stack: ["Ruby", "Rails 5.2.0", "ES6", "AWS"],
    },
    {
      title: "Rista, inc.",
      workingFrom: new Date(2016, 10, 1),
      workingTo: new Date(2017, 11, 1),
      role: "Web Developer, SEO Analyist",
      stack: ["Ruby", "Rails 5.2.0", "ES6", "MySQL", "Elasticsearch"],
    },
    {
      title: "Pharma Information Network, inc.",
      workingFrom: new Date(2015, 8, 1),
      workingTo: new Date(2016, 10, 1),
      role: "Lead Developer, SEO Analyist",
      stack: ["PHP", "Laravel", "Python", "Golang", "Ruby", "Ruby on Rails", "Elasticsearch"],
    },
    {
      title: "MedPeer, inc.",
      workingFrom: new Date(2015, 1, 1),
      workingTo: new Date(2015, 8, 1),
      role: "Web Developer",
      stack: ["PHP", "Laravel", "MySQL", "AWS CloudSearch"],
    },
    {
      title: "Kakaku.com, inc.",
      workingFrom: new Date(2014, 6, 1),
      workingTo: new Date(2015, 0, 1),
      role: "Web Developer",
      stack: ["C#", "VB Script", "SQL Server"],
    },
  ],
};

export default Frontmatters;
