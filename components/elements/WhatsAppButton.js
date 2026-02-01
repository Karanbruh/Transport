import { useEffect, useState } from "react"

export default function WhatsAppButton() {
  // const [show, setShow] = useState(false)

  // useEffect(() => {
  //     const onScroll = () => setShow(window.scrollY > 100)
  //     window.addEventListener("scroll", onScroll)
  //     return () => window.removeEventListener("scroll", onScroll)
  // }, [])

  // if (!show) return null

  return (
    <a
      href="https://wa.me/9819370334?text=Hello👋"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        width="28"
        height="28"
      >
        <path d="M16.04 2.003c-7.732 0-14.02 6.287-14.02 14.02 0 2.472.646 4.884 1.875 7.02L2 30l7.143-1.86a13.94 13.94 0 006.897 1.86h.005c7.73 0 14.02-6.287 14.02-14.02 0-3.75-1.46-7.27-4.11-9.92a13.94 13.94 0 00-9.915-4.057zm0 25.49c-2.225 0-4.402-.596-6.3-1.72l-.45-.266-4.24 1.104 1.132-4.134-.293-.426a11.45 11.45 0 01-1.78-6.08c0-6.312 5.135-11.446 11.45-11.446a11.37 11.37 0 018.1 3.35 11.37 11.37 0 013.35 8.095c0 6.313-5.135 11.447-11.45 11.447zm6.287-8.62c-.345-.173-2.044-1.01-2.36-1.124-.317-.115-.547-.173-.777.173-.23.345-.892 1.124-1.095 1.354-.2.23-.403.26-.748.087-.345-.173-1.457-.537-2.776-1.712-1.026-.915-1.72-2.043-1.92-2.388-.2-.345-.02-.53.153-.702.155-.154.345-.402.517-.604.173-.2.23-.345.345-.575.115-.23.058-.432-.03-.605-.086-.173-.777-1.873-1.065-2.563-.28-.672-.565-.58-.777-.59l-.66-.012c-.23 0-.605.086-.92.432-.317.345-1.208 1.18-1.208 2.88 0 1.7 1.238 3.345 1.41 3.575.173.23 2.435 3.72 5.9 5.216.825.355 1.47.567 1.973.726.828.263 1.582.226 2.177.137.665-.1 2.044-.835 2.332-1.64.288-.806.288-1.497.2-1.64-.086-.144-.317-.23-.66-.402z" />
      </svg>


      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 100px; /* 👈 ABOVE scroll-up button */
          right: 26px;
          z-index: 2147483647;
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #1ebe5d);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.5);
          animation: pulse 2.5s infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.15) translateY(-4px);
          box-shadow: 0 25px 50px rgba(37, 211, 102, 0.7);
          animation: none;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </a>
  )
}
