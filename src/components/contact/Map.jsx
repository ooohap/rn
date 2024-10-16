export default function Map() {
  return (
    <div className="mt-12 m-auto w-full  md:ml-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14431.17263857585!2d55.3286344898118!3d25.277542556117652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434deb572bb9%3A0x33ab218fbacb4b9a!2zQWwgU2FmaSBCdWlsZGluZyAtINi02KfYsdi5INmoIC0g2K_Zitix2KkgLSDYp9mE2YXYsdixIC0g2K_YqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1728481717958!5m2!1sar!2seg"
        className="mx-auto w-[240px] sm:w-[500px]"
        width="500"
        height="350"
        frameBorder="0"
        style={{ border: 0 }}
        // allowFullScreen
        loading="lazy"
        aria-hidden="false"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex="0"
      />
    </div>
  );
}
