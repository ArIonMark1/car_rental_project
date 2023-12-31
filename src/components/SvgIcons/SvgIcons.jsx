import css from "./SvgIcons.module.css";

export default function SvgIcons({ id, styles }) {
  switch (id) {
    case "close":
      return (
        <svg
          className={styles}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          fill="#000"
          stroke="#000"
        >
          <path
            d="M13 1L1 13"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1L13 13"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.6667"
            stroke="#000"
            d="M27.787 6.148c-1.327-1.328-3.161-2.149-5.187-2.149s-3.859 0.821-5.187 2.149l-1.413 1.413-1.413-1.413c-1.325-1.315-3.151-2.128-5.166-2.128-4.051 0-7.335 3.284-7.335 7.335 0 2.015 0.813 3.841 2.128 5.167l11.786 11.784 11.787-11.787c1.328-1.327 2.149-3.161 2.149-5.187s-0.821-3.859-2.149-5.187l-0-0z"
          ></path>
        </svg>
      );

    default:
      return <svg></svg>;
  }
}
