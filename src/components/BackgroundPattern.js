export default function BackgroundPattern() {
  return (
    <svg
      className="-z-10 absolute top-20 sm:top-40 md:left-1/4"
      width={302}
      height={384}
      fill="none"
      viewBox="0 0 302 384"
    >
      <defs>
        <pattern
          id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-100 dark:text-gray-700"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width={302} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
    </svg>
  );
  // return (
  //   <svg
  //     className={`absolute z-0 top-1/2 md:right-1/4 ${className}`}
  //     width={242}
  //     height={384}
  //     fill="none"
  //     viewBox="0 0 302 384"
  //   >
  //     <defs>
  //       <pattern
  //         id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
  //         x={0}
  //         y={0}
  //         width={20}
  //         height={20}
  //         patternUnits="userSpaceOnUse"
  //       >
  //         <rect
  //           x={0}
  //           y={0}
  //           width={4}
  //           height={4}
  //           className="text-gray-200 dark:text-gray-700"
  //           fill="currentColor"
  //         />
  //       </pattern>
  //     </defs>
  //     <rect width={302} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
  //   </svg>
  // );
}
