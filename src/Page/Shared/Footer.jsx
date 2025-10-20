const Footer = () => {
  const link = (
    <>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </>
  );

  const link2 = (
    <>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </>
  );

  return (
    <footer className="footer bg-base-200 text-base-content p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      
      {/* Services */}
      <nav className="w-full flex flex-col gap-2 items-center">
        {link}
      </nav>

      {/* Legal */}
      <nav className="w-full flex flex-col gap-2 items-center">
        {link2}
      </nav>

      {/* Newsletter */}
      <form className="w-full max-w-sm">
        <h6 className="footer-title ">Newsletter</h6>
        <fieldset className="form-control">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item w-full"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>

    </footer>
  );
};

export default Footer;
