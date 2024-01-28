const FooterColumn = ({ title, links }) => {
  return (
    <div className='space-y-8'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <ul className='space-y-4'>
        {links?.map((link, index) => (
          <li key={index} className='text-lg font-semibold text-gray-500'>
            <a
              href={link.link}
              className='transition hover:text-gray-600 hover:underline hover:underline-offset-4'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
