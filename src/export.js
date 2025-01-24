import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "CUSTOM HOME BUILDING",
    about:
      "",
  },
  {
    icon: construction,
    title: "HOME RENOVATIONS",
    about:
      " ",
  },
  {
    icon: design,
    title: "REMODELING",
    about:
      " ",
  },
  {
    icon: document,
    title: "ADDITIONS",
    about:
      " ",
  },
  {
    icon: paint,
    title: "EXPANSIONS",
    about:
      " ",
  },
  {
    icon: support,
    title: "PROJECT CONSULTATIONS",
    about:
      " ",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      " ",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      " ",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      " ",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      " ",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      " ",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      " ",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      " ",
    post: "Builder",
  },
];
