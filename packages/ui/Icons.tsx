import { SVGProps } from 'react'

const GLOBAL_PROPS = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '1em',
  height: '1em',
  strokeWidth: '1.5',
}

export const IconArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5"
    />
  </svg>
)

export const IconLongArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
      {...GLOBAL_PROPS}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
      />
    </svg>
  )
}

export const IconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

export const IconPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props} {...GLOBAL_PROPS}>
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
)

export const IconSort = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" {...props} {...GLOBAL_PROPS}>
    <path
      fill="currentColor"
      d="M15.5625 9.425h0l-5.5555-9.375-5.5555 9.375z"
    />
    <path
      fill="currentFill"
      d="M15.5625 10.625h0l-5.5555 9.375-5.5555-9.375z"
    />
  </svg>
)

export const IconUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

export const IconPlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const IconMinusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const IconVerticalDots = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props} {...GLOBAL_PROPS}>
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
)

export const IconCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export const IconTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
)

export const IconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
)

export const IconWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props} {...GLOBAL_PROPS}>
    <path d="m 23.3515 19.8663 l -10.304 -17.6641 c -0.2638 -0.4521 -0.7479 -0.7302 -1.2715 -0.7302 c -0.5236 0 -1.0077 0.2782 -1.2715 0.7302 l -10.304 17.6641 c -0.2656 0.4553 -0.2674 1.0177 -0.005 1.4749 c 0.2627 0.4571 0.7493 0.7389 1.2765 0.7389 h 20.608 c 0.5272 0 1.0138 -0.2818 1.2765 -0.7389 c 0.2623 -0.4571 0.2605 -1.0196 -0.0051 -1.4749 z m -11.5755 -0.7304 c -0.8122 0 -1.472 -0.6591 -1.472 -1.472 c 0 -0.8129 0.6598 -1.472 1.472 -1.472 c 0.8136 0 1.472 0.6591 1.472 1.472 c 0 0.8129 -0.6584 1.472 -1.472 1.472 z m 1.472 -5.8879 c 0 0.8129 -0.6591 1.472 -1.472 1.472 s -1.472 -0.6591 -1.472 -1.472 v -4.416 c 0 -0.8129 0.6591 -1.472 1.472 -1.472 s 1.472 0.6591 1.472 1.472 v 4.416 z" />
  </svg>
)

export const IconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
)

export const IconClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
    />
  </svg>
)

export const IconPendingAccounts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path d="M3,21.016l.78984-2.87249C5.0964,13.3918,8.5482,10.984,12,10.984" />
    <circle cx="12" cy="5.98404" r="5" />
    <circle cx="17" cy="18" r="5" />
    <circle cx="17" cy="18" r="0.20745" />
    <circle cx="14.35106" cy="18" r="0.20745" />
    <circle cx="19.47832" cy="18" r="0.20745" />
  </svg>
)

export const IconActiveAccounts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path d="M3,21.016l.78984-2.87249C5.0964,13.3918,8.5482,11.016,12,11.016" />
    <circle cx="12" cy="5.98404" r="5" />
    <circle cx="17" cy="18" r="5" />
    <polyline points="14.872 18.149 16.32 20.082 19.533 16.572" />
  </svg>
)

export const IconExclamationCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
    />
  </svg>
)

export const IconCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

export const IconLoader = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} {...GLOBAL_PROPS}>
    <path
      d="M23.75 12.0138C23.75 18.5032 18.4893 23.7639 12 23.7639 5.5107 23.7639.25 18.5032.25 12.0138.25 5.5245 5.5107.2638 12 .2638 18.4893.2638 23.75 5.5245 23.75 12.0138ZM2.3841 12.0138C2.3841 17.3245 6.6893 21.6297 12 21.6297 17.3107 21.6297 21.6159 17.3245 21.6159 12.0138 21.6159 6.7031 17.3107 2.398 12 2.398 6.6893 2.398 2.3841 6.7031 2.3841 12.0138Z"
      fill="currentColor"
    />
    <path
      d="M22.3024 9.2746C22.8724 9.1249 23.2177 8.5392 23.0169 7.9852 22.6139 6.8733 22.0447 5.8268 21.3269 4.8818 20.3936 3.653 19.2274 2.6201 17.8949 1.842 16.5624 1.064 15.0897.556 13.5609.347 12.3852.1864 11.1939.205 10.0276.4005 9.4464.4979 9.1061 1.0865 9.2558 1.6565 9.4055 2.2265 9.9888 2.5608 10.5719 2.4752 11.465 2.3439 12.374 2.3388 13.2719 2.4615 14.5231 2.6325 15.7283 3.0482 16.8188 3.685 17.9093 4.3217 18.8637 5.167 19.6275 6.1726 20.1756 6.8943 20.6179 7.6885 20.9426 8.5308 21.1545 9.0807 21.7324 9.4244 22.3024 9.2746Z"
      fill="currentFill"
    />
  </svg>
)

export const IconCog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

export const IconLockClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
)

export const IconLockOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
)

export const IconList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
)

export const IconDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
)

export const IconDocumentCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
    />
  </svg>
)

export const IconCreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
    />
  </svg>
)

export const IconUserPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
    />
  </svg>
)

export const IconUserMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
    />
  </svg>
)

export const IconUsers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>
)

export const IconUserGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
    />
  </svg>
)

export const IconSquares = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  </svg>
)

export const IconSquaresPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
)

export const IconHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    {...GLOBAL_PROPS}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </svg>
)
