import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const DoorArrowLeftIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      className={classes.svg}
    >
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M6 2.5C5.17157 2.5 4.5 3.17157 4.5 4V16C4.5 16.8284 5.17157 17.5 6 17.5H9.88947C9.32692 16.6372 9 15.6068 9 14.5C9 11.4624 11.4624 9 14.5 9C14.8415 9 15.1757 9.03112 15.5 9.09069V4C15.5 3.17157 14.8284 2.5 14 2.5H6ZM8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10ZM19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM12.1468 14.146L12.1443 14.1486C12.0974 14.196 12.062 14.2505 12.0379 14.3086C12.0139 14.3667 12.0004 14.4303 12 14.497L12 14.5L12 14.503C12.0004 14.5697 12.0139 14.6333 12.0379 14.6914C12.0623 14.7504 12.0985 14.8056 12.1464 14.8536L14.1464 16.8536C14.3417 17.0488 14.6583 17.0488 14.8536 16.8536C15.0488 16.6583 15.0488 16.3417 14.8536 16.1464L13.7071 15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H13.7071L14.8536 12.8536C15.0488 12.6583 15.0488 12.3417 14.8536 12.1464C14.6583 11.9512 14.3417 11.9512 14.1464 12.1464L12.1468 14.146Z" />
      </g>
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H10.2572C10.0035 17.6929 9.78261 17.3578 9.59971 17H6C5.44772 17 5 16.5523 5 16V4C5 3.44772 5.44772 3 6 3H14C14.5523 3 15 3.44772 15 4V9.02242C15.3434 9.05337 15.6777 9.11588 16 9.20703V4C16 2.89543 15.1046 2 14 2H6ZM8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44771 6.44772 9 7 9C7.55228 9 8 9.44771 8 10ZM19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM12.1468 14.146L12.1443 14.1486C12.0974 14.196 12.062 14.2505 12.0379 14.3086C12.0139 14.3667 12.0004 14.4303 12 14.497L12 14.5L12 14.503C12.0004 14.5697 12.0139 14.6333 12.0379 14.6914C12.0623 14.7504 12.0985 14.8056 12.1464 14.8536L14.1464 16.8536C14.3417 17.0488 14.6583 17.0488 14.8536 16.8536C15.0488 16.6583 15.0488 16.3417 14.8536 16.1464L13.7071 15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H13.7071L14.8536 12.8536C15.0488 12.6583 15.0488 12.3417 14.8536 12.1464C14.6583 11.9512 14.3417 11.9512 14.1464 12.1464L12.1468 14.146Z" />
      </g>
    </svg>
  ),
  displayName: 'DoorArrowLeftIcon',
});