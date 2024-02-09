export const activeNavMenu = (path) => {
  const navItem = document.querySelectorAll(".main-menu li a");
  navItem.forEach((nav) => {
    if (nav.pathname === window.location.pathname) {
      if (!nav.href.includes("#")) {
        if (nav.pathname === "/contact" || nav.pathname === "/about") {
          nav.className = "active";
        } else {
          let navContainer = nav.parentElement.parentElement.parentElement;
          nav.parentElement.parentElement.parentElement.classList.add("active");
        }
      }
    }
  });
};

export const imageUpload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "mystore");
  data.append("cloud_name", "dqpj1vyjn");
  const res = await fetch(
    "	https://api.cloudinary.com/v1_1/dqpj1vyjn/image/upload",
    {
      method: "POST",
      body: data,
    }
  );

  const res2 = await res.json();
  console.log(res2);
  return res2.url;
};
