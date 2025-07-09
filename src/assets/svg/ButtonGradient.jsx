const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
 <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
  <stop offset="0%" stopColor="#5B247A" />
  <stop offset="100%" stopColor="#1B1B2F" />
</linearGradient>

<linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
  <stop offset="0%" stopColor="#3A0CA3" />
  <stop offset="100%" stopColor="#7209B7" />
</linearGradient>

<linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
  <stop offset="0%" stopColor="#4361EE" />
  <stop offset="100%" stopColor="#4CC9F0" />
</linearGradient>

<linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
  <stop offset="0%" stopColor="#480CA8" />
  <stop offset="100%" stopColor="#4CC9F0" />
</linearGradient>

      </defs>
    </svg>
  );
};

export default ButtonGradient;
