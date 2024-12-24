// "use client";
// import { useEffect, useState } from "react";

// type SetValue<T> = T | ((val: T) => T);

// function useLocalStorage<T>(
//   key: string,
//   initialValue: T,
// ): [T, (value: SetValue<T>) => void] {
//   const [storedValue, setStoredValue] = useState(() => {
//     // Only run this code in the browser
//     if (typeof window !== "undefined") {
//       try {
//         const item = window.localStorage.getItem(key);
//         return item ? JSON.parse(item) : initialValue;
//       } catch (error) {
//         console.log(error);
//         return initialValue;
//       }
//     }
//     return initialValue;
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       try {
//         const valueToStore =
//           typeof storedValue === "function" ? storedValue(storedValue) : storedValue;
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }, [key, storedValue]);

//   return [storedValue, setStoredValue];
// }

// export default useLocalStorage;
