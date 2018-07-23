import React from 'react';

const Frontmatters = {
  site_name: "Unresolved",
  base_url: "https://yet.unresolved.xyz",
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
    mainSkills: ["Ruby", "Ruby on Rails", "JavaScript(ES2015)", "SEO", ],
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
      title: "unresolved",
      descriptionShort: (
        <div>
          <p>Tech blog.</p>
        </div>
      ),
      stack: ["GatsbyJS", "React", "Contentful", "Netlify", "Server Side Rendering", "Responsive Web Design"],
      sourceUrl: "https://github.com/dim0627/blog.unresolved.xyz",
      relatedUrl: "https://blog.unresolved.xyz/",
      index: true,
    },
    {
      title: "Portfolio",
      descriptionShort: (
        <div>
          <p>It is about this page you are looking at.</p>
        </div>
      ),
      stack: ["React", "yarn", "webpack", "ES2015"],
      sourceUrl: "https://github.com/dim0627/portfolio",
      relatedUrl: "https://yet.unresolved.xyz",
      index: false,
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
      index: false,
    },
    {
      title: "NikuPeer(EOL)",
      descriptionShort: (
        <div>
          <p>Web service for plan and join meat party.</p>
          <p>Support Event structured data for Google rich snippet.</p>
        </div>
      ),
      stack: ["Rails 5.1.4", "webpacker", "yarn", "webpack", "PostCSS", "ES2015", "AMP"],
      index: true,
    },
    {
      title: "RECR(EOL)",
      descriptionShort: (
        <div>
          <p>Part-time job listing service for not large organizations such as personal store.</p>
          <p>Support JobPosting structured data for Google for Jobs.</p>
        </div>
      ),
      stack: ["Rails 5.1.4", "webpacker", "yarn", "webpack", "PostCSS", "ES2015", "AMP"],
    },
    {
      title: "Hugo Theme Solit",
      stack: ["Hugo", "Go html/template", "Responsive Web Design", "AMP"],
      sourceUrl: "https://github.com/dim0627/hugo_theme_solit",
      relatedUrl: "https://themes.gohugo.io/hugo_theme_solit/",
      index: false,
    },
    {
      title: "Hugo Theme Robust",
      descriptionShort: (
        <div>
          <p>Full stack blog theme for Hugo.</p>
          <p>Supported Google AMP Project, splitted default HTML and AMP HTML.</p>
        </div>
      ),
      stack: ["Hugo", "Go html/template", "Responsive Web Design", "AMP"],
      sourceUrl: "https://github.com/dim0627/hugo_theme_robust",
      relatedUrl: "https://themes.gohugo.io/robust/",
      index: true,
    },
    {
      title: "Hugo Theme Aglaus",
      descriptionShort: (
        <div>
          <p>Single column blog theme for Hugo.</p>
          <p>Supported Google AMP Project, generate AMP HTML only.</p>
        </div>
      ),
      stack: ["Hugo", "Go html/template", "Responsive Web Design", "AMP"],
      sourceUrl: "https://github.com/dim0627/hugo_theme_aglaus",
      relatedUrl: "https://themes.gohugo.io/aglaus/",
      index: false,
    },
    {
      title: "Hugo Theme Beg",
      descriptionShort: (
        <div>
          <p>Bootstrap based theme for Hugo.</p>
          <p>Theme skeleton for beginners of Hugo theme createors who want to using Bootstrap.</p>
        </div>
      ),
      stack: ["Hugo", "Go html/template", "Responsive Web Design", "Bootstrap"],
      sourceUrl: "https://github.com/dim0627/hugo_theme_beg",
      relatedUrl: "https://themes.gohugo.io/beg/",
      index: false,
    },
    {
      title: "42 Design Work(EOL)",
      descriptionShort: (
        <div>
          <p>My private blog for technology problem.</p>
        </div>
      ),
      stack: ["Hugo", "Go html/template", "Responsive Web Design", "AMP"],
      sourceUrl: "https://github.com/dim0627/blog",
      relatedUrl: "https://42-design.work/",
      index: true,
    },
  ],
  works: [
    {
      title: "Rista, inc.",
      workingFrom: new Date(2016, 10, 1),
      workingTo: new Date(2017, 12, 1),
      role: "Web Developer, SEO Analyist",
      stack: ["Ruby", "Ruby on Rails", "ES2015", "MySQL", "Elasticsearch"],
    },
    {
      title: "Pharma Information Network, inc.",
      workingFrom: new Date(2015, 8, 1),
      workingTo: new Date(2016, 10, 1),
      role: "Lead Developer, SEO Analyist",
      stack: ["PHP", "Laravel", "Python", "Golang", "Ruby", "Ruby on Rails", "MySQL", "Elasticsearch"],
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
