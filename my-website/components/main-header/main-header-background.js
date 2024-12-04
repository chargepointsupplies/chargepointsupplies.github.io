import classes from './main-header-background.module.css'

export default function MainHeaderBackground() {
  return (
    <div className={classes["header-background"]}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#059ed3', stopOpacity: '1' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#83dbf9', stopOpacity: '1' }}
            />
          </linearGradient>
          <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: 'rgba(0,0,0,0.1)', stopOpacity: '1' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: 'rgba(0,0,0,0)', stopOpacity: '1' }}
            />
          </linearGradient>
        </defs>

        {/* Shadow path */}
        <path
          fill="url(#shadowGradient)"
          d="M0,300 L1440,250 L1440,320 L0,320 Z"
        ></path>

        {/* Main path */}
        <path
          fill="url(#gradient)"
          d="M0,280 L1440,230 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
);
}