const Styles = () => (
  <style global jsx>{`
  ::-moz-selection {
    background: #333;
    color: #fff;
  }

  ::selection {
    background: #333;
    color: #fff;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fdce12;
    color: #333;
    font-family: 'Josefin Sans', sans-serif;
    font-size: inherit;
    font-weight: 400;
    line-height: 1rem;
    word-wrap: break-word;
  }

  h1, h2, h3, h4, h5 ,h6 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  a {
    transition-duration: .3s;
    color: #333;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  main
  header,
  footer,
  nav,
  section {
    display: block;
  }

  .l-container {
    position: relative;
    max-width: 68rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .l-container.narrow {
    max-width: 40rem;
  }

  .l-container.error {
    padding: 8rem 0;
  }

  .readmore {
    margin-top: 3rem;
    text-align: center;
  }

  .readmore a {
    display: inline-block;
    padding: 1.5rem 3rem;
    border-radius: 3px;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  `}</style>
)

export default Styles
