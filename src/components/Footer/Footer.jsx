function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed inset-x-0 bottom-0 z-10">
      <div className="flex justify-between items-center w-full px-1 py-1">
        <a href="https://github.com/brank8/" target="_blank" rel="noreferrer">
          <img src="/bs-2.png" alt="Logo" className="h-16 mt-1" />
        </a>
        <div className="text-center flex-grow mt-10">
          <span className="bg-white py-1 px-2 rounded">
            &copy; {year} Branko Stanisic. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
