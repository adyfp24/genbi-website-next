// import React, { useEffect, useRef }  from 'react'

// const AnimationObserver: React.FC = ({ children, animationClass = 'animate__fadeIn', threshold = 0.2 }) => {
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Tambahkan kelas animasi ketika elemen terlihat
//           entry.target.classList.add('animate__animated', animationClass);
//           // Hentikan observasi setelah animasi dijalankan
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         threshold: threshold, 
//         rootMargin: '0px'
//       }
//     );

//     if (elementRef.current) {
//       // Hapus kelas animasi terlebih dahulu
//       elementRef.current.classList.remove('animate__animated', animationClass);
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [animationClass, threshold]);

//   return (
//     <div ref={elementRef} className="opacity-0">
//       {children}
//     </div>
//   );
// };


