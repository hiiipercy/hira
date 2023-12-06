const ScrollablePage = () => {
  return (
    <div>
      <Navbar />

      {/* Page content with sections */}
      <Element name="section1" className="section">
        Section 1 Content
      </Element>
      <Element name="section2" className="section">
        Section 2 Content
      </Element>
      <Element name="section3" className="section">
        Section 3 Content
      </Element>
    </div>
  );
};

export default ScrollablePage;