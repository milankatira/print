import React from "react";
import "./Header.scss";
const Header = () => {

  const HeaderData = [
    {
      img: "/image/print/print.png",
      title: "Print Settings",
    },
    {
      img: "/image/print/design.png",
      title: "Design",
    },
    {
      img: "/image/print/message.png",
      title: "Message",
    },
    {
      img: "/image/print/preview.png",
      title: "Preview",
    },
    {
      img: "/image/print/import.png",
      title: "Import",
    },
  ];

  const WindowsHeaderData = [
    {
      img: "/image/print/page_setting.png",
      title: "Print Settings",
    },
    {
      img: "/image/print/design.png",
      title: "Design",
    },
    {
      img: "/image/print/section.png",
      title: "Sections",
    },
    {
      img: "/image/print/message.png",
      title: "Message",
    },
    {
      img: "/image/print/import.png",
      title: "Import",
    },
  ];

 const data= localStorage.getItem("theme");
console.log(data,"datas")
  
  return (
    <div className="navbar__image__container">
      {
        (data == "msDocs"
          ? WindowsHeaderData.map((item) => (
              <div className="image">
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
            ))
          : HeaderData.map((item) => (
              <div className="image">
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
            )))
      }
    </div>
  );
};

export default Header;
